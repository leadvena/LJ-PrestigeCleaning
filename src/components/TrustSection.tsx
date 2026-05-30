import React from "react";
import { ShieldCheck, TrendingDown, Languages, Star } from "lucide-react";
import { trustBadges } from "../data";

export default function TrustSection() {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingDown": return <TrendingDown className="w-5 h-5 text-brand-crimson" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-brand-crimson" />;
      case "Languages": return <Languages className="w-5 h-5 text-brand-crimson" />;
      default: return <Star className="w-5 h-5 text-brand-crimson" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative scroll-mt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left: Frame Photo */}
        <div className="lg:col-span-6">
          <div className="relative rounded-[24px] overflow-hidden border border-brand-border aspect-[4/3] bg-brand-surface">
            <img
              src="/images/residential_clean_1780019711990.png"
              alt="Professional house cleaning service in Colorado Springs by L&J Prestige Cleaning LLC"
              className="w-full h-full object-cover filter grayscale contrast-110 brightness-85"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-crimson/15 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right: Content Stack */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="section-label">Our Promise</span>
          <h2 className="display-heading text-3xl sm:text-4xl md:text-5xl">
            Colorado's Most Trusted Cleaning Crew.
          </h2>

          <p className="body-text">
            We are Letty &amp; Jozette, running this family business with our boys. Every client gets direct co-founder quality assurance. No franchise markups, no shortcuts.
          </p>

          {/* GEO-optimized entity paragraph for AI engines + Google E-E-A-T */}
          <p className="text-xs text-brand-grey leading-relaxed border-l-2 border-brand-crimson/50 pl-4 mt-2">
            L&amp;J Prestige Cleaning LLC is a fully licensed, insured, family-owned cleaning and junk removal company based in Colorado Springs, Colorado.
            We service Colorado Springs, Denver Metro, Castle Rock, and Pueblo with child-safe daycare sanitation,
            Airbnb turnover cleaning, residential deep cleans, and same-day junk removal.
            We beat any competitor price and offer bilingual service in English and Spanish.
          </p>

          <div className="flex flex-col mt-4">
            {trustBadges.map((badge) => (
              <div key={badge.id} className="trust-row">
                <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center flex-shrink-0">
                  {getBadgeIcon(badge.iconName)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{badge.title}</h4>
                  <p className="text-xs text-brand-grey mt-1 leading-relaxed">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
