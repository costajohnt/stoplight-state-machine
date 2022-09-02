import { observer } from "mobx-react";
import * as React from "react";
import Store from "./Store";
import "./style.css";

export interface Props {
  store: Store;
}
const Light: React.FC<Props> = ({ store }) => {
  return (
    <div className="container">
      <div className={store.state.light.top.style} />
      <div className={store.state.light.middle.style} />
      <div className={store.state.light.bottom.style} />
    </div>
  );
};

export default observer(Light);
