import React from "react";

interface LogoProps {
  className?: string;
  glow?: boolean;
}

export default function Logo({ className = "h-16 w-auto", glow = false }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className} select-none`}>
      {glow && (
        <div className="absolute inset-0 bg-brand-crimson/10 blur-2xl rounded-full scale-110 pointer-events-none transition-all duration-1000"></div>
      )}
      <img
        src="/images/logo.png"
        alt="L&J Prestige Cleaning"
        className="h-full w-auto object-contain max-h-full"
      />
    </div>
  );
}
