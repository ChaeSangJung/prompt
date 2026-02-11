"use client";

import { Wrap } from "@/style";

import {
  ASPEC_RATIO,
  CAMERA_ANGLE,
  GAZE_DIRECTION,
  LENS_LOOK,
  SHOT_SIZE,
  SUBJECT_PLACEMENT,
} from "@/constant";
import { useForm, useWatch } from "react-hook-form";
import { defaultValues, IData } from "@/types";
import SelectComp from "@/components/SelectComp";
import InPutComp from "@/components/InPutComp";
import { mkShotDirect } from "@/lib/utils";
import { useState } from "react";

const MainPage = () => {
  const [prompt, setPrompt] = useState<string>("");

  const ids = new Set<string>();
  for (const { id } of SHOT_SIZE) {
    if (ids.has(id)) throw new Error(`Duplicate id: ${id}`);
    ids.add(id);
  }

  const { handleSubmit, register, reset, control } = useForm<IData>({
    defaultValues,
  });
  const leadRoomRatio = useWatch({ control, name: "leadRoomRatio" });

  const onSubmit = (data: IData) => {
    const { prompt } = mkShotDirect(data);
    console.log(prompt);
    setPrompt(prompt);
  };

  const handleReset = () => {
    reset(defaultValues);
    setPrompt("");
  };

  return (
    <Wrap>
      <div className="inner-cont">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="wrap-content">
            <InPutComp
              title={"Scene #"}
              register={register("id")}
              type={"text"}
            />

            <InPutComp
              title={"duration"}
              register={register("duration")}
              type={"number"}
              unit={"sec"}
            />

            <SelectComp
              title={"aspect ratio"}
              data={ASPEC_RATIO}
              register={register("aspectRatio")}
            />
          </div>

          <div className="wrap-content">
            <strong className="text-subject">Camera setting</strong>

            <div className="box-content">
              <SelectComp
                title={"shot size"}
                data={SHOT_SIZE}
                register={register("size")}
              />

              <SelectComp
                title={"Camera Angle"}
                data={CAMERA_ANGLE}
                register={register("angle")}
              />

              <SelectComp
                title={"lens 화각"}
                data={LENS_LOOK}
                register={register("lens")}
              />
            </div>
          </div>

          <div className="wrap-content">
            <strong className="text-subject">
              Composition - 리드룸/헤드룸/배치
            </strong>

            <div className="box-content">
              <SelectComp
                title={"구도"}
                data={SUBJECT_PLACEMENT}
                register={register("placement")}
              />

              <SelectComp
                title={"시선 방향"}
                data={GAZE_DIRECTION}
                register={register("gaze")}
              />

              <div className="box-input">
                <span>Lead Room</span>

                <div>
                  <div>
                    <span>direction</span>
                    <ul>
                      <li>
                        <label htmlFor="leadRoomLeft">Left</label>
                        <input
                          id="leadRoomLeft"
                          type="radio"
                          value={"Left"}
                          {...register("leadRoomDirection")}
                        />
                      </li>
                      <li>
                        <label htmlFor="leadRoomRight">Right</label>
                        <input
                          id="leadRoomRight"
                          type="radio"
                          value={"Right"}
                          {...register("leadRoomDirection")}
                        />
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span>ratio {leadRoomRatio}</span>
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        list="leadRoomRatioRange"
                        {...register("leadRoomRatio")}
                      />
                      <datalist
                        id="leadRoomRatioRange"
                        className="list-scenario"
                      >
                        {Array.from({ length: 10 }).map((_, index) => (
                          <option value={`${index / 10}`} key={`${index + 1}`}>
                            {index / 10}
                          </option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box-btn">
            <button type="submit" className="btn submit">
              Generate
            </button>

            <button type="button" className="btn reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
        <p>{prompt}</p>
      </div>
    </Wrap>
  );
};

export default MainPage;
