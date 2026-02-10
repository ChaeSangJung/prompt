import { Seconds } from "@/Class/allThatShot";
import { TAspectRatioId, TCameraAngle, TLensLook, TShotSize } from "@/constant";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IData {
  id: string | "";
  duration: Seconds;
  size: TShotSize | "";
  aspectRatio: TAspectRatioId | "";
  angle: TCameraAngle | "";
  lens: TLensLook | "";
}

export const defaultValues: IData = {
  id: "",
  duration: 0,
  size: "",
  aspectRatio: "",
  angle: "",
  lens: "",
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
