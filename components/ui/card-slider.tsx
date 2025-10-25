import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number; // ms
};

export default function CardSlider({
  children,
  autoPlay = false,
  interval = 4000,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const autoRef = useRef<number | null>(null);

  const scrollLeft = () => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: -ref.current.offsetWidth * 0.6,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: ref.current.offsetWidth * 0.6,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!autoPlay || !ref.current) return;
    autoRef.current = window.setInterval(() => {
      if (!ref.current) return;
      const width = ref.current.offsetWidth;
      ref.current.scrollBy({ left: width * 0.6, behavior: "smooth" });
    }, interval);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [autoPlay, interval]);

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {React.Children.map(children, (child, idx) => (
          <div
            className="flex-shrink-0"
            style={{ scrollSnapAlign: "center" }}
            key={idx}
          >
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={scrollLeft}
        aria-label="scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur rounded-full p-2 shadow-md"
      >
        ‹
      </button>

      <button
        onClick={scrollRight}
        aria-label="scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur rounded-full p-2 shadow-md"
      >
        ›
      </button>
    </div>
  );
}
