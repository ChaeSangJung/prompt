"use client";

import { Wrap } from "@/style";
import {
  AspectRatio,
  CameraAngle,
  CameraMove,
  ColorTone,
  DepthOfField,
  FocusMode,
  GazeDirection,
  LensLook,
  LightingStyle,
  ShotDirective,
  ShotSize,
  SubjectPlacement,
  TimeOfDay,
} from "@/Class/allThatShot";
import { SHOT_SIZE } from "@/constant";

const MainPage = () => {
  const tempEx = new ShotDirective({
    id: "S03",
    duration: 6,
    size: ShotSize.CU,
    angle: CameraAngle.EyeLevel,
    lens: LensLook.Portrait_85,
    dof: DepthOfField.Shallow,
    focus: FocusMode.EyeFocus,
    move: CameraMove.PushIn,
    moveSpeed: "VerySlow",
    aspectRatio: AspectRatio.AR_16_9,
    styleGuide:
      "cinematic painterly illustration, soft film grain, muted colors, 16:9",
    composition: {
      placement: SubjectPlacement.RightThird,
      gaze: GazeDirection.LookingLeft,
      leadRoom: { direction: "Left", ratio: 0.5 },
      headRoom: { ratio: 0.08 },
      notes: "tight framing, minimal headroom, subtle vignette",
    },
    lighting: {
      style: LightingStyle.SoftKey,
      time: TimeOfDay.Night,
      tone: ColorTone.Cool,
      notes: "soft moonlight key from right, gentle rim light",
    },
    subject: {
      subject: "celestial maiden",
      action: "holds her breath, eyes slightly trembling",
      emotion: "melancholic, restrained",
      wardrobe: "simple traditional robe, consistent design",
    },
    environment: {
      location: "blurred indoor room",
      backgroundNotes: "background stays unchanged, no people in background",
    },
    constraints: {
      strictReference: true,
      extra: [
        "do not change facial features across frames",
        "avoid style drift",
      ],
    },
  });

  const ids = new Set<string>();
  for (const { id } of SHOT_SIZE) {
    if (ids.has(id)) throw new Error(`Duplicate id: ${id}`);
    ids.add(id);
  }

  console.log(ids);

  return (
    <Wrap>
      <div className="inner-cont">
        <p>{tempEx.toPrompt()}</p>
      </div>
    </Wrap>
  );
};

export default MainPage;
