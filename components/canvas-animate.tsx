"use client";

import Spline, { SplineEvent } from "@splinetool/react-spline";

export interface CanvasAnimationProp {
  onClick: (target: string) => void;
  onHover: (target: string) => void;
}

export default function CanvasAnimation({
  onClick,
  onHover,
}: CanvasAnimationProp) {
  return (
    <div className="h-screen w-screen">
      <Spline
        scene="https://prod.spline.design/tMh0KzmUfYBl8oul/scene.splinecode"
        onMouseDown={(event: SplineEvent) => onClick(event.target.name)}
        onMouseHover={(event: SplineEvent) => onHover(event.target.name)}
      />
    </div>
  );
}
