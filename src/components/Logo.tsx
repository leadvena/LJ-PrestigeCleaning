import React from "react";

interface LogoProps {
  className?: string;
  glow?: boolean;
}

export default function Logo({ className = "h-16 w-auto", glow = false }: LogoProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className} select-none`}>
      {/* Glow Effect if requested */}
      {glow && (
        <div className="absolute inset-0 bg-brand-amber-start/15 blur-2xl rounded-full scale-110 pointer-events-none transition-all duration-1000"></div>
      )}

      {/* SVG Emblem */}
      <svg
        id="lj-prestige-logo-svg"
        viewBox="0 0 500 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white"
      >
        <defs>
          {/* Molten Amber Gold Gradient */}
          <linearGradient id="amberGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E67E22" />
            <stop offset="50%" stopColor="#F1C40F" />
            <stop offset="100%" stopColor="#F39C12" />
          </linearGradient>

          {/* Crimson Accent Gradient */}
          <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C0392B" />
            <stop offset="100%" stopColor="#E74C3C" />
          </linearGradient>

          {/* Subtle Silhouette Background Clip */}
          <clipPath id="cityClip">
            <rect x="0" y="0" width="500" height="160" />
          </clipPath>
        </defs>

        {/* 1. Subtle house silhouette in dark charcoal (#1a1a1a or #222) background */}
        <g opacity="0.15">
          {/* Left House */}
          <path d="M50 110 L100 65 L150 110 Z" fill="#666" />
          <rect x="70" y="110" width="60" height="15" fill="#666" />
          {/* Center House Silhouette */}
          <path d="M120 110 L190 50 L260 110 Z" fill="#888" />
          <rect x="150" y="90" width="80" height="35" fill="#888" />
          {/* Right House Silhouette */}
          <path d="M230 110 L275 70 L320 110 Z" fill="#555" />
          <rect x="250" y="95" width="50" height="30" fill="#555" />
        </g>

        {/* 2. Starburst / Sparkles surrounding the logo in golden amber */}
        <g fill="url(#amberGoldGrad)">
          {/* Main sparkle top right */}
          <path d="M230 25 C230 25 233 15 238 15 C233 15 230 5 230 5 C230 5 227 15 222 15 C227 15 230 25 230 25 Z" />
          {/* Sparkle small top left */}
          <path d="M65 45 C65 45 67 38 71 38 C67 38 65 31 65 31 C65 31 63 38 59 38 C63 38 65 45 65 45 Z" />
          {/* Sparkle middle right */}
          <path d="M435 55 C435 55 438 45 444 45 C438 45 435 35 435 35 C435 35 432 45 426 45 C432 45 435 55 435 55 Z" />
          {/* Sparkle tiny left */}
          <path d="M115 85 C115 85 116.5 80 120 80 C116.5 80 115 75 115 75 C115 75 113.5 80 110 80 C113.5 80 115 85 115 85 Z" />
        </g>

        {/* 3. Outer shield / frame accent (Crimson Left Border echo) */}
        <path d="M35 25 L35 125 A 5 5 0 0 0 40 130 L450 130 A 5 5 0 0 0 455 125 L455 25" stroke="url(#crimsonGrad)" strokeWidth="3" opacity="0.8" strokeLinecap="round" />

        {/* 4. Elegant typography */}
        {/* Main letters: L&J */}
        <text
          x="65"
          y="95"
          fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
          fontWeight="800"
          fontSize="68"
          fill="#F5F5F5"
          letterSpacing="-1px"
        >
          L&amp;J
        </text>

        {/* Badge divider line */}
        <rect x="200" y="47" width="3" height="48" fill="url(#amberGoldGrad)" />

        {/* Subtitles: PRESTIGE CLEANING & JUNK REMOVAL */}
        <text
          x="215"
          y="68"
          fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
          fontWeight="800"
          fontSize="23"
          fill="#F5F5F5"
          letterSpacing="4.5px"
        >
          PRESTIGE
        </text>

        <text
          x="215"
          y="93"
          fontFamily="'Inter', sans-serif"
          fontWeight="600"
          fontSize="13"
          fill="url(#amberGoldGrad)"
          letterSpacing="2.8px"
        >
          CLEANING &amp; JUNK REMOVAL
        </text>

        {/* Small Colorado badge ribbon indicator inside logo bottom center */}
        <rect x="215" y="102" width="138" height="15" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
        <circle cx="222" cy="109.5" r="3" fill="#C0392B" />
        <text
          x="232"
          y="113"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="8.5"
          fill="#F5F5F5"
          letterSpacing="2px"
        >
          COLORADO, USA
        </text>
      </svg>
    </div>
  );
}
