// sections/skill.tsx

import { useState } from "react";
import labBg from "../assets/images/lab-bg.webp";
import { labObjects, type LabObject } from "../data/skills";

export function LabScene() {
  const [active, setActive] = useState<LabObject | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-black ">
        <h1
          className="
            font-sans
            font-black
            leading-[0.95]
            text-[#fbfaf6]
            text-5xl
            sm:text-7xl
            lg:text-8xl
            mb-12
            p-12
            [text-shadow:0_0_40px_rgba(160,130,255,0.35)]
          "
        >
        My Tech Stack
        </h1>
      <img
        src={labBg}
        alt="Pixel art alchemy laboratory at night with glowing purple glassware"
        className="pixelated block w-full select-none"
        draggable={false}
      />
      {labObjects.map((obj) => {
        const isActive = active?.id === obj.id;
        const onRight = obj.area.left > 55;
        return (
          <button
            key={obj.id}
            type="button"
            aria-label={obj.name}
            onMouseEnter={() => setActive(obj)}
            onMouseLeave={() => setActive((c) => (c?.id === obj.id ? null : c))}
            onFocus={() => setActive(obj)}
            onBlur={() => setActive((c) => (c?.id === obj.id ? null : c))}
            className={`absolute rounded-md transition-all duration-200 outline-none ${
              isActive ? "hotspot-ring" : "border border-transparent"
            }`}
            style={{
              left: `${obj.area.left}%`,
              top: `${obj.area.top}%`,
              width: `${obj.area.width}%`,
              height: `${obj.area.height}%`,
            }}
          >
            {isActive && (
              <div
                className="panel-arcane pointer-events-none absolute z-20 w-[16rem] rounded-lg p-3 text-left sm:w-[20rem]"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  ...(onRight ? { right: "105%" } : { left: "105%" }),
                }}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="pixelated h-16 w-16 shrink-0 sm:h-20 sm:w-20"
                  />
                  <div className="min-w-0">
                    <p className="glow-text text-sm font-bold tracking-wide text-primary uppercase">
                      {obj.name}
                    </p>
                    <p className="text-[0.7rem] text-muted-foreground">{obj.kind}</p>
                    <p className="mt-1 text-[0.7rem] text-accent">{obj.contents}</p>
                  </div>
                </div>
                <p className="mt-2 text-[0.72rem] leading-snug text-card-foreground">
                  {obj.detail}
                </p>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}