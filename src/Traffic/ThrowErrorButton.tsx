import { observer } from "mobx-react";
import * as React from "react";
import Store from "./Store";
import "./style.css";

export interface Props {
  store: Store;
}
const ThrowErrorButton: React.FC<Props> = ({ store }) => (
  <div style={{ display: "inline-flex", paddingLeft: "20%" }}>
    <button type="button" onClick={store.systemError}>
      Monkey Wrench
    </button>
  </div>
);

export default observer(ThrowErrorButton);
