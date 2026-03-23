"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

const DEFAULT_DRUM_LAYOUT = {
  left: "30.65%",
  top: "9.78%",
  width: "69.35%",
  height: "78.22%",
  transformOrigin: "49.76% 52.28%"
} as const;

const DEFAULT_ASPECT_RATIO = "496 / 225";

export type MixerAnimationMode = "continuous" | "logoPause";

export type DrumLayout = {
  left: string;
  top: string;
  width: string;
  height: string;
  transformOrigin: string;
};

export type AnimatedMixerTruckProps = {
  className?: string;
  mode?: MixerAnimationMode;
  drumDurationSeconds?: number;
  drumDurationHoverSeconds?: number;
  aspectRatio?: string;
  bodySrc?: string;
  drumSrc?: string;
  drumLayout?: Partial<DrumLayout>;
  enableFloat?: boolean;
};

export function AnimatedMixerTruck({
  className = "",
  mode = "continuous",
  drumDurationSeconds = 14,
  drumDurationHoverSeconds = 9,
  aspectRatio = DEFAULT_ASPECT_RATIO,
  bodySrc = "/images/truck_body.png",
  drumSrc = "/images/mixer_drum.png",
  drumLayout,
  enableFloat = true
}: AnimatedMixerTruckProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);

    update();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  const layout = { ...DEFAULT_DRUM_LAYOUT, ...drumLayout };

  const cssVars: CSSProperties = {
    ["--mixer-drum-duration" as string]: `${drumDurationSeconds}s`,
    ["--mixer-drum-duration-hover" as string]: `${drumDurationHoverSeconds}s`
  };

  const drumAnimClass =
    mode === "continuous"
      ? "mixer-drum-spin-continuous"
      : "mixer-drum-spin-logo-pause";

  return (
    <div
      className={`mixer-truck-root group relative select-none ${className}`}
      style={cssVars}
      aria-hidden="true"
    >
      <div
        className={`mixer-truck-shell relative mx-auto w-full max-w-full ${
          enableFloat && !reduceMotion ? "mixer-truck-float" : ""
        }`}
      >
        <div
          className="mixer-truck-stage relative w-full overflow-visible rounded-sm"
          style={{ aspectRatio }}
        >
          <div
            className="pointer-events-none absolute -bottom-1 left-[8%] right-[8%] z-0 h-[18%] rounded-[50%] bg-black/35 blur-md"
            aria-hidden
          />

          <div className="mixer-truck-tilt relative z-[1] h-full w-full">
            <Image
              src={bodySrc}
              alt="Transit mixer truck"
              fill
              sizes="(max-width: 640px) 120px, 200px"
              className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
              priority
            />

            <div
              className="pointer-events-none absolute inset-0 z-[2] mix-blend-soft-light"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 42%, rgba(0,0,0,0.12) 100%)"
              }}
              aria-hidden
            />

            <div
              className="pointer-events-none absolute z-[3]"
              style={{
                left: layout.left,
                top: layout.top,
                width: layout.width,
                height: layout.height,
                perspective: "520px",
                transformStyle: "preserve-3d"
              }}
            >
              <div
                className="relative h-full w-full"
                style={{
                  transform: "rotateX(5deg) rotateY(-2deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                <div
                  className={`relative h-full w-full ${
                    reduceMotion ? "" : drumAnimClass
                  }`}
                  style={{
                    transformOrigin: layout.transformOrigin,
                    filter:
                      "drop-shadow(0 2px 4px rgba(0,0,0,0.25)) drop-shadow(0 0 1px rgba(255,255,255,0.15))"
                  }}
                >
                  <Image
                    src={drumSrc}
                    alt="Rotating mixer drum with company logo"
                    fill
                    sizes="(max-width: 640px) 100px, 160px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}