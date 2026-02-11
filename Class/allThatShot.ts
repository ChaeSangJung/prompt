// Shot Directive Template (JS/TS class style)
// 목적: 촬영 지시 → AI 프롬프트(텍스트)로 변환 가능한 구조

import { DEPTH_OF_FIELD } from "@/constant";
import {
  TAspectRatioId,
  TCameraAngle,
  TDepthOfField,
  TGazeDirection,
  TLeadRoomDirection,
  TLensLook,
  TRatio,
  TShotSize,
  TSubjectPlacement,
} from "@/types";

export type Seconds = number;

// 1) Shot Size / Type (샷 크기 / 종류)
// 2) Camera Angle (카메라 각도)
// 3) Camera Orientation (수평/수직/비율)
// 4) Lens / Focal Length "Look" (렌즈룩 / 화각)

// 5) DOF / Aperture 느낌 (f값을 직접 고정하기보다 "룩"으로 지정)
export const DepthOfField = DEPTH_OF_FIELD.reduce(
  (acc, { id }) => {
    acc[id as keyof typeof acc] = id;
    return acc;
  },
  {} as Record<
    (typeof DEPTH_OF_FIELD)[number]["id"],
    (typeof DEPTH_OF_FIELD)[number]["id"]
  >,
);

// 6) Focus & Framing (초점/프레이밍)
export enum FocusMode {
  EyeFocus = "EyeFocus",
  FaceFocus = "FaceFocus",
  SubjectFocus = "SubjectFocus",
  RackFocus = "RackFocus", // 초점 이동
  DeepFocus = "DeepFocus",
}

// 7) Movement (카메라 무빙)
export enum CameraMove {
  Static = "Static",
  PushIn = "PushIn",
  PullOut = "PullOut",
  PanLeft = "PanLeft",
  PanRight = "PanRight",
  TiltUp = "TiltUp",
  TiltDown = "TiltDown",
  DollyLeft = "DollyLeft",
  DollyRight = "DollyRight",
  CraneUp = "CraneUp",
  CraneDown = "CraneDown",
  HandheldSubtle = "HandheldSubtle",
  HandheldShaky = "HandheldShaky",
  Orbit = "Orbit",
  ZoomIn = "ZoomIn",
  ZoomOut = "ZoomOut",
}

// 8) Composition (구도) - 리드룸/헤드룸/배치
// 시선 방향
// 리드룸/헤드룸: "비율"로 적되, 프롬프트에서는 "negative space"로 변환 가능

export interface IComposition {
  placement: TSubjectPlacement;
  gaze: TGazeDirection;
  leadRoom?: {
    direction: TLeadRoomDirection;
    ratio: TRatio; // 예: 0.5 = 왼쪽 1/2 비워두기
  };
  headRoom?: {
    ratio: TRatio; // 예: 0.1 = 머리 위 여백 최소
  };
  horizonLevel?: "Low" | "Center" | "High";
  notes?: string; // "rule of thirds", "symmetry" 등
}

// 9) Lighting / Mood (조명/톤)
export enum LightingStyle {
  SoftKey = "SoftKey",
  HardKey = "HardKey",
  Backlight = "Backlight",
  RimLight = "RimLight",
  TopLight = "TopLight",
  Practical = "Practical", // 촛불/스탠드 등
  Natural = "Natural",
  LowKey = "LowKey",
  HighKey = "HighKey",
}

export enum TimeOfDay {
  Dawn = "Dawn",
  Day = "Day",
  Dusk = "Dusk",
  Night = "Night",
}

export enum ColorTone {
  Warm = "Warm",
  Cool = "Cool",
  Neutral = "Neutral",
  Monochrome = "Monochrome",
  TealOrange = "TealOrange",
  Muted = "Muted",
}

// 10) Scene Content (내용)
export interface SubjectAction {
  subject: string; // "celestial maiden", "woodcutter" 등
  action: string; // "stares", "walks away" 등
  emotion?: string; // "melancholic", "tense" 등
  wardrobe?: string; // "traditional robe..." 등
}

export interface Environment {
  location: string; // "misty waterfall", "korean cottage interior" 등
  weather?: string; // "fog", "snow", "rain" 등
  backgroundNotes?: string; // "no people", "keep background unchanged" 등
}

