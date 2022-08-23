import { observer } from "mobx-react";
import * as React from "react";
import Arrow from "../LeftTurn/Arrow";
import Light from "./Light";
import Store from "./Store";
import "./style.css";
import ThrowErrorButton from "./ThrowErrorButton";

export interface Props {
  store: Store;
}
const Traffic: React.FC<Props> = ({ store }) => (
  <div style={{ display: "block" }}>
    <div style={{ display: "flex", paddingRight: "20%" }}>
      <Arrow store={store} />
      <Light store={store} />
    </div>
    <ThrowErrorButton store={store} />
  </div>
);

export default observer(Traffic);
