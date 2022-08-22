import { action, computed, observable } from "mobx";
import { blinkingRed, green, lightsOut, red, State, yellow } from "./Types";
import { Maybe, just, nothing } from "maybeasy";

export const assertNever = (x: never) => {
  throw new Error(`Unexpected object: ${x}`);
};

class Store {
  @observable
  state: State = red();

  @action
  green = (): void => {
    switch (this.state.kind) {
      case "green":
      case "yellow":
        break;
      case "red":
      case "blinking-red":
      case "lights-out":
        this.state = green();
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  yellow = (): void => {
    switch (this.state.kind) {
      case "green":
        this.state = yellow();
        break;
      case "yellow":
      case "red":
      case "blinking-red":
      case "lights-out":
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  red = (): void => {
    switch (this.state.kind) {
      case "green":
      case "red":
        break;
      case "yellow":
      case "blinking-red":
      case "lights-out":
        this.state = red();
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  blinkingRed = (): void => {
    this.state = blinkingRed();
  };

  @action
  lightsOut = (): void => {
    this.state = lightsOut();
  };

  @computed
  get greenLight(): Maybe<"green"> {
    switch (this.state.kind) {
      case "green":
        return just("green");
      case "yellow":
      case "red":
      case "blinking-red":
      case "lights-out":
      default:
        return nothing();
    }
  }

  @computed
  get yellowLight(): Maybe<"#f7b500"> {
    switch (this.state.kind) {
      case "green":
        return nothing();
      case "yellow":
        return just("#f7b500");
      case "red":
      case "blinking-red":
      case "lights-out":
      default:
        return nothing();
    }
  }

  @computed
  get redLight(): Maybe<"red"> {
    switch (this.state.kind) {
      case "green":
      case "yellow":
        return nothing();
      case "red":
        return just("red");
      case "blinking-red":
      case "lights-out":
      default:
        return nothing();
    }
  }
}

export default Store;
