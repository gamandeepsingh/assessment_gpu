import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const RotatingWords: React.FC = () => {
  const words = ["All In", "One", "GPU", "Ecosystem", "Super"];
  const [index, setIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % words.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const updateTranslate = () => {
    const container = containerRef.current;
    const item = itemRef.current;
    if (!container || !item) return;
    const containerH = container.clientHeight;
    const itemH = item.clientHeight;
    const y = containerH / 2 - (index * itemH + itemH / 2);
    setTranslateY(Math.round(y));
  };

  useEffect(() => {
    updateTranslate();
    const onResize = () => updateTranslate();
    window.addEventListener("resize", onResize);
    const t = setTimeout(updateTranslate, 0);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [index]);

  return (
    <div className="relative flex items-center h-full">
      {/* Arrow fixed at vertical center */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" strokeWidth={3} />
      </div>

      <div
        ref={containerRef}
        className="ml-8 sm:ml-10 md:ml-12 overflow-hidden relative"
        style={{ height: 192 }}
      >
        {/* Fade overlays */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 w-full h-8 bg-gradient-to-t from-transparent  to-[#0f0f0f] z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-8 bg-gradient-to-b from-transparent to-[#0f0f0f] z-10" />

        <div
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {words.map((w, i) => {
            const offset = i - index; // position relative to active word
            let tilt = "none";
            if (offset < 0) tilt = "skewY(-6deg)"; // above
            if (offset > 0) tilt = "skewY(6deg)"; // below

            return (
              <div
                key={w + i}
                ref={i === 0 ? itemRef : undefined}
                className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold"
                style={{
                  height: 48,
                  color: i === index ? "#ffffff" : "#f97316",
                  opacity: i === index ? 1 : 0.6,
                  filter: i === index ? "none" : "blur(0.8px)",
                  fontSize: i === index ? "2rem" : "1.4rem",
                  transform: tilt,
                  transition:
                    "color 300ms, opacity 300ms, filter 300ms, transform 300ms",
                }}
              >
                {w}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RotatingWords;
