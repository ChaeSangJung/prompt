export type TShotSize =
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

interface IShotSize {
  id: TShotSize;
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

export type TCameraAngle =
  | "EyeLevel"
  | "HighAngle"
  | "LowAngle"
  | "TopDown"
  | "BottomUp"
  | "Dutch"
  | "Overhead"
  | "WormEye"
  | "BirdEye";

interface ICameaAngle {
  id: TCameraAngle;
  value: string;
}

export const CAMERA_ANGLE: ICameaAngle[] = [
  { id: "EyeLevel", value: "EyeLevel" },
  { id: "HighAngle", value: "HighAngle" },
  { id: "LowAngle", value: "LowAngle" },
  { id: "TopDown", value: "TopDown" },
  { id: "BottomUp", value: "BottomUp" },
  { id: "Dutch", value: "Dutch" },
  { id: "Overhead", value: "Overhead" },
  { id: "WormEye", value: "WormEye" },
  { id: "BirdEye", value: "BirdEye" },
];

export type TAspectRatioId =
  | "AR_16_9"
  | "AR_9_16"
  | "AR_1_1"
  | "AR_2_39_1"
  | "AR_4_3";

interface IAspectRatio {
  id: TAspectRatioId;
  value: string;
}

export const ASPEC_RATIO: IAspectRatio[] = [
  { id: "AR_16_9", value: "16:9" },
  { id: "AR_9_16", value: "9:16" },
  { id: "AR_1_1", value: "1:1" },
  { id: "AR_2_39_1", value: "2.39:1" },
  { id: "AR_4_3", value: "4:3" },
];

export type TLensLook =
  | "UltraWide_14"
  | "Wide_24"
  | "Wide_28"
  | "Standard_35"
  | "Standard_50"
  | "Portrait_85"
  | "Tele_135"
  | "Tele_200";

interface ILensLook {
  id: TLensLook;
  value: string;
}

export const LENS_LOOK: ILensLook[] = [
  { id: "UltraWide_14", value: "14mm" },
  { id: "Wide_24", value: "24mm" },
  { id: "Wide_28", value: "28mm" },
  { id: "Standard_35", value: "35mm" },
  { id: "Standard_50", value: "50mm" },
  { id: "Portrait_85", value: "85mm" },
  { id: "Tele_135", value: "135mm" },
  { id: "Tele_200", value: "200mm" },
];
