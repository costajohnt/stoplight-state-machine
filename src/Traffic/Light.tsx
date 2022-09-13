import { observer } from "mobx-react";
import * as React from "react";
import { LightUnion } from "./Store/Types";

export interface Props {
  light: LightUnion;
}
const Light: React.FC<Props> = ({ light }) => (
  <div className="container">
    <div className={light.red.style} />
    <div className={light.yellow.style} />
    <div className={light.green.style} />
  </div>
);

export default observer(Light);
