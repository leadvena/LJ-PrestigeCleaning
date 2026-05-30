import React from "react";
import { Phone } from "lucide-react";
import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-16 flex flex-col items-center justify-center min-h-[95vh] overflow-hidden bg-cover bg-center scroll-mt-0 hero-glow"
      style={{ backgroundImage: "url('/images/hero_bg_1780019650230.png')" }}
    >
      {/* Dark overlay with vignette / subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/95 via-[#080808]/80 to-[#080808] z-0"></div>
      
      {/* Additional radial glow behind the logo for premium spatial depth */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-brand-crimson/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto w-full text-center z-10 flex flex-col items-center gap-6 md:gap-8">
        {/* Stylized Logo in center - Fades in first */}
        <div className="flex flex-col items-center select-none mb-2 animate-fade-up">
          <Logo className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto" glow={true} />
        </div>

        {/* Shorter, punchier headline on a single line - Fades in second */}
        <h1 className="display-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl leading-tight animate-fade-up delay-100">
          Your Home. <span className="text-white">Our Standard.</span>
        </h1>

        {/* Consolidated inline button row - Fades in third */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto justify-center items-center animate-fade-up delay-200">
          <a
            href="tel:7192501717"
            className="btn-crimson inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold shadow-lg w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 animate-pulse-glow" />
            <span>Call Letty · 719.250.1717</span>
          </a>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-black/40 hover:bg-black/60 w-full sm:w-auto cursor-pointer"
          >
            Free Estimate
          </button>
        </div>

        {/* Coverage Towns — bottom mono bar separated by a hairline */}
        <nav
          aria-label="Service areas"
          className="border-t border-brand-border/40 w-full max-w-xl pt-6 mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#666] animate-fade-up delay-300"
        >
          {/* GEO-optimized entity paragraph for AI engines + Google E-E-A-T */}
          
          <span title="Cleaning & junk removal Colorado Springs CO">Colorado Springs, CO</span>
          <span title="Cleaning service Denver Metro area">Denver Metro, CO</span>
          <span title="House cleaning Castle Rock Colorado">Castle Rock, CO</span>
          <span title="Junk removal Pueblo Colorado">Pueblo, CO</span>
        </nav>
      </div>
    </section>
  );
}
