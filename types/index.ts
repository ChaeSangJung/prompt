import { Seconds } from "@/Class/allThatShot";
import { UseFormRegisterReturn } from "react-hook-form";

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

export type TAspectRatioId =
  | "AR_16_9"
  | "AR_9_16"
  | "AR_1_1"
  | "AR_2_39_1"
  | "AR_4_3";

export type TLensLook =
  | "UltraWide_14"
  | "Wide_24"
  | "Wide_28"
  | "Standard_35"
  | "Standard_50"
  | "Portrait_85"
  | "Tele_135"
  | "Tele_200";

export type TSubjectPlacement =
  | "Center"
  | "LeftThird"
  | "RightThird"
  | "GoldenRatioLeft"
  | "GoldenRatioRight"
  | "FrameLeft"
  | "FrameRight";

export type TDepthOfField = "UltraShallow" | "Shallow" | "Medium" | "Deep";

export type TGazeDirection =
  | "LookingLeft"
  | "LookingRight"
  | "LookingUp"
  | "LookingDown"
  | "LookingToCamera"
  | "LookingAway";

export type TLeadRoomDirection = "Left" | "Right";

export type TRatio = number; // 0.0 ~ 1.0

export interface IData {
  id: string | "";
  duration: Seconds;
  size: TShotSize | "";
  aspectRatio: TAspectRatioId | "";
  angle: TCameraAngle | "";
  lens: TLensLook | "";
  placement: TSubjectPlacement | "";
  gaze: TGazeDirection | "";
  leadRoomDirection: TLeadRoomDirection | "";
  leadRoomRatio: TRatio;
  dof: TDepthOfField | "";
}

export const defaultValues: IData = {
  id: "",
  duration: 0,
  size: "",
  aspectRatio: "",
  angle: "",
  lens: "",
  placement: "",
  gaze: "",
  leadRoomDirection: "",
  leadRoomRatio: 0,
  dof: "",
};

interface IRpropsData {
  id: string | number;
  value: string | number;
}

export interface ICommonProps {
  title: string;
  register: UseFormRegisterReturn;
  unit?: string;
}

export interface IInputProps extends ICommonProps {
  type: "text" | "number";
}

export interface IProps extends ICommonProps {
  data: IRpropsData[];
}
