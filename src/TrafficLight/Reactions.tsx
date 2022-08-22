import { observer } from "mobx-react";
import ReactionComponent, { RCProps } from "./ReactionComponent";
import Store from "./Store";
import { State } from "./Types";

interface Props extends RCProps<Store> {
  store: Store;
}

export const assertNever = (x: never) => {
  throw new Error(`Unexpected object: ${x}`);
};

class Reactions extends ReactionComponent<Store, State, Props> {
  tester = () => this.props.store.state;
  effect = (state: State) => {
    const { store } = this.props;
    switch (state.kind) {
      case "green":
        setTimeout(() => {
          store.yellow();
        }, 5000);
        break;
      case "yellow":
        setTimeout(() => {
          store.red();
        }, 1000);
        break;
      case "red":
        setTimeout(() => {
          store.green();
        }, 6000);
        break;
      case "blinking-red":
      case "lights-out":
        break;
      default:
        assertNever(state);
    }
  };
}

export default observer(Reactions);
