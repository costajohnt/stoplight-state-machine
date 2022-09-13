import { readVarT } from "@execonline-inc/environment";
import Task from "taskarian";
import Store from ".";
import { ConfigError } from "./Types";

export const assertNever = (x: never) => {
  throw new Error(`Unexpected object: ${x}`);
};

const parseIntT = (s: string): Task<string, number> =>
  new Task((reject, resolve) => {
    const num = parseInt(s, 10);
    isNaN(num) ? reject("not a number") : resolve(num);
    return () => {};
  });

const setTimerTransitionProhibiting = (store: Store) => (duration: number) =>
  setTimeout(() => {
    store.warning();
  }, duration);

export const transitionToWarning = (store: Store) =>
  Task.succeed<ConfigError, {}>({})
    .assign("duration", readVarT("REACT_APP_GREEN_TO_YELLOW_DURATION"))
    .andThen(({ duration }) => parseIntT(duration))
    .fork(store.systemError, setTimerTransitionProhibiting(store));

export const transitionToProhibiting = (store: Store) =>
  setTimeout(() => {
    store.prohibiting();
  }, 1200);

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
