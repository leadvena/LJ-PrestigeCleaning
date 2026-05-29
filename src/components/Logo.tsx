import React from "react";

interface LogoProps {
  className?: string;
  glow?: boolean;
  variant?: "full" | "header";
}

export default function Logo({ className = "h-16 w-auto", glow = false, variant = "full" }: LogoProps) {
  const logoSrc = variant === "header" ? "/images/ljlogo(1).png" : "/images/logo.png";
  return (
    <div className={`relative flex items-center justify-center ${className} select-none`}>
      {glow && (
        <div className="absolute inset-0 bg-brand-crimson/10 blur-2xl rounded-full scale-110 pointer-events-none transition-all duration-1000"></div>
      )}
      <img
        src={logoSrc}
        alt="L&J Prestige Cleaning"
        className="h-full w-auto object-contain max-h-full"
      />
    </div>
  );
}
