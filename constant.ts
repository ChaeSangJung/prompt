interface IShotSize {
  id:
    | "ELS"
    | "VLS"
    | "LS"
    | "WS"
    | "FS"
    | "MLS"
    | "MS"
    | "MCU"
    | "CU"
    | "BCU"
    | "ECU"
    | "OTS"
    | "POV"
    | "TwoShot"
    | "Insert"
    | "Establishing";
  value: string;
}

export const SHOT_SIZE: IShotSize[] = [
  { id: "ELS", value: "Extreme Long Shot" },
  { id: "VLS", value: "Very Long Shot" },
  { id: "LS", value: "Long Shot" },
  { id: "WS", value: "Wide Shot" },
  { id: "FS", value: "Full Shot" },
  { id: "MLS", value: "Medium Long Shot (Knee)" },
  { id: "MS", value: "Medium Shot (Waist)" },
  { id: "MCU", value: "Medium Close-Up (Chest)" },
  { id: "CU", value: "Close-Up" },
  { id: "BCU", value: "Big Close-Up" },
  { id: "ECU", value: "Extreme Close-Up" },
  { id: "OTS", value: "Over-the-Shoulder" },
  { id: "POV", value: "Point-of-View" },
  { id: "TwoShot", value: "TwoShot" },
  { id: "Insert", value: "Insert" },
  { id: "Establishing", value: "Establishing" },
];
