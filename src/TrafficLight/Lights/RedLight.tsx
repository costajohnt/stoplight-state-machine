import { observer } from "mobx-react";
import * as React from "react";

const YellowLight: React.FC = () => (
  <div
    style={{
      height: "100px",
      width: "100px",
      backgroundColor: "red",
      borderRadius: "50%",
      display: "inline-block",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  />
);

export default observer(YellowLight);
