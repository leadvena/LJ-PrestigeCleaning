import React from "react";
import { Sparkles, Truck, Baby, Home, Hammer, Droplets, Flame } from "lucide-react";
import { specialtyServices } from "../data";

interface ServicesGridProps {
  onRequestEstimate: (serviceId: string) => void;
}

export default function ServicesGrid({ onRequestEstimate }: ServicesGridProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Baby": return <Baby className="w-5 h-5 text-brand-crimson" />;
      case "HomeStar": return <Home className="w-5 h-5 text-brand-crimson" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-brand-crimson" />;
      case "Truck": return <Truck className="w-5 h-5 text-brand-crimson" />;
      default: return <Sparkles className="w-5 h-5 text-brand-crimson" />;
    }
  };

  const getSpecialtyIcon = (id: string) => {
    switch (id) {
      case "post-construction": return <Hammer className="w-5 h-5 text-brand-crimson" />;
      case "powerwashing": return <Droplets className="w-5 h-5 text-brand-crimson" />;
      case "chimney-stove": return <Flame className="w-5 h-5 text-brand-crimson" />;
      default: return <Sparkles className="w-5 h-5 text-brand-crimson" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative z-10 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-up max-w-3xl">
          <span className="section-label">What We Do</span>
          <h2 className="display-heading text-3xl sm:text-4xl md:text-5xl mt-2 mb-4">
            Bespoke Cleaning &amp; Detailing Services.
          </h2>
          <p className="body-text text-base text-brand-grey leading-relaxed">
            Uncompromising child-safe preschool sanitation, elite Airbnb staging, detailed house cleanups, and heavy-duty junk removal. Based in Lakewood, we cover the Front Range Front-to-Back.
          </p>
          <span className="accent-bar"></span>
        </div>

        {/* Core Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Daycare (Tall) */}
          <div className="md:col-span-7 bg-brand-surface border border-brand-border rounded-[20px] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#333] transition-all duration-300 min-h-[380px]">
            <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <img
                src="/images/daycare_clean_1780019670393.png"
                alt="Child-safe preschool and daycare cleaning service Colorado by L&J Prestige Cleaning LLC"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                {getServiceIcon("Baby")}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-crimson transition-colors">
                Preschool &amp; Daycare Cleaning
              </h3>
              <p className="text-brand-grey text-sm max-w-md leading-relaxed">
                Certified non-toxic, child-safe protection for daycare nurseries. Fully compliant with Colorado Department of Early Childhood rules.
              </p>
              <ul className="text-xs text-brand-grey space-y-2 mt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson" />
                  HEPA-filter air dusting &amp; sterilization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson" />
                  Deep restroom &amp; toy disinfection
                </li>
              </ul>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-crimson font-bold">Daycare Standard</span>
              <button
                onClick={() => onRequestEstimate("daycare-cleaning")}
                className="btn-ghost px-4 py-2 rounded-full text-xs font-bold cursor-pointer"
              >
                Estimate
              </button>
            </div>
          </div>

          {/* Card 2: Airbnb (Standard) */}
          <div className="md:col-span-5 bg-brand-surface border border-brand-border rounded-[20px] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#333] transition-all duration-300 min-h-[380px]">
            <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <img
                src="/images/airbnb_turnover_1780019691921.png"
                alt="Airbnb turnover cleaning and staging service Colorado by L&J Prestige Cleaning LLC"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                {getServiceIcon("HomeStar")}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-crimson transition-colors">
                Airbnb Turnover Staging
              </h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Five-star rapid cleaning standard designed to elevate guest reviews, restock welcome amenities, and secure Superhost status.
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-crimson font-bold">Turnover Staging</span>
              <button
                onClick={() => onRequestEstimate("airbnb-cleaning")}
                className="btn-ghost px-4 py-2 rounded-full text-xs font-bold cursor-pointer"
              >
                Estimate
              </button>
            </div>
          </div>

          {/* Card 3: Residential (Standard) */}
          <div className="md:col-span-5 bg-brand-surface border border-brand-border rounded-[20px] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#333] transition-all duration-300 min-h-[380px]">
            <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <img
                src="/images/residential_clean_1780019711990.png"
                alt="Residential house deep cleaning service Colorado by L&J Prestige Cleaning LLC"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                {getServiceIcon("Sparkles")}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-crimson transition-colors">
                Residential &amp; Maid Services
              </h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Premium home detailing and routine maid services tailored around your lifestyle. Spotless walls, range hoods, blinds, and fixtures.
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-crimson font-bold">House Detail</span>
              <button
                onClick={() => onRequestEstimate("residential-cleaning")}
                className="btn-ghost px-4 py-2 rounded-full text-xs font-bold cursor-pointer"
              >
                Estimate
              </button>
            </div>
          </div>

          {/* Card 4: Junk Hauling (Tall Red Accent Card) */}
          <div className="md:col-span-7 bg-[#4A0D0D] border border-brand-border rounded-[20px] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#6A1111] transition-all duration-300 min-h-[380px]">
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <img
                src="/images/junk_removal_1780019730037.png"
                alt="Junk removal and hauling service Colorado by L&J Prestige Cleaning LLC"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#5e1414] border border-[#7e1c1c] flex items-center justify-center">
                {getServiceIcon("Truck")}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-red-300 transition-colors">
                Junk Removal &amp; Debris Hauling
              </h3>
              <p className="text-red-100 text-sm max-w-md leading-relaxed">
                Prompt hauling of estate junk, waste, building materials, and construction debris. We Beat Any Competitor Price—Licensed crews at local rates.
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-red-900/55 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-red-200 font-bold">Heavy Hauling</span>
              <button
                onClick={() => onRequestEstimate("junk-removal")}
                className="bg-white text-[#4A0D0D] hover:bg-red-100 transition-colors px-6 py-2 rounded-full text-xs font-bold cursor-pointer"
              >
                Estimate
              </button>
            </div>
          </div>

        </div>

        {/* Specialized & Specialty Services Grid */}
        <div className="mt-20 pt-16 border-t border-brand-border/60">
          <div className="mb-12">
            <span className="section-label">Specialty Services</span>
            <h3 className="display-heading text-2xl sm:text-3xl mt-2 text-white">
              Advanced Detailing &amp; Seasonal Inspections.
            </h3>
            <p className="body-text text-sm text-brand-grey mt-2">
              From heavy-duty post-renovation cleanup to professional powerwashing and certified stove chimney safety care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialtyServices.map((service) => (
              <div
                key={service.id}
                className="bg-brand-surface border border-brand-border rounded-[20px] p-6 flex flex-col justify-between hover:border-[#333] transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                    {getSpecialtyIcon(service.id)}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{service.title}</h4>
                  <p className="text-brand-grey text-xs leading-relaxed">{service.description}</p>
                  
                  <ul className="text-[11px] text-brand-grey space-y-1.5 mt-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-crimson mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-brand-crimson font-bold">Specialty</span>
                  <button
                    onClick={() => onRequestEstimate(service.id)}
                    className="btn-ghost px-3.5 py-1.5 rounded-full text-[11px] font-bold cursor-pointer"
                  >
                    Estimate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
