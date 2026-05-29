import React, { useState, useRef } from "react";
import {
  Sparkles,
  Truck,
  Baby,
  Home,
  Star,
  ShieldCheck,
  TrendingDown,
  Languages,
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
  X,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Header from "./components/Header";
import { servicesData, trustBadges, reviewsData, faqsData } from "./data";
import { EstimateFormData } from "./types";

export default function App() {
  const [formData, setFormData] = useState<EstimateFormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "airbnb-cleaning",
    preferredContact: "Phone Call",
    message: ""
  });

  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [modalOpen, setModalOpen] = useState(false);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openEstimateModal = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, serviceType: serviceId }));
    setModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your estimate request has been sent successfully."
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "airbnb-cleaning",
          preferredContact: "Phone Call",
          message: ""
        });
        setTimeout(() => setModalOpen(false), 2000);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to submit. Please check all fields and try again."
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network issue. Please contact Letty or Jozette directly."
      });
    } finally {
      setLoading(false);
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Baby": return <Baby className="w-5 h-5 text-brand-crimson" />;
      case "HomeStar": return <Home className="w-5 h-5 text-brand-crimson" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-brand-crimson" />;
      case "Truck": return <Truck className="w-5 h-5 text-brand-crimson" />;
      default: return <Sparkles className="w-5 h-5 text-brand-crimson" />;
    }
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingDown": return <TrendingDown className="w-5 h-5 text-brand-crimson" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-brand-crimson" />;
      case "Languages": return <Languages className="w-5 h-5 text-brand-crimson" />;
      default: return <Star className="w-5 h-5 text-brand-crimson" />;
    }
  };

  return (
    <div className="bg-textured min-h-screen text-brand-offwhite relative overflow-x-hidden pt-[110px]">
      <Header />

      {/* ─── Hero Section ─── */}
      <section id="home" className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center min-h-[90vh] overflow-hidden hero-glow">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col gap-6 animate-slide-left">
            <span className="section-label">Colorado's Prestige Standard</span>
            
            <h1 className="display-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Your Home.<br />
              <span className="text-[#ffffff]">Our Standard.</span>
            </h1>

            <p className="body-text text-lg max-w-xl">
              Uncompromising child-safe preschool sanitation, elite Airbnb staging, and swift commercial haulage. family-owned and custom detailed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:7192501717"
                className="btn-crimson inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Letty · 719.250.1717</span>
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost px-8 py-4 rounded-full text-base font-bold"
              >
                Free Estimate
              </button>
            </div>

            {/* Coverage Towns */}
            <div className="border-t border-[#1a1a1a] pt-6 mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#555]">
              <span>[CO SPRINGS]</span>
              <span>[DENVER METRO]</span>
              <span>[CASTLE ROCK]</span>
              <span>[PUEBLO]</span>
            </div>
          </div>

          {/* Hero Image (Tilted editorial frame) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in delay-200">
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[20px] overflow-hidden border border-brand-border shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/hero_bg_1780019650230.png"
                alt="Elite Colorado home layout"
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Grid (Bento Box Layout) ─── */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <span className="section-label">What We Do</span>
            <h2 className="display-heading text-3xl sm:text-4xl md:text-5xl mt-2">
              Bespoke Cleaning Services.
            </h2>
            <span className="accent-bar"></span>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Card 1: Daycare (Tall) */}
            <div className="md:col-span-7 bg-brand-surface border border-brand-border rounded-[20px] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#333] transition-all duration-300 min-h-[380px]">
              <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <img
                  src="/images/daycare_clean_1780019670393.png"
                  alt="Daycare cleaning details"
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
                  Certified non-toxic, child-safe protection for daycare nurseries. Fully compliant with Colorado Department of Human Services rules.
                </p>
                <ul className="text-xs text-brand-grey space-y-2 mt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-crimson" />
                    HEPA-filter air dusting &amp; sterilization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-crimson" />
                    Deep restroom disinfection
                  </li>
                </ul>
              </div>
              <div className="relative z-10 mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-crimson font-bold">Daycare Standard</span>
                <button
                  onClick={() => openEstimateModal("daycare-cleaning")}
                  className="btn-ghost px-4 py-2 rounded-full text-xs font-bold"
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
                  alt="Airbnb staging"
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
                  Five-star rapid cleaning standard designed to elevate guest reviews and secure Superhost status.
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-crimson font-bold">Turnover Staging</span>
                <button
                  onClick={() => openEstimateModal("airbnb-cleaning")}
                  className="btn-ghost px-4 py-2 rounded-full text-xs font-bold"
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
                  alt="Residential housekeeping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-surface-2 border border-brand-border flex items-center justify-center">
                  {getServiceIcon("Sparkles")}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-crimson transition-colors">
                  Residential House Clean
                </h3>
                <p className="text-brand-grey text-sm leading-relaxed">
                  Premium home detailing tailored around your lifestyle. Spotless results from baseboards to ceiling fans.
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-crimson font-bold">House Detail</span>
                <button
                  onClick={() => openEstimateModal("residential-cleaning")}
                  className="btn-ghost px-4 py-2 rounded-full text-xs font-bold"
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
                  alt="Junk hauling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#5e1414] border border-[#7e1c1c] flex items-center justify-center">
                  {getServiceIcon("Truck")}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-red-300 transition-colors">
                  Commercial &amp; Residential Junk Removal
                </h3>
                <p className="text-red-100 text-sm max-w-md leading-relaxed">
                  Prompt, heavy-duty hauling. We Beat Any Competitor Price—Bring us any written estimate and watch us beat it.
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 border-t border-red-900/55 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-200 font-bold">Heavy Hauling</span>
                <button
                  onClick={() => openEstimateModal("junk-removal")}
                  className="bg-white text-[#4A0D0D] hover:bg-red-100 transition-colors px-6 py-2 rounded-full text-xs font-bold"
                >
                  Estimate
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Before & After Interactive Showcase ─── */}
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
                  alt="Spotless luxury kitchen"
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
                    alt="Dusty household kitchen"
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

      {/* ─── Trust / Promise Section ─── */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Frame Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[24px] overflow-hidden border border-brand-border aspect-[4/3] bg-brand-surface">
              <img
                src="/images/residential_clean_1780019711990.png"
                alt="Immaculate living space room"
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

      {/* ─── Reviews Grid & Pricing Banner ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <span className="section-label">Client Reviews</span>
              <h2 className="display-heading text-3xl sm:text-4xl md:text-5xl mt-2">
                What Colorado Says.
              </h2>
              <span className="accent-bar"></span>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reviewsData.map((review) => (
                <div key={review.id} className="review-card flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-crimson font-bold">
                        {review.serviceType}
                      </span>
                      <div className="flex gap-0.5 text-yellow-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-brand-offwhite text-sm italic font-light leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                  <div className="border-t border-brand-border/40 pt-4 mt-6 flex justify-between items-center text-xs text-brand-grey">
                    <span className="font-bold">{review.name}</span>
                    <span>{review.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Match Ribbon */}
          <div className="bg-brand-crimson rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-crimson-dark to-brand-crimson opacity-50 z-0"></div>
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h3 className="display-heading text-2xl sm:text-3xl text-white">
                "We Will Beat Any Competitor Price"
              </h3>
              <p className="text-red-100 text-sm mt-2 max-w-lg leading-relaxed">
                Present any written cleaning or junk removal quote from a licensed company in Colorado. We match or beat it safely.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="tel:7192501717"
                className="bg-white text-black font-bold px-6 py-3.5 rounded-full text-sm text-center flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Letty · 719.250.1717
              </a>
              <a
                href="tel:3032422695"
                className="bg-black/90 text-white border border-red-900/50 font-bold px-6 py-3.5 rounded-full text-sm text-center flex items-center justify-center gap-2 hover:bg-black transition-colors"
              >
                <Phone className="w-4 h-4" />
                Jozette · 303.242.2695
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Common Inquiries</span>
            <h2 className="display-heading text-3xl sm:text-4xl mt-2">
              Frequently Asked Questions.
            </h2>
            <div className="accent-bar mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div key={idx} className="faq-item" data-open={isOpen ? "true" : "false"}>
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-white hover:text-brand-crimson transition-colors cursor-pointer"
                  >
                    <span className="text-base tracking-tight">{faq.question}</span>
                    <span className="text-xl leading-none text-brand-crimson ml-4">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-brand-grey text-sm leading-relaxed animate-fadeIn border-t border-brand-border/40 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Contact & Estimate Form ─── */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg border-t border-brand-border relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Call Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="section-label">Get In Touch</span>
              <h2 className="display-heading text-3xl sm:text-4xl">
                Book Your Free Estimate.
              </h2>
              <p className="body-text text-sm mt-2">
                No hidden fees, no upcharges. Reach our founders directly. Letty is ready to coordinate in Spanish, and Jozette is available to organize estimates.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Letty Card */}
              <div className="contact-card">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-brand-crimson uppercase tracking-widest font-bold">Co-Founder</span>
                    <h4 className="text-lg font-bold text-white mt-1">Letty Silva</h4>
                  </div>
                  <span className="text-[9px] font-mono bg-brand-crimson/10 border border-brand-crimson/30 text-brand-crimson px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    Hablo Español
                  </span>
                </div>
                <a
                  href="tel:7192501717"
                  className="inline-flex items-center gap-2 mt-4 text-[#ffffff] hover:text-brand-crimson font-mono text-lg font-bold"
                >
                  <Phone className="w-4 h-4 text-brand-crimson" />
                  719.250.1717
                </a>
              </div>

              {/* Jozette Card */}
              <div className="contact-card border-l-[#cc1a1a]">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-brand-crimson uppercase tracking-widest font-bold">Co-Founder</span>
                    <h4 className="text-lg font-bold text-white mt-1">Jozette</h4>
                  </div>
                  <span className="text-[9px] font-mono bg-brand-surface-2 border border-brand-border text-brand-grey px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    English Service
                  </span>
                </div>
                <a
                  href="tel:3032422695"
                  className="inline-flex items-center gap-2 mt-4 text-[#ffffff] hover:text-brand-crimson font-mono text-lg font-bold"
                >
                  <Phone className="w-4 h-4 text-brand-crimson" />
                  303.242.2695
                </a>
              </div>
            </div>

            <div className="p-4 bg-brand-surface border border-brand-border rounded-xl flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-surface-2 flex items-center justify-center text-brand-crimson">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <h5 className="font-bold text-white">Fully Insured &amp; Certified</h5>
                <p className="text-brand-grey mt-0.5">preschool and residential standard.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-surface border border-brand-border rounded-[24px] p-8 md:p-12 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Estimate Request</h3>
              <p className="text-xs text-brand-grey mb-8">
                Fill in your project specifications. Our founders will review your job details and lock in your estimate.
              </p>

              {status.type && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 border text-sm ${
                    status.type === "success"
                      ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
                      : "bg-red-950/40 border-red-500/30 text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-bold">{status.type === "success" ? "Submitted Successfully!" : "Submission Issue"}</p>
                    <p className="text-xs mt-1 leading-relaxed">{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Elena Ramirez"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 719.250.1717"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. client@colorado.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="form-input cursor-pointer"
                    >
                      <option value="daycare-cleaning">Preschool / Daycare Cleaning</option>
                      <option value="airbnb-cleaning">Airbnb Turnover Cleaning</option>
                      <option value="residential-cleaning">Residential House Deep Clean</option>
                      <option value="junk-removal">Junk Removal &amp; Hauling</option>
                      <option value="other">Multiple Services / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-2">Preferred Contact Method</label>
                  <div className="flex gap-6">
                    {["Phone Call", "Text Message", "Email"].map((method) => (
                      <label key={method} className="flex items-center gap-2 text-xs text-brand-offwhite cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleInputChange}
                          className="accent-brand-crimson"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-2">Message / Job Size *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe daycare sizes, Airbnb checkout dates, bulk volume of junk, or rival price quotes..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-crimson w-full py-4 rounded-full font-bold uppercase tracking-wider transition-all disabled:opacity-50 text-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Lock In My Estimate</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-brand-bg pt-16 pb-12 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-brand-border pb-12">
            <div className="flex flex-col gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white uppercase">L&amp;J Prestige</span>
              <p className="text-xs text-brand-grey max-w-sm">
                Denver, Pueblo, and Colorado Springs premium sanitation and haulage. we beat any competitor quote.
              </p>
            </div>
            <div className="flex gap-8 text-xs font-mono text-[#444]">
              <span>© {new Date().getFullYear()} L&amp;J Prestige</span>
              <span>All rights reserved.</span>
            </div>
          </div>
          <div className="pt-8 text-center text-[10px] text-[#444] uppercase tracking-wider">
            Colorado Department of Early Childhood Compliant · Licensed Operating Crews
          </div>
        </div>
      </footer>

      {/* ─── Sticky Call CTA ─── */}
      <a
        href="tel:7192501717"
        className="fixed bottom-6 right-6 z-40 bg-brand-crimson hover:bg-brand-crimson-dark text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-red-900/50"
      >
        <Phone className="w-4 h-4" />
        <span>Free Estimate</span>
      </a>

      {/* ─── Modal Popup for instant estimates ─── */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-brand-surface border border-brand-border w-full max-w-lg rounded-[24px] p-8 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-brand-grey hover:text-white bg-brand-surface-2 hover:bg-brand-crimson rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-white mb-2">
              Estimate for <span className="text-brand-crimson">
                {servicesData.find((s) => s.id === formData.serviceType)?.title || "Services"}
              </span>
            </h3>
            
            <p className="text-xs text-brand-grey mb-6 leading-relaxed">
              We beat any competitor price. Let us know a few details, and we will coordinate your quote instantly.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Elena Ramirez"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="719.250.1717"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-grey mb-1">Project Details</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Daycare size, Airbnb frequency, volume of junk to haul, or rival quotes..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-crimson w-full py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : <span>Send Estimate Request</span>}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
