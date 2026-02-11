// lib/utils/index.ts

import {
  CameraMove,
  ColorTone,
  DepthOfField,
  FocusMode,
  LightingStyle,
  ShotDirective,
  TimeOfDay,
} from "@/Class/allThatShot";
import {
  ASPEC_RATIO,
  CAMERA_ANGLE,
  GAZE_DIRECTION,
  LENS_LOOK,
  SHOT_SIZE,
  SUBJECT_PLACEMENT,
} from "@/constant";
import { IData } from "@/types";

export const mkShotDirect = (data: IData): { prompt: string } => {
  console.log(data);

  const temp = new ShotDirective({
    id: data.id,
    duration: data.duration,
    size: data.size ? data.size : SHOT_SIZE[0].id,
    angle: data.angle ? data.angle : CAMERA_ANGLE[0].id,
    lens: data.lens ? data.lens : LENS_LOOK[0].id,
    composition: {
      placement: data.placement ? data.placement : SUBJECT_PLACEMENT[0].id,
      gaze: data.gaze ? data.gaze : GAZE_DIRECTION[0].id,
      leadRoom: {
        direction: data.leadRoomDirection ? data.leadRoomDirection : "Left", // 없음도 있어야 하지 않을까? 중앙에 위치할 때 등
        ratio: data.leadRoomRatio,
      },
      headRoom: { ratio: 0.08 },
      notes: "tight framing, minimal headroom, subtle vignette",
    },
    dof: DepthOfField.Shallow,
    focus: FocusMode.EyeFocus,
    move: CameraMove.PushIn,
    moveSpeed: "VerySlow",
    aspectRatio: data.aspectRatio ? data.aspectRatio : ASPEC_RATIO[0].id,
    styleGuide:
      "cinematic painterly illustration, soft film grain, muted colors, 16:9",
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
      extra: [
        "do not change facial features across frames",
        "avoid style drift",
      ],
    },
  });

  return {
    prompt: temp.toPrompt(),
  };
};
