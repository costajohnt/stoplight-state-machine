import { observer } from "mobx-react";
import * as React from "react";
import "./App.css";
import Traffic from "./Traffic";
import Store from "./Traffic/Store";
import Reactions from "./Traffic/Store/Reactions";

interface Props {}

class App extends React.Component<Props> {
  store = new Store();

  render() {
    return (
      <>
        <Traffic store={this.store} />
        <Reactions store={this.store} fireImmediately={true} />
      </>
    );
  }
}

export default observer(App);
