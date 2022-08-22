import { observer } from "mobx-react";
import * as React from "react";
import Store from "../Store";
import GreenLight from "./GreenLight";
import OffLight from "./OffLight";
import RedLight from "./RedLight";
import YellowLight from "./YellowLight";

export interface Props {
  store: Store;
}

const Lights: React.FC<Props> = ({ store }) => (
  <div
    style={{
      height: "360px",
      width: "110px",
      backgroundColor: "#ffd800",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      paddingTop: "25px",
      marginTop: "50px",
    }}
  >
    {store.redLight
      .map(() => <RedLight />)
      .getOrElse(() => (
        <OffLight />
      ))}
    {store.yellowLight
      .map(() => <YellowLight />)
      .getOrElse(() => (
        <OffLight />
      ))}
    {store.greenLight
      .map(() => <GreenLight />)
      .getOrElse(() => (
        <OffLight />
      ))}
  </div>
);

export default observer(Lights);
