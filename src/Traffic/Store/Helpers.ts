import { readVarT } from "@execonline-inc/environment";
import Task from "taskarian";
import Store from ".";
import { ConfigError, TimeoutTransition } from "./Types";

export const assertNever = (x: never) => {
  throw new Error(`Unexpected object: ${x}`);
};

export const parseIntT = (s: string): Task<string, number> =>
  new Task((reject, resolve) => {
    const num = parseInt(s, 10);
    isNaN(num) ? reject("not a number") : resolve(num);
    return () => {};
  });

const timeoutTransition =
  (store: Store, transition: TimeoutTransition) => (duration: number) =>
    setTimeout(() => {
      switch (transition) {
        case "prohibiting":
          return store.prohibiting();
        case "warning":
          return store.warning();
      }
    }, duration);

const key = (transition: TimeoutTransition) => {
  switch (transition) {
    case "prohibiting":
      return "REACT_APP_YELLOW_TO_RED_DURATION";
    case "warning":
      return "REACT_APP_GREEN_TO_YELLOW_DURATION";
  }
};

const duration = (transition: TimeoutTransition) => readVarT(key(transition));

const changeLight = (store: Store, transition: TimeoutTransition): void => {
  Task.succeed<ConfigError, {}>({})
    .assign("duration", duration(transition))
    .andThen(({ duration }) => parseIntT(duration))
    .fork(store.systemError, timeoutTransition(store, transition));
};

export const transitionToWarning = (store: Store) =>
  changeLight(store, "warning");

export const transitionToProhibiting = (store: Store) =>
  changeLight(store, "prohibiting");

export const transitionToPriorityLeft = (store: Store) =>
  setTimeout(() => {
    store.priorityLeft();
  }, 3000);

export const transitionToWarningLeft = (store: Store) =>
  setTimeout(() => {
    store.warningLeft();
  }, 1000);

export const transitionToPriorityStraight = (store: Store) =>
  setTimeout(() => {
    store.priorityStraight();
  }, 1000);
