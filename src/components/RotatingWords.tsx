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
    <div className="relative flex items-center">
      {/* Arrow fixed at vertical center */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <ArrowRight className="w-10 h-10 text-white" strokeWidth={3} />
      </div>

      <div
        ref={containerRef}
        className="ml-12 overflow-hidden"
        style={{ height: 192 }}
      >
        <div
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {words.map((w, i) => {
            const offset = i - index; // position relative to active word
            let tilt = "none";
            if (offset < 0) tilt = "skewY(-6deg)";   // above
            if (offset > 0) tilt = "skewY(6deg)";  // below

            return (
              <div
                key={w + i}
                ref={i === 0 ? itemRef : undefined}
                className="flex items-center text-3xl font-bold"
                style={{
                  height: 48,
                  color: i === index ? "#ffffff" : "#f97316",
                  opacity: i === index ? 1 : 0.5,
                  filter: i === index ? "none" : "blur(0.8px)",
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
