import { observer } from "mobx-react";
import * as React from "react";
import { Arrow } from "./Store/Types";

interface Props {
  arrow: Arrow;
}

const path =
  "M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z";

const Arrow: React.FC<Props> = ({ arrow }) => (
  <div className="turnSignalBackground">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-50 0 600 600"
      version="1.1"
    >
      <g>
        <path className={arrow.style} d={path} />
      </g>
    </svg>
  </div>
);

export default observer(Arrow);
