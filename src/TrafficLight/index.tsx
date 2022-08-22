import { observer } from "mobx-react";
import * as React from "react";
import Lights from "./Lights";
import Reactions from "./Reactions";
import Store from "./Store";

export interface Props {
  store: Store;
}

const TrafficLight: React.FC<Props> = ({ store }) => (
  <>
    <Lights store={store} />
    <Reactions store={store} fireImmediately={true} />
  </>
);

export default observer(TrafficLight);
