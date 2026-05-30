import React, { useState, useRef } from "react";
import { Sparkles } from "lucide-react";

export default function BeforeAfterShowcase() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const visualizerRef = useRef<HTMLDivElement>(null);

  const handleVisualizerMove = (clientX: number) => {
    if (!visualizerRef.current) return;
    const rect = visualizerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleVisualizerMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDraggingSlider) handleVisualizerMove(e.clientX);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg/50 border-y border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Interactive Showcase</span>
          <h2 className="display-heading text-3xl sm:text-4xl md:text-5xl mt-2">
            Witness the Difference.
          </h2>
          <div className="accent-bar mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div
            id="before-after-visualizer"
            ref={visualizerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDraggingSlider(true)}
            onMouseUp={() => setIsDraggingSlider(false)}
            onMouseLeave={() => setIsDraggingSlider(false)}
            onTouchStart={() => setIsDraggingSlider(true)}
            onTouchEnd={() => setIsDraggingSlider(false)}
            className="relative h-[300px] sm:h-[450px] md:h-[520px] w-full rounded-[24px] overflow-hidden border border-brand-border select-none cursor-ew-resize group"
          >
            {/* After Frame */}
            <div className="absolute inset-0 z-0 bg-brand-dark">
              <img
                src="/images/residential_clean_1780019711990.png"
                alt="Spotless kitchen after professional deep cleaning in Colorado Springs"
                className="w-full h-full object-cover pointer-events-none"
              />

              {/* Visual Glow Layer */}
              <div className="absolute top-[20%] right-[15%] pointer-events-none animate-pulse-glow">
                <Sparkles className="w-8 h-8 text-white fill-white" />
              </div>

              <div className="absolute bottom-6 right-6 z-10 px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl border border-brand-border">
                <span className="text-[10px] text-white font-mono tracking-widest uppercase">
                  PRESTIGE AFTER
                </span>
              </div>
            </div>

            {/* Before Frame (Sepia grey styled) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden z-10 transition-all pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <div
                className="absolute inset-y-0 left-0"
                style={{ width: visualizerRef.current?.getBoundingClientRect().width || "100%" }}
              >
                <img
                  src="/images/residential_clean_1780019711990.png"
                  alt="Before: dirty kitchen before L&J Prestige Cleaning service in Colorado"
                  className="w-full h-full object-cover pointer-events-none filter grayscale contrast-90 brightness-50"
                />
                <div className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl border border-brand-border">
                  <span className="text-[10px] text-[#777] font-mono tracking-widest uppercase">
                    BEFORE SERVICE
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Track Line */}
            <div
              className="absolute inset-y-0 z-20 w-0.5 slider-track pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Draggable knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-surface border border-brand-crimson flex items-center justify-center cursor-ew-resize shadow-xl">
                <svg className="w-4 h-4 text-brand-offwhite" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8 0l4-4-4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
