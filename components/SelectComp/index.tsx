import { WrapInput } from "@/style";
import { IProps } from "@/types";

const SelectComp = (props: IProps) => {
  const { title, data, register, unit } = props;
  return (
    <WrapInput className="box-input">
      <span className="text-title">{title}</span>
      <div className="box-select">
        <select {...register} className="select">
          <option value="">===== select option =====</option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.value}
            </option>
          ))}
        </select>
        {unit && <span className="text-unit">{unit}</span>}
      </div>
    </WrapInput>
  );
};

export default SelectComp;
