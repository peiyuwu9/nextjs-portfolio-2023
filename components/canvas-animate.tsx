"use client";

import { cn } from "@/lib/utils";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

export interface CanvasAnimationProp {
  classname: string;
  onClick: (target: string) => void;
  onHover: (target: string) => void;
  onLoad: () => void;
}

export default function CanvasAnimation({
  classname,
  onClick,
  onHover,
  onLoad,
}: CanvasAnimationProp) {
  function splineOnLoad(spline: Application) {
    if (window && window.screen.width < 640) spline.setZoom(0.25);
    setTimeout(() => {
      onLoad();
    }, 500);
  }

  return (
    <div className={cn("h-screen w-screen", classname)}>
      <Spline
        scene="https://prod.spline.design/tMh0KzmUfYBl8oul/scene.splinecode"
        onLoad={splineOnLoad}
        onMouseDown={(event: SplineEvent) => onClick(event.target.name)}
        onMouseHover={(event: SplineEvent) => onHover(event.target.name)}
      />
    </div>
  );
}