// 11) Consistency / Constraints (일관성/금지사항)
export interface Constraints {
  strictReference?: boolean; // 업로드 이미지 기준 강제
  keepFaceConsistent?: boolean;
  keepOutfitConsistent?: boolean;
  keepBackgroundConsistent?: boolean;
  noText?: boolean;
  noWatermark?: boolean;
  noExtraLimbs?: boolean;
  noLogo?: boolean;
  extra?: string[];
}

// 12) The Shot Directive (최종 샷 지시 객체)
export class ShotDirective {
  id: string;
  duration: Seconds;
  aspectRatio: TAspectRatioId | undefined;
  size: TShotSize;
  angle: TCameraAngle;

  lens: TLensLook;
  dof: TDepthOfField | undefined;
  focus: FocusMode | undefined;

  move: CameraMove | undefined;
  moveSpeed?: "VerySlow" | "Slow" | "Normal" | "Fast";

  composition: IComposition;

  lighting: {
    style: LightingStyle;
    time: TimeOfDay;
    tone: ColorTone;
    notes?: string; // "soft fog, backlight through mist"
  };

  subject: SubjectAction;
  environment: Environment;

  styleGuide?: string; // 전체 시리즈 공통 스타일: "cinematic painterly, soft film grain..."
  constraints: Constraints = {
    strictReference: true,
    keepFaceConsistent: true,
    keepOutfitConsistent: true,
    keepBackgroundConsistent: true,
    noText: true,
    noWatermark: true,
    noExtraLimbs: true,
    noLogo: true,
  };

  constructor(args: {
    id: string;
    duration: Seconds;
    size: TShotSize;
    angle: TCameraAngle;
    lens: TLensLook;
    composition: IComposition;
    lighting: ShotDirective["lighting"];
    subject: SubjectAction;
    environment: Environment;
    dof?: TDepthOfField;
    focus?: FocusMode;
    move?: CameraMove;
    moveSpeed?: ShotDirective["moveSpeed"];
    aspectRatio?: TAspectRatioId;
    styleGuide?: string;
    constraints?: Partial<Constraints>;
  }) {
    this.id = args.id;
    this.duration = args.duration;

    this.size = args.size;
    this.angle = args.angle;
    this.lens = args.lens;

    this.composition = args.composition;
    this.lighting = args.lighting;
    this.subject = args.subject;
    this.environment = args.environment;

    if (args.dof) this.dof = args.dof;
    if (args.focus) this.focus = args.focus;
    if (args.move) this.move = args.move;
    if (args.moveSpeed) this.moveSpeed = args.moveSpeed;
    if (args.aspectRatio) this.aspectRatio = args.aspectRatio;
    if (args.styleGuide) this.styleGuide = args.styleGuide;

    if (args.constraints) {
      this.constraints = { ...this.constraints, ...args.constraints };
    }
  }

  // DOF를 f값 "룩" 문장으로 변환
  private dofToText(): string {
    switch (this.dof) {
      case DepthOfField.UltraShallow:
        return "ultra shallow depth of field, strong bokeh (f/1.4 look)";
      case DepthOfField.Shallow:
        return "shallow depth of field, creamy bokeh (f/2.0 look)";
      case DepthOfField.Medium:
        return "moderate depth of field (f/4.0 look)";
      case DepthOfField.Deep:
        return "deep focus, everything sharp (f/8 look)";
      default:
        return "shallow depth of field";
    }
  }

  private moveToText(): string {
    const speed = this.moveSpeed
      ? `, ${this.moveSpeed.toLowerCase()} speed`
      : "";
    return this.move === CameraMove.Static
      ? "static camera"
      : `${this.move}${speed}`;
  }

  private compositionToText(): string {
    const c = this.composition;
    const parts: string[] = [];

    parts.push(`composition: subject placement ${c.placement}`);
    parts.push(`gaze: ${c.gaze}`);

    if (c.leadRoom) {
      parts.push(
        `lead room: ${Math.round(c.leadRoom.ratio * 100)}% negative space on the ${c.leadRoom.direction.toLowerCase()}`,
      );
    }
    if (c.headRoom) {
      parts.push(`headroom: ${Math.round(c.headRoom.ratio * 100)}%`);
    }
    if (c.horizonLevel) {
      parts.push(`horizon: ${c.horizonLevel.toLowerCase()}`);
    }
    if (c.notes) parts.push(c.notes);

    return parts.join(", ");
  }

