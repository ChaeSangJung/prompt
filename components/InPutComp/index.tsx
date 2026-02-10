import { WrapInput } from "@/style";
import { IInputProps } from "@/types";

const InPutComp = (props: IInputProps) => {
  const { title, register, type, unit } = props;

  return (
    <WrapInput className="box-input">
      <span className="text-title">{title}</span>
      <div className="box-select">
        <input type={type} {...register} className="select" />
        {unit && <span className="text-unit">{unit}</span>}
      </div>
    </WrapInput>
  );
};

export default InPutComp;
