import { action, observable } from "mobx";
import { assertNever } from "./Helpers";
import {
  priorityLeft,
  priorityStraight,
  prohibiting,
  State,
  systemError,
  warning,
  warningLeft,
} from "./Types";

class Store {
  @observable
  state: State = prohibiting();

  @action
  priorityStraight = (): void => {
    switch (this.state.kind) {
      case "priority-straight":
      case "warning":
      case "priority-left":
      case "prohibiting":
        break;
      case "warning-left":
      case "system-error":
        this.state = priorityStraight();
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  warning = (): void => {
    switch (this.state.kind) {
      case "priority-straight":
        this.state = warning();
        break;
      case "system-error":
      case "warning":
      case "prohibiting":
      case "priority-left":
      case "warning-left":
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  prohibiting = (): void => {
    switch (this.state.kind) {
      case "priority-straight":
      case "prohibiting":
      case "priority-left":
      case "warning-left":
        break;
      case "warning":
      case "system-error":
        this.state = prohibiting();
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  priorityLeft = (): void => {
    switch (this.state.kind) {
      case "priority-straight":
        break;
      case "prohibiting":
        this.state = priorityLeft();
        break;
      case "priority-left":
      case "warning-left":
      case "warning":
      case "system-error":
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  warningLeft = (): void => {
    switch (this.state.kind) {
      case "priority-straight":
      case "prohibiting":
        break;
      case "priority-left":
        this.state = warningLeft();
        break;
      case "warning-left":
      case "warning":
      case "system-error":
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  systemError = (): void => {
    this.state = systemError();
  };
}

export default Store;
