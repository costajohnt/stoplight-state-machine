import { MissingVarError } from "@execonline-inc/environment";

interface Flashing {
  status: "flashing";
}

export type LightUnion = GreenLight | YellowLight | RedLight | FlashingRedLight;

export type ArrowUnion =
  | FlashingYellow
  | ArrowYellow
  | ArrowRed
  | ArrowOff
  | ArrowGreen;

interface FlashingYellow extends Flashing {
  color: "yellow";
  style: "turnSignal";
}

interface FlashingRed extends Flashing {
  style: "blinker";
}

interface Off {
  status: "off";
}
interface ArrowOff extends Off {
  style: "black";
}

interface LightOff extends Off {
  style: "lightBase";
}

interface On {
  status: "on";
}

interface Green extends On {
  style: "lightBase green";
}

interface Yellow extends On {
  style: "lightBase yellow";
}

interface Red extends On {
  style: "lightBase red";
}

interface ArrowGreen {
  color: "green";
  status: "on";
  style: "green";
}

interface ArrowYellow {
  color: "yellow";
  status: "on";
  style: "yellow";
}

interface ArrowRed {
  color: "red";
  status: "on";
  style: "red";
}

interface GreenLight {
  red: LightOff;
  yellow: LightOff;
  green: Green;
}

interface YellowLight {
  red: LightOff;
  yellow: Yellow;
  green: LightOff;
}

interface RedLight {
  red: Red;
  yellow: LightOff;
  green: LightOff;
}

interface FlashingRedLight {
  red: FlashingRed;
  yellow: LightOff;
  green: LightOff;
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
    color: "yellow",
    status: "flashing",
    style: "turnSignal",
  },
  light: {
    red: {
      status: "off",
      style: "lightBase",
    },
    yellow: {
      status: "off",
      style: "lightBase",
    },
    green: {
      status: "on",
      style: "lightBase green",
    },
  },
});
export const warning = (): Warning => ({
  kind: "warning",
  arrow: {
    color: "yellow",
    status: "on",
    style: "yellow",
  },
  light: {
    red: {
      status: "off",
      style: "lightBase",
    },
    yellow: {
      status: "on",
      style: "lightBase yellow",
    },
    green: {
      status: "off",
      style: "lightBase",
    },
  },
});
export const prohibiting = (): Prohibiting => ({
  kind: "prohibiting",
  arrow: {
    color: "red",
    status: "on",
    style: "red",
  },
  light: {
    red: {
      status: "on",
      style: "lightBase red",
    },
    yellow: {
      status: "off",
      style: "lightBase",
    },
    green: {
      status: "off",
      style: "lightBase",
    },
  },
});

export const priorityLeft = (): PriorityLeft => ({
  kind: "priority-left",
  arrow: {
    color: "green",
    status: "on",
    style: "green",
  },
  light: {
    red: {
      status: "on",
      style: "lightBase red",
    },
    yellow: {
      status: "off",
      style: "lightBase",
    },
    green: {
      status: "off",
      style: "lightBase",
    },
  },
});

export const systemError = (): SystemError => ({
  kind: "system-error",
  arrow: {
    status: "off",
    style: "black",
  },
  light: {
    red: {
      status: "flashing",
      style: "blinker",
    },
    yellow: {
      status: "off",
      style: "lightBase",
    },
    green: {
      status: "off",
      style: "lightBase",
    },
  },
});

export const warningLeft = (): WarningLeft => ({
  kind: "warning-left",
  arrow: {
    color: "yellow",
    status: "on",
    style: "yellow",
  },
  light: {
    red: {
      status: "on",
      style: "lightBase red",
    },
    yellow: {
      status: "off",
      style: "lightBase",
    },
    green: {
      status: "off",
      style: "lightBase",
    },
  },
});
