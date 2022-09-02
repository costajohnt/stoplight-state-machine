import { MissingVarError } from "@execonline-inc/environment";

interface FlashingYellow {
  kind: "flashing-yellow";
  style: "turnSignal";
}

interface FlashingRed {
  kind: "flashing-red";
  style: "blinker";
}

interface ArrowOff {
  kind: "off";
  style: "black";
}

interface LightOff {
  kind: "off";
  style: "lightBase";
}

interface LightGreen {
  kind: "green";
  style: "lightBase green";
}

interface LightYellow {
  kind: "yellow";
  style: "lightBase yellow";
}

interface ArrowGreen {
  kind: "green";
  style: "green";
}

interface ArrowYellow {
  kind: "yellow";
  style: "yellow";
}

interface ArrowRed {
  kind: "red";
  style: "red";
}

interface LightRed {
  kind: "red";
  style: "lightBase red";
}

interface GreenLight {
  top: LightOff;
  middle: LightOff;
  bottom: LightGreen;
}

interface YellowLight {
  top: LightOff;
  middle: LightYellow;
  bottom: LightOff;
}

interface RedLight {
  top: LightRed;
  middle: LightOff;
  bottom: LightOff;
}

interface FlashingRedLight {
  top: FlashingRed;
  middle: LightOff;
  bottom: LightOff;
}
interface PriorityStraight {
  kind: "priority-straight";
  arrow: FlashingYellow;
  light: GreenLight;
}
interface Warning {
  kind: "warning";
  arrow: ArrowYellow;
  light: YellowLight;
}

interface Prohibiting {
  kind: "prohibiting";
  arrow: ArrowRed;
  light: RedLight;
}
type SystemError = {
  kind: "system-error";
  arrow: ArrowOff;
  light: FlashingRedLight;
};
type PriorityLeft = {
  kind: "priority-left";
  arrow: ArrowGreen;
  light: RedLight;
};
type WarningLeft = {
  kind: "warning-left";
  arrow: ArrowYellow;
  light: RedLight;
};

export type ConfigError = MissingVarError | string;

export type TimeoutTransition = "warning" | "prohibiting";

export type State =
  | PriorityStraight
  | Warning
  | Prohibiting
  | SystemError
  | PriorityLeft
  | WarningLeft;

export const priorityStraight = (): PriorityStraight => ({
  kind: "priority-straight",
  arrow: {
    kind: "flashing-yellow",
    style: "turnSignal",
  },
  light: {
    top: {
      kind: "off",
      style: "lightBase",
    },
    middle: {
      kind: "off",
      style: "lightBase",
    },
    bottom: {
      kind: "green",
      style: "lightBase green",
    },
  },
});
export const warning = (): Warning => ({
  kind: "warning",
  arrow: {
    kind: "yellow",
    style: "yellow",
  },
  light: {
    top: {
      kind: "off",
      style: "lightBase",
    },
    middle: {
      kind: "yellow",
      style: "lightBase yellow",
    },
    bottom: {
      kind: "off",
      style: "lightBase",
    },
  },
});
export const prohibiting = (): Prohibiting => ({
  kind: "prohibiting",
  arrow: {
    kind: "red",
    style: "red",
  },
  light: {
    top: {
      kind: "red",
      style: "lightBase red",
    },
    middle: {
      kind: "off",
      style: "lightBase",
    },
    bottom: {
      kind: "off",
      style: "lightBase",
    },
  },
});

export const priorityLeft = (): PriorityLeft => ({
  kind: "priority-left",
  arrow: {
    kind: "green",
    style: "green",
  },
  light: {
    top: {
      kind: "red",
      style: "lightBase red",
    },
    middle: {
      kind: "off",
      style: "lightBase",
    },
    bottom: {
      kind: "off",
      style: "lightBase",
    },
  },
});

export const systemError = (): SystemError => ({
  kind: "system-error",
  arrow: {
    kind: "off",
    style: "black",
  },
  light: {
    top: {
      kind: "flashing-red",
      style: "blinker",
    },
    middle: {
      kind: "off",
      style: "lightBase",
    },
    bottom: {
      kind: "off",
      style: "lightBase",
    },
  },
});

export const warningLeft = (): WarningLeft => ({
  kind: "warning-left",
  arrow: {
    kind: "yellow",
    style: "yellow",
  },
  light: {
    top: {
      kind: "red",
      style: "lightBase red",
    },
    middle: {
      kind: "off",
      style: "lightBase",
    },
    bottom: {
      kind: "off",
      style: "lightBase",
    },
  },
});
