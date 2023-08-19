"use client";

import Spline, { SplineEvent } from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

export interface CanvasAnimationProp {
  onClick: (target: string) => void;
  onHover: (target: string) => void;
  onLoad: () => void;
}

export default function CanvasAnimation({
  onClick,
  onHover,
  onLoad,
}: CanvasAnimationProp) {
  function splineOnLoad(spline: Application) {
    const mobileRegx = new RegExp("/iPhone|iPad|iPod|Android", "i");
    if (window && mobileRegx.test(navigator.userAgent)) spline.setZoom(0.25);
    onLoad();
  }

  return (
    <div className="h-screen w-screen">
      <Spline
        scene="https://prod.spline.design/tMh0KzmUfYBl8oul/scene.splinecode"
        onLoad={splineOnLoad}
        onMouseDown={(event: SplineEvent) => onClick(event.target.name)}
        onMouseHover={(event: SplineEvent) => onHover(event.target.name)}
      />
    </div>
  );
}
