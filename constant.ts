import {
  TAspectRatioId,
  TCameraAngle,
  TDepthOfField,
  TGazeDirection,
  TLensLook,
  TShotSize,
  TSubjectPlacement,
} from "./types";

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

interface ISubjectPlacement {
  id: TSubjectPlacement;
  value: string;
}

export const SUBJECT_PLACEMENT: ISubjectPlacement[] = [
  { id: "Center", value: "Center" },
  { id: "LeftThird", value: "Left Third" },
  { id: "RightThird", value: "Right Third" },
  { id: "GoldenRatioLeft", value: "Golden Ratio Left" },
  { id: "GoldenRatioRight", value: "Golden Ratio Right" },
  { id: "FrameLeft", value: "Frame Left" },
  { id: "FrameRight", value: "Frame Right" },
];

interface IDepthOfField {
  id: TDepthOfField;
  value: string;
  desc: string;
}

export const DEPTH_OF_FIELD: IDepthOfField[] = [
  { id: "UltraShallow", value: "Ultra Shallow", desc: "f/1.4~2 느낌" },
  { id: "Shallow", value: "Shallow", desc: "f/2~2.8 느낌" },
  { id: "Medium", value: "Medium", desc: "f/4~5.6 느낌" },
  { id: "Deep", value: "Deep", desc: "f/8~11 느낌" },
];

interface IGazeDirection {
  id: TGazeDirection;
  value: string;
}

export const GAZE_DIRECTION: IGazeDirection[] = [
  { id: "LookingLeft", value: "Looking Left" },
  { id: "LookingRight", value: "Looking Right" },
  { id: "LookingUp", value: "Looking Up" },
  { id: "LookingDown", value: "Looking Down" },
  { id: "LookingToCamera", value: "Looking To Camera" },
  { id: "LookingAway", value: "Looking Away" },
];
