import { observer } from "mobx-react";
import * as React from "react";

const OffLight: React.FC = () => (
  <div
    style={{
      height: "100px",
      width: "100px",
      backgroundColor: "black",
      borderRadius: "50%",
      display: "inline-block",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  />
);

export default observer(OffLight);
