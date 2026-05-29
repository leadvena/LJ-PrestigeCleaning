import React, { useState } from "react";
import logoImg from "../assets/images/logo.png";

interface LogoProps {
  className?: string;
  glow?: boolean;
}

export default function Logo({ className = "h-16 w-auto", glow = false }: LogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className} select-none`}>
      {/* Glow Effect if requested */}
      {glow && (
        <div className="absolute inset-0 bg-brand-crimson/10 blur-2xl rounded-full scale-110 pointer-events-none transition-all duration-1000"></div>
      )}

      {hasError ? (
        <svg
          id="lj-prestige-logo-svg"
          viewBox="0 0 500 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          <defs>
            {/* Platinum / Chrome Silver Metallic Gradient */}
            <linearGradient id="amberGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E5E5E5" />
              <stop offset="100%" stopColor="#A3A3A3" />
            </linearGradient>

            {/* Deep Luxe Crimson Red Gradient */}
            <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#800000" />
              <stop offset="50%" stopColor="#B30000" />
              <stop offset="100%" stopColor="#660000" />
            </linearGradient>
          </defs>

          {/* House Silhouette */}
          <g opacity="0.12">
            <path d="M50 110 L100 65 L150 110 Z" fill="#666" />
            <rect x="70" y="110" width="60" height="15" fill="#666" />
            <path d="M120 110 L190 50 L260 110 Z" fill="#888" />
            <rect x="150" y="90" width="80" height="35" fill="#888" />
            <path d="M230 110 L275 70 L320 110 Z" fill="#555" />
            <rect x="250" y="95" width="50" height="30" fill="#555" />
          </g>

          {/* Starburst Sparkles */}
          <g fill="url(#amberGoldGrad)">
            <path d="M230 25 C230 25 233 15 238 15 C233 15 230 5 230 5 C230 5 227 15 222 15 C227 15 230 25 230 25 Z" />
            <path d="M65 45 C65 45 67 38 71 38 C67 38 65 31 65 31 C65 31 63 38 59 38 C63 38 65 45 65 45 Z" />
            <path d="M435 55 C435 55 438 45 444 45 C438 45 435 35 435 35 C435 35 432 45 426 45 C432 45 435 55 435 55 Z" />
          </g>

          {/* Outer frame */}
          <path d="M35 25 L35 125 A 5 5 0 0 0 40 130 L450 130 A 5 5 0 0 0 455 125 L455 25" stroke="url(#crimsonGrad)" strokeWidth="3" opacity="0.8" strokeLinecap="round" />

          {/* L&J */}
          <text
            x="65"
            y="95"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontWeight="700"
            fontSize="72"
            fill="#F5F5F5"
            letterSpacing="-1px"
          >
            L&amp;J
          </text>

          {/* Divider */}
          <rect x="195" y="47" width="2" height="48" fill="url(#amberGoldGrad)" />

          {/* Subtitles */}
          <text
            x="215"
            y="68"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontWeight="700"
            fontSize="26"
            fill="#F5F5F5"
            letterSpacing="5px"
          >
            PRESTIGE
          </text>

          <text
            x="215"
            y="93"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="600"
            fontSize="11"
            fill="url(#amberGoldGrad)"
            letterSpacing="2.8px"
          >
            CLEANING &amp; JUNK REMOVAL
          </text>

          {/* Colorado badge */}
          <rect x="215" y="102" width="138" height="15" rx="3" fill="#151515" stroke="url(#amberGoldGrad)" strokeWidth="0.5" />
          <circle cx="222" cy="110" r="3" fill="#B30000" />
          <text
            x="232"
            y="113"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="700"
            fontSize="8"
            fill="#F5F5F5"
            letterSpacing="2px"
          >
            COLORADO, USA
          </text>
        </svg>
      ) : (
        <img
          src={logoImg}
          alt="L&J Prestige"
          className="h-full w-auto object-contain max-h-full"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
