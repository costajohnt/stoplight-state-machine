import { observer } from "mobx-react";
import Store from ".";
import {
  assertNever,
  transitionToWarning,
  transitionToPriorityStraight,
  transitionToWarningLeft,
  transitionToPriorityLeft,
  transitionToProhibiting,
} from "./Helpers";
import ReactionComponent, { RCProps } from "./ReactionComponent";
import { State } from "./Types";

interface Props extends RCProps<Store> {
  store: Store;
}

class Reactions extends ReactionComponent<Store, State, Props> {
  tester = () => this.props.store.state;
  effect = (state: State) => {
    const { store } = this.props;
    console.log(state.kind);
    switch (state.kind) {
      case "priority-straight":
        transitionToWarning(store);
        break;
      case "warning":
        transitionToProhibiting(store);
        break;
      case "prohibiting":
        transitionToPriorityLeft(store);
        break;
      case "priority-left":
        transitionToWarningLeft(store);
        break;
      case "warning-left":
        transitionToPriorityStraight(store);
        break;
      case "system-error":
        console.warn("Error state has been entered, please resolve.");
        break;
      default:
        assertNever(state);
    }
  };
}

export default observer(Reactions);
