import { observer } from "mobx-react";
import * as React from "react";

const GreenLight: React.FC = () => (
  <div
    style={{
      height: "100px",
      width: "100px",
      backgroundColor: "green",
      borderRadius: "50%",
      display: "inline-block",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  />
);

export default observer(GreenLight);
