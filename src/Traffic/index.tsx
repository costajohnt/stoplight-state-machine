import { observer } from "mobx-react";
import * as React from "react";
import Arrow from "./Arrow";
import Light from "./Light";
import Store from "./Store";
import ThrowErrorButton from "./ThrowErrorButton";

export interface Props {
  store: Store;
}
const Traffic: React.FC<Props> = ({ store }) => (
  <div style={{ display: "block" }}>
    <div style={{ display: "flex", paddingRight: "20%" }}>
      <Arrow arrow={store.state.arrow} />
      <Light light={store.state.light} />
    </div>
    <ThrowErrorButton store={store} />
  </div>
);

export default observer(Traffic);
