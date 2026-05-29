import React, { useState } from "react";
import {
  Baby,
  Sparkles,
  Truck,
  Home,
  Star,
  ShieldCheck,
  TrendingDown,
  Languages,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  X,
  Send,
  Loader2
} from "lucide-react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import { servicesData, trustBadges, reviewsData, faqsData } from "./data";
import { EstimateFormData } from "./types";

export default function App() {
  const [formData, setFormData] = useState<EstimateFormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "airbnb-cleaning",
    preferredContact: "Phone",
    message: ""
  });

  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectServiceAndOpenModal = (serviceId: string) => {
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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Your schedule has been successfully generated! We will reach out to you shortly."
        });
        // Clear non-essential fields
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "airbnb-cleaning",
          preferredContact: "Phone",
          message: ""
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please check the fields and try again."
        });
      }
    } catch (err) {
      console.error("Estimate submit error:", err);
      setStatus({
        type: "error",
        message: "Failed to submit request. Please try calling us directly for instant booking."
      });
    } finally {
      setLoading(false);
    }
  };

  // Sparkle stars layout component in molten amber style
  const SparkleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sparkle 1 */}
      <div className="absolute top-[10%] left-[5%] animate-pulse duration-[3000ms] opacity-40">
        <svg className="w-5 h-5 text-brand-amber-start" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </svg>
      </div>
      {/* Sparkle 2 */}
      <div className="absolute top-[35%] right-[10%] animate-pulse duration-[4000ms] opacity-60">
        <svg className="w-8 h-8 text-brand-amber-end" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </svg>
      </div>
      {/* Sparkle 3 */}
      <div className="absolute top-[68%] left-[12%] animate-pulse duration-[2500ms] opacity-35">
        <svg className="w-6 h-6 text-brand-amber-start" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </svg>
      </div>
      {/* Sparkle 4 */}
      <div className="absolute top-[82%] right-[8%] animate-pulse duration-[3500ms] opacity-50">
        <svg className="w-4 h-4 text-brand-amber-end" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </svg>
      </div>
      {/* Sparkle 5 (near bottom left) */}
      <div className="absolute bottom-[5%] left-[8%] animate-pulse duration-[5000ms] opacity-30">
        <svg className="w-7 h-7 text-brand-amber-start" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </svg>
      </div>
    </div>
  );

  // Helper to render service icons matching original requested theme
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Baby":
        return <Baby className="w-8 h-8 text-brand-amber-end" />;
      case "HomeStar":
        return <Home className="w-8 h-8 text-brand-amber-end" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-brand-amber-end" />;
      case "Truck":
        return <Truck className="w-8 h-8 text-brand-amber-end" />;
      default:
        return <Sparkles className="w-8 h-8 text-brand-amber-end" />;
    }
  };

  // Helper to render trust badges icons
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingDown":
        return <TrendingDown className="w-8 h-8 text-brand-amber-end" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-brand-amber-end" />;
      case "Languages":
        return <Languages className="w-8 h-8 text-brand-amber-end" />;
      default:
        return <Star className="w-8 h-8 text-brand-amber-end" />;
    }
  };

  return (
    <div className="bg-textured text-brand-offwhite min-h-screen font-sans overflow-x-hidden relative">
      <Header />

      {/* Hero Section with Ambient Asset Background */}
      <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-36 flex flex-col items-center justify-center border-b border-brand-charcoal overflow-hidden min-h-[90vh]">
        
        {/* High-end cinematic hero background banner */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="/src/assets/images/hero_bg_1780019650230.png"
            alt="L&J Prestige Luxury House Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>

        <SparkleBackground />
        
        {/* Subtle Background House / Cityscape Silhouette */}
        <div className="absolute bottom-0 inset-x-0 h-40 opacity-5 md:opacity-[0.08] pointer-events-none select-none z-0">
          <svg className="w-full h-full text-brand-offwhite" viewBox="0 0 1440 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 L120,80 L240,200 L360,110 L480,200 L600,60 L720,200 L840,110 L960,200 L1080,75 L1200,200 L1320,130 L1440,200 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
          
          {/* Logo container with glow */}
          <div className="mb-6 md:mb-10 max-w-lg mx-auto transform hover:scale-102 transition-transform duration-300">
            <Logo className="h-28 sm:h-36 md:h-44 w-auto" glow={true} />
          </div>

          {/* Ribbon-style Hero Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-crimson to-brand-amber-start text-white font-display text-xs sm:text-sm font-black tracking-widest uppercase shadow-lg border border-brand-amber-end/30 mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 text-white fill-white animate-spin-slow" />
            <span>We Beat Any Price • Free Estimates</span>
            <Sparkles className="w-4 h-4 text-white fill-white animate-spin-slow" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-brand-offwhite leading-tight mb-6">
            Colorado's Elite <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber-start via-amber-400 to-brand-amber-end">
              Cleaning &amp; Junk Removal
            </span>
          </h1>

          <p className="text-gray-400 font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            We deliver uncompromising sanitation and power-hauling across Colorado. From pristine, certified pet/child-safe preschools to lightning-fast Airbnb turnover checkouts.
          </p>

          {/* Two Prominent Action-Trigger CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto mb-12">
            
            {/* Call Letty */}
            <a
              id="hero-call-letty"
              href="tel:7192501717"
              className="group w-full sm:w-1/2 flex flex-col items-center justify-center bg-brand-crimson hover:bg-brand-crimson/95 text-white py-4 px-6 rounded-xl font-display font-extrabold transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,57,43,0.4)] active:scale-98"
            >
              <span className="flex items-center gap-2 text-base tracking-wide uppercase">
                <Phone className="w-4 h-4 text-white transition-transform group-hover:rotate-12" />
                <span>Call Letty</span>
              </span>
              <span className="text-[11px] font-normal tracking-widest text-[#FFF] opacity-80 uppercase mt-0.5">
                (Hablo Español)
              </span>
              <span className="font-mono text-xs text-black bg-white/90 px-2 py-0.5 rounded-md mt-1 font-bold">
                719.250.1717
              </span>
            </a>

            {/* Call Jozette */}
            <a
              id="hero-call-jozette"
              href="tel:3032422695"
              className="group w-full sm:w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-brand-amber-start to-brand-amber-end hover:from-brand-amber-start/95 hover:to-brand-amber-end/95 text-black py-4 px-6 rounded-xl font-display font-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,126,34,0.4)] active:scale-98"
            >
              <span className="flex items-center gap-2 text-base tracking-wide uppercase">
                <Phone className="w-4 h-4 text-black transition-transform group-hover:rotate-12" />
                <span>Call Jozette</span>
              </span>
              <span className="text-[11px] font-bold tracking-widest text-black/70 uppercase mt-0.5">
                English Service
              </span>
              <span className="font-mono text-xs text-white bg-black/90 px-2 py-0.5 rounded-md mt-1 font-bold">
                303-242-2695
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-500 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Colorado Springs
            </span>
            <span className="text-brand-charcoal">•</span>
            <span>Denver Metro</span>
            <span className="text-brand-charcoal">•</span>
            <span>Castle Rock</span>
            <span className="text-brand-charcoal">•</span>
            <span>Pueblo</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 relative bg-brand-dark border-b border-brand-charcoal overflow-hidden">
        <SparkleBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-crimson mb-3">
              <Sparkles className="w-4 h-4 text-brand-amber-start" />
              <span>Full-Stack Operations</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-brand-offwhite mb-4">
              Premium <span className="text-brand-crimson">Service Categories</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-crimson to-brand-amber-start mx-auto rounded mb-6"></div>
            
            <p className="text-gray-400 font-sans text-base sm:text-lg">
              We provide detail-oriented services designed to beat franchise pricing. Every clean guarantees the highest standard of sanitization.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#131313] border-l-4 border-l-brand-crimson hover:border-l-brand-amber-start border-y border-r border-brand-charcoal hover:border-brand-amber-start/30 rounded-r-2xl overflow-hidden hover:bg-brand-charcoal/30 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                
                {/* Visual Header Image representation of services */}
                {service.imageUrl && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 p-3 bg-brand-dark/90 rounded-xl border border-brand-charcoal backdrop-blur-sm shadow">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>
                )}

                {/* Truck Silhouette background watermark specifically for Junk Removal Card */}
                {service.id === "junk-removal" && (
                  <div className="absolute right-4 bottom-4 w-28 h-28 opacity-[0.02] group-hover:opacity-[0.04] text-brand-offwhite pointer-events-none transition-opacity duration-300">
                    <Truck className="w-full h-full" strokeWidth={1} />
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber-start">
                        PRESTIGE DETAILING Standard
                      </span>
                      {/* Star Badge */}
                      <div className="flex gap-0.5 text-brand-amber-end">
                        <Star className="w-3.5 h-3.5 fill-brand-amber-end text-brand-amber-end" />
                        <Star className="w-3.5 h-3.5 fill-brand-amber-end text-brand-amber-end" />
                        <Star className="w-3.5 h-3.5 fill-brand-amber-end text-brand-amber-end" />
                        <Star className="w-3.5 h-3.5 fill-brand-amber-end text-brand-amber-end" />
                        <Star className="w-3.5 h-3.5 fill-brand-amber-end text-brand-amber-end" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-offwhite group-hover:text-brand-amber-start transition-colors duration-200 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-crimson flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-brand-charcoal/50 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mt-auto">
                    <div className="text-xs font-mono font-medium text-brand-amber-start">
                      ✨ Sparkle &amp; Sanitize Standard
                    </div>
                    
                    <button
                      onClick={() => selectServiceAndOpenModal(service.id)}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-charcoal/60 hover:bg-brand-crimson text-sm font-display font-bold text-brand-offwhite transition-all duration-200 group-hover:shadow-md cursor-pointer"
                    >
                      <span>Free Estimate</span>
                      <ArrowRight className="w-4 h-4 text-brand-amber-end group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Trust Badges */}
      <section id="about" className="py-20 md:py-28 relative bg-brand-dark/50 border-b border-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-brand-amber-start mb-3">
              <span>Unmatched Colorado Integrity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-offwhite mb-4">
              Why Colorado Trusts <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber-start to-brand-amber-end">L&amp;J Prestige</span>
            </h2>
            <div className="h-1 w-16 bg-brand-amber-start mx-auto rounded mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-brand-charcoal/40 border border-brand-charcoal hover:border-brand-crimson/35 rounded-2xl p-6 sm:p-8 text-center hover:bg-brand-charcoal/70 transition-all duration-300 relative group"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-brand-crimson to-brand-amber-start rounded-b opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="inline-flex p-4 bg-brand-dark rounded-full border border-brand-charcoal/60 group-hover:border-brand-amber-start/30 mb-6 transition-all duration-300 group-hover:scale-105">
                  {getBadgeIcon(badge.iconName)}
                </div>

                <h3 className="text-xl font-display font-extrabold text-[#FFF] mb-3 group-hover:text-brand-amber-start transition-colors">
                  {badge.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed About Us Segment containing Colorado Background and Founders Story */}
          <div className="mt-16 bg-[#121212] border border-brand-charcoal rounded-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -right-32 -bottom-32 w-96 h-96 opacity-[0.02] text-brand-offwhite pointer-events-none">
              <Sparkles className="w-full h-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold text-brand-crimson uppercase tracking-widest block mb-2">Our Foundation Story</span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-offwhite mb-6">
                  Born in Colorado. Committed to Premium, Local Service.
                </h3>
                <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                  <p>
                    L&amp;J Prestige Cleaning and Junk Removal originated from a shared Colorado dream: built by <strong className="text-brand-offwhite">Letty</strong> and <strong className="text-brand-offwhite">Jozette</strong>, we set out to prove that premium detailing-quality sanitization doesn't require giant corporate franchise fees.
                  </p>
                  <p>
                    We live and serve locally. That means we don't treat jobs as transactions. To guarantee the highest health standards, we operate with a handpicked crew employing child-safe, pet-compliant non-toxic sanitation lines, and heavy-duty, clean state disposal solutions that outperform.
                  </p>
                  <p>
                    We understand budgeting. That makes our <span className="text-brand-amber-start font-bold">"We Will Beat Any Price"</span> commitment real. Show us any competitor's quote and watch us match or beat it instantly without cutting a single corner.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-brand-charcoal/40 p-6 rounded-xl border border-brand-charcoal flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-offwhite border-b border-brand-charcoal pb-3 mb-4">
                    Our Direct Pledges:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-crimson flex-shrink-0" />
                      <span>Always free visual and physical estimates</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-crimson flex-shrink-0" />
                      <span>100% child-safe, pet-friendly ingredients</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-crimson flex-shrink-0" />
                      <span>Reliable turnover check-in standard</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-crimson flex-shrink-0" />
                      <span>Hablo Español to coordinate clearly</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-brand-dark/80 rounded-lg border border-brand-charcoal text-center">
                  <p className="text-xs text-brand-amber-start font-bold uppercase tracking-widest mb-1">Colorado Front Range Service</p>
                  <p className="text-xs text-gray-400">Available 7 days a week including emergency turnovers.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Free Estimate CTA strip */}
      <section className="bg-brand-crimson text-white relative py-12 overflow-hidden shadow-xl border-y border-brand-crimson">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-crimson via-red-950 to-brand-crimson opacity-80 player-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="inline-block bg-brand-amber-start text-black font-mono text-xs font-black tracking-widest uppercase px-3 py-1 rounded-md mb-3">
                No Obligation • Low Price Promise
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase text-brand-offwhite leading-tight">
                "We Will Beat Any Competitor Price"
              </h2>
              <p className="text-red-200 text-sm sm:text-base mt-2 max-w-2xl font-sans">
                Bring any local estimate. Letty and Jozette are ready to handle child-safe daycare sanitation, premium Airbnb turnovers, or heavy junk hauling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-stretch sm:items-center">
              <a
                href="tel:7192501717"
                className="flex items-center justify-center gap-3 bg-brand-dark hover:bg-brand-charcoal text-white py-4 px-6 rounded-xl font-display font-extrabold shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-brand-crimson" />
                <div className="text-left">
                  <span className="block text-[9px] text-gray-400 uppercase font-sans font-bold leading-none">Letty (Español)</span>
                  <span className="font-mono text-base">719.250.1717</span>
                </div>
              </a>
              
              <a
                href="tel:3032422695"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-brand-amber-start to-brand-amber-end hover:brightness-110 text-black py-4 px-6 rounded-xl font-display font-black shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-black" />
                <div className="text-left">
                  <span className="block text-[9px] text-black/70 uppercase font-sans font-bold leading-none">Jozette (English)</span>
                  <span className="font-mono text-base">303.242.2695</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 md:py-28 bg-brand-dark border-b border-brand-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-brand-crimson/10 text-brand-crimson font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 border border-brand-crimson/20">
              5-Star Colorado Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-offwhite">
              What Our Neighbors Say
            </h2>
            <div className="h-1 w-20 bg-brand-crimson mx-auto rounded mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="bg-[#141414] border border-brand-charcoal rounded-2xl p-6 sm:p-8 hover:bg-brand-charcoal/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-offwhite">
                      {review.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {review.location}
                    </p>
                  </div>
                  <span className="bg-brand-crimson/10 text-brand-crimson text-xs font-mono font-bold uppercase px-2.5 py-1 rounded border border-brand-crimson/20">
                    {review.serviceType}
                  </span>
                </div>

                <div className="flex gap-1 text-brand-amber-end mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-amber-end text-brand-amber-end" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed font-sans">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 bg-[#121212] border-b border-brand-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-extrabold text-brand-offwhite mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm">
              Coordinating a clean or haul with L&amp;J Prestige is easy. Read our quick details.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-brand-dark/90 border border-brand-charcoal rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-base text-brand-offwhite hover:text-brand-amber-start transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {faqOpen === idx ? (
                    <ChevronUp className="w-5 h-5 text-brand-crimson flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-amber-end flex-shrink-0" />
                  )}
                </button>
                
                {faqOpen === idx && (
                  <div className="p-5 pt-0 border-t border-brand-charcoal/50 text-gray-400 text-sm leading-relaxed font-sans animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form + Direct Contact Information */}
      <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
        <SparkleBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Call Cards & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <span className="text-xs font-mono font-bold text-brand-crimson uppercase tracking-widest block mb-1">Colorado Base Operations</span>
                
                <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-offwhite leading-tight mb-4">
                  Get Your <span className="text-brand-crimson">Free Estimate</span> Today
                </h2>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  No hidden fees, no franchise upcharges. Reach our founders directly. Letty is ready to coordinate in Spanish, and Jozette is available around the clock to organize estimates.
                </p>

                <div className="space-y-4">
                  
                  {/* Letty Card */}
                  <div className="bg-[#121212] border-l-4 border-brand-crimson border-y border-r border-brand-charcoal p-5 rounded-r-xl relative group hover:bg-[#151515] transition-colors">
                    <span className="absolute top-2 right-4 text-[10px] font-mono font-extrabold text-brand-crimson tracking-widest uppercase bg-brand-crimson/10 px-2 py-0.5 rounded border border-brand-crimson/20">
                      Hablo Español
                    </span>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Direct Co-Founder</p>
                    <h4 className="text-lg font-display font-black text-brand-offwhite">Letty</h4>
                    <p className="text-xs text-gray-400 mb-3">Residential, Preschool, &amp; Daycare Booking Specialist</p>
                    <a
                      href="tel:7192501717"
                      className="inline-flex items-center gap-2 text-brand-amber-start group-hover:text-brand-amber-end font-mono text-lg font-black tracking-wider hover:underline"
                    >
                      <Phone className="w-4.5 h-4.5 animate-pulse" />
                      719.250.1717
                    </a>
                  </div>

                  {/* Jozette Card */}
                  <div className="bg-[#121212] border-l-4 border-brand-amber-start border-y border-r border-brand-charcoal p-5 rounded-r-xl relative group hover:bg-[#151515] transition-colors">
                    <span className="absolute top-2 right-4 text-[10px] font-mono font-extrabold text-brand-amber-end tracking-widest uppercase bg-brand-amber-start/10 px-2 py-0.5 rounded border border-brand-amber-start/20">
                      Co-Founder
                    </span>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Direct Co-Founder</p>
                    <h4 className="text-lg font-display font-black text-brand-offwhite">Jozette</h4>
                    <p className="text-xs text-gray-400 mb-3">Residential, Airbnb, &amp; Junk Hauling Supervisor</p>
                    <a
                      href="tel:3032422695"
                      className="inline-flex items-center gap-2 text-brand-amber-start group-hover:text-brand-amber-end font-mono text-lg font-black tracking-wider hover:underline"
                    >
                      <Phone className="w-4.5 h-4.5" />
                      303-242-2695
                    </a>
                  </div>

                </div>
              </div>

              {/* Service Assurance Stamp */}
              <div className="p-4 bg-brand-charcoal/30 border border-brand-charcoal rounded-xl flex items-center gap-4">
                <div className="p-2.5 bg-brand-crimson/10 rounded-lg text-brand-crimson">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm text-[#FFF]">Fully Insured &amp; Certified</h5>
                  <p className="text-xs text-gray-500">Daycare approved child-safe disinfectants only.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Estimate Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#121212] border border-brand-charcoal rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
                
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-offwhite mb-2">
                  Send Booking or Price Beat Request
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 mb-6">
                  Fill in your project specifications. Our founders will review your job details and contact you to lock in your estimate.
                </p>

                {/* Status Notice Display */}
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
                      <p className="font-bold">{status.type === "success" ? "Request Submitted Successfully!" : "Submission Issue"}</p>
                      <p className="text-xs mt-1 leading-relaxed">{status.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Your Name <span className="text-brand-crimson">*</span></label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Elena Ramirez"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-3 text-brand-offwhite text-sm focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Phone Number <span className="text-brand-crimson">*</span></label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 719.250.1717"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-3 text-brand-offwhite text-sm focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Email Address</label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        placeholder="e.g. client@colorado.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-3 text-brand-offwhite text-sm focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="service-type-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Service Type <span className="text-brand-crimson">*</span></label>
                      <select
                        id="service-type-input"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-3 text-brand-offwhite text-sm focus:outline-none transition-all cursor-pointer"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      {["Phone Call", "Text Message", "Email"].map((method) => (
                        <label key={method} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleInputChange}
                            className="text-brand-crimson accent-brand-crimson focus:ring-brand-crimson"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Message / Job Size / Competitor Price <span className="text-brand-crimson">*</span></label>
                    <textarea
                      id="message-input"
                      name="message"
                      required
                      rows={4}
                      placeholder="Give us information about your space or describe what competitor's rate we are beating! (e.g., Daycare square footage, Airbnb frequency, volume of junk, etc.)"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-3 text-brand-offwhite text-sm focus:outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    id="submit-estimate-form"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber-start to-brand-amber-end hover:brightness-110 text-black py-4 rounded-xl font-display font-black uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-black" />
                        <span>Lock In My Estimate</span>
                      </>
                    )}
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark pt-16 pb-24 md:pb-12 border-t border-brand-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-brand-charcoal pb-12">
            
            {/* Column 1: Logo & Brief */}
            <div className="md:col-span-5 space-y-4">
              <Logo className="h-16 w-auto" glow={true} />
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Denver, Castle Rock, Pueblo, and Colorado Springs premium sanitation and haul standard. Fully insured, child and pet-friendly. We Beat Any Competitor Quote!
              </p>

              <div className="flex gap-4 text-xs font-mono text-gray-400">
                <span>© {new Date().getFullYear()} L&amp;J Prestige.</span>
                <span>All rights reserved.</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3">
              <h4 className="font-display font-extrabold text-sm text-[#FFF] uppercase tracking-widest mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-brand-amber-start transition-colors">Preschool &amp; Daycare Clean</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-amber-start transition-colors">Airbnb Turnover Staging</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-amber-start transition-colors">Residential Custom Detail</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-amber-start transition-colors">Junk Removal &amp; Purge</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contacts */}
            <div className="md:col-span-4 spacing-y-4">
              <h4 className="font-display font-extrabold text-sm text-[#FFF] uppercase tracking-widest mb-4">
                Colorado Service Lines
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-crimson mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold">LETTY SILVA (Habla Español)</p>
                    <a href="tel:7192501717" className="font-mono text-sm text-[#FFF] hover:text-brand-amber-start font-bold">
                      719.250.1717
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-amber-start mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold">JOZETTE (English Service)</p>
                    <a href="tel:3032422695" className="font-mono text-sm text-[#FFF] hover:text-brand-amber-start font-bold">
                      303.242.2695
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>Colorado Department of Early Childhood Compliant • Fully Insured Operating Crews</p>
            <p className="text-[10px] uppercase tracking-widest">
              Sparkle Decoration Style Logo Aesthetic Verified
            </p>
          </div>

        </div>
      </footer>

      {/* Floating Free Estimate Sticky Button bottom-right in Amber */}
      <button
        id="floating-estimate-button"
        onClick={() => {
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-gradient-to-r from-brand-amber-start to-brand-amber-end hover:brightness-110 text-black font-display font-extrabold text-sm px-5 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#FFD08A]"
        title="Get A Free Estimate"
      >
        <Sparkles className="w-5 h-5 fill-black text-black animate-spin-slow" />
        <span>Free Estimate</span>
      </button>

      {/* Quick service click estimate modal popup */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#121212] border border-brand-charcoal w-full max-w-xl rounded-2xl p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white bg-brand-charcoal hover:bg-brand-crimson rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <h3 className="text-xl font-display font-extrabold text-brand-offwhite mb-2">
              Estimate for <span className="text-brand-amber-start">
                {servicesData.find((s) => s.id === formData.serviceType)?.title || "L&J Prestige Services"}
              </span>
            </h3>
            
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              We beat any competitor price. Let us know a few details, and Letty or Jozette will coordinate your quote instantly.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Elena Ramirez"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-2.5 text-sm my-1 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="719.250.1717"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-2.5 text-sm my-1 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Message / Project details</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Daycare size, Airbnb checklist, quantity of junk to haul, or rival quote etc."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#171717] border border-brand-charcoal focus:border-brand-crimson rounded-lg px-4 py-2.5 text-sm my-1 text-white focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber-start to-brand-amber-end text-black py-3 rounded-xl font-display font-bold text-sm tracking-wide uppercase transition-all hover:opacity-90 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Send Estimate Request</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