  private constraintsToText(): string {
    const c = this.constraints;
    const parts: string[] = [];

    if (c.strictReference)
      parts.push("use the provided image as a strict reference");
    if (c.keepFaceConsistent) parts.push("keep face consistent");
    if (c.keepOutfitConsistent) parts.push("keep outfit consistent");
    if (c.keepBackgroundConsistent) parts.push("keep background consistent");

    if (c.noText) parts.push("no text");
    if (c.noWatermark) parts.push("no watermark");
    if (c.noLogo) parts.push("no logos");
    if (c.noExtraLimbs) parts.push("no extra limbs");

    if (c.extra?.length) parts.push(...c.extra);

    return parts.join(", ");
  }

  // ✅ 최종: AI Prompt 생성
  toPrompt(): string {
    const lines: string[] = [];

    if (this.styleGuide) lines.push(this.styleGuide);

    lines.push(
      `Shot ${this.id}: ${this.size}, ${this.angle}, ${this.aspectRatio} frame.`,
    );
    lines.push(
      `Lens look: ${this.lens}. ${this.dofToText()}. Focus: ${this.focus}.`,
    );
    lines.push(`Camera movement: ${this.moveToText()}.`);
    lines.push(this.compositionToText() + ".");
    lines.push(
      `Lighting: ${this.lighting.style}, ${this.lighting.time}, ${this.lighting.tone}. ${
        this.lighting.notes ?? ""
      }`.trim(),
    );
    lines.push(
      `Subject: ${this.subject.subject}, action: ${this.subject.action}${
        this.subject.emotion ? `, emotion: ${this.subject.emotion}` : ""
      }${this.subject.wardrobe ? `, wardrobe: ${this.subject.wardrobe}` : ""}.`,
    );
    lines.push(
      `Environment: ${this.environment.location}${
        this.environment.weather ? `, weather: ${this.environment.weather}` : ""
      }${this.environment.backgroundNotes ? `, ${this.environment.backgroundNotes}` : ""}.`,
    );
    lines.push(`Constraints: ${this.constraintsToText()}.`);

    return lines.join("\n");
  }
}

// --------------------
// 예시: "얼굴 클로즈업, 왼쪽을 쳐다보고, 왼쪽 룸 1/2"
// --------------------
// export const exampleCloseUp = new ShotDirective({
//   id: "S03",
//   duration: 6,
//   size: ShotSize.CU,
//   angle: CameraAngle.EyeLevel,
//   lens: LensLook.Portrait_85,
//   dof: DepthOfField.Shallow,
//   focus: FocusMode.EyeFocus,
//   move: CameraMove.PushIn,
//   moveSpeed: "VerySlow",
//   aspectRatio: AspectRatio.AR_16_9,
//   styleGuide:
//     "cinematic painterly illustration, soft film grain, muted colors, 16:9",
//   composition: {
//     placement: SubjectPlacement.RightThird,
//     gaze: GazeDirection.LookingLeft,
//     leadRoom: { direction: "Left", ratio: 0.5 },
//     headRoom: { ratio: 0.08 },
//     notes: "tight framing, minimal headroom, subtle vignette",
//   },
//   lighting: {
//     style: LightingStyle.SoftKey,
//     time: TimeOfDay.Night,
//     tone: ColorTone.Cool,
//     notes: "soft moonlight key from right, gentle rim light",
//   },
//   subject: {
//     subject: "celestial maiden",
//     action: "holds her breath, eyes slightly trembling",
//     emotion: "melancholic, restrained",
//     wardrobe: "simple traditional robe, consistent design",
//   },
//   environment: {
//     location: "blurred indoor room",
//     backgroundNotes: "background stays unchanged, no people in background",
//   },
//   constraints: {
//     strictReference: true,
//     extra: ["do not change facial features across frames", "avoid style drift"],
//   },
// });

// console.log(exampleCloseUp.toPrompt());
