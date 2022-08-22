import { observer } from "mobx-react";
import * as React from "react";
import "./App.css";
import TrafficLight from "./TrafficLight";
import Store from "./TrafficLight/Store";

interface Props {}

class App extends React.Component<Props> {
  store = new Store();

  render() {
    return <TrafficLight store={this.store} />;
  }
}

export default observer(App);
