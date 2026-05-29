import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on proximity
      const sections = ["home", "services", "about", "faq", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md pb-1.5 border-b border-brand-charcoal shadow-xl"
          : "bg-gradient-to-b from-brand-dark via-brand-dark/40 to-transparent pb-2"
      }`}
    >
      {/* Elegant Deluxe Announcement Strip */}
      <div className="bg-black/80 border-b border-brand-amber-start/10 py-1.5 px-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[9px] sm:text-[10px] md:text-[11px] font-sans tracking-[0.2em] font-medium text-brand-amber-start uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson animate-pulse"></span>
            Small Family-Owned Business
          </span>
          <span className="text-brand-charcoal select-none hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-brand-offwhite">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber-end fill-brand-amber-end animate-pulse" />
            100% Licensed &amp; Insured
          </span>
          <span className="text-brand-charcoal select-none hidden md:inline">•</span>
          <span className="text-gray-400 hidden md:inline">
            Colorado Springs • Denver Metro • Pueblo
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="flex items-center gap-2">
              <Logo className="h-10 w-auto md:h-12" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-display text-sm font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                activeSection === "home" ? "text-brand-crimson" : "text-brand-offwhite hover:text-brand-amber-start"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-display text-sm font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                activeSection === "services" ? "text-brand-crimson" : "text-brand-offwhite hover:text-brand-amber-start"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-display text-sm font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                activeSection === "about" ? "text-brand-crimson" : "text-brand-offwhite hover:text-brand-amber-start"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-display text-sm font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                activeSection === "contact" ? "text-brand-crimson" : "text-brand-offwhite hover:text-brand-amber-start"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Call-to-Action Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:7192501717"
              className="flex items-center gap-2 bg-brand-crimson/10 border border-brand-crimson/30 hover:bg-brand-crimson/25 px-4 py-2 rounded-lg text-brand-offwhite text-sm font-display font-medium tracking-wide transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-brand-crimson" />
              <div className="text-left font-mono">
                <span className="block text-[10px] text-gray-400 uppercase font-sans font-bold leading-none">Letty (Español)</span>
                719.250.1717
              </div>
            </a>
            <a
              href="tel:3032422695"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-amber-start/10 to-brand-amber-end/10 border border-brand-amber-start/30 hover:from-brand-amber-start/20 hover:to-brand-amber-end/20 px-4 py-2 rounded-lg text-brand-offwhite text-sm font-display font-medium tracking-wide transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-brand-amber-start" />
              <div className="text-left font-mono">
                <span className="block text-[10px] text-gray-400 uppercase font-sans font-bold leading-none">Jozette</span>
                303.242.2695
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:7192501717"
              className="p-2.5 rounded-full bg-brand-crimson hover:bg-brand-crimson/80 text-brand-offwhite transition-colors"
              title="Call Letty"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg border border-brand-charcoal text-white hover:bg-brand-charcoal hover:text-brand-amber-start transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Polished overlay) */}
      <div
        className={`fixed inset-0 top-[102px] bg-brand-dark/98 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden border-t border-brand-charcoal ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
          <div className="space-y-4">
            {/* Tagline */}
            <div className="flex items-center gap-2 border-b border-brand-charcoal pb-4 mb-4">
              <Sparkles className="w-5 h-5 text-brand-amber-end" />
              <p className="text-xs text-brand-amber-start font-bold uppercase tracking-wider">
                We Beat Any Price • Free Estimates!
              </p>
            </div>

            <button
              onClick={() => scrollToSection("home")}
              className={`block w-full text-left py-3 px-4 rounded-xl font-display text-lg font-bold uppercase tracking-wide transition-colors ${
                activeSection === "home" ? "bg-brand-crimson/10 text-brand-crimson border-l-4 border-brand-crimson" : "text-brand-offwhite hover:bg-brand-charcoal/50"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`block w-full text-left py-3 px-4 rounded-xl font-display text-lg font-bold uppercase tracking-wide transition-colors ${
                activeSection === "services" ? "bg-brand-crimson/10 text-brand-crimson border-l-4 border-brand-crimson" : "text-brand-offwhite hover:bg-brand-charcoal/50"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`block w-full text-left py-3 px-4 rounded-xl font-display text-lg font-bold uppercase tracking-wide transition-colors ${
                activeSection === "about" ? "bg-brand-crimson/10 text-brand-crimson border-l-4 border-brand-crimson" : "text-brand-offwhite hover:bg-brand-charcoal/50"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`block w-full text-left py-3 px-4 rounded-xl font-display text-lg font-bold uppercase tracking-wide transition-colors ${
                activeSection === "contact" ? "bg-brand-crimson/10 text-brand-crimson border-l-4 border-brand-crimson" : "text-brand-offwhite hover:bg-brand-charcoal/50"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Quick Contacts inside Hamburger Menu */}
          <div className="border-t border-brand-charcoal pt-6 pb-20 space-y-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest text-center mb-2">Speak Directly With Us</h4>
            
            <a
              href="tel:7192501717"
              className="flex items-center justify-between bg-brand-crimson px-5 py-4 rounded-xl text-white font-display font-black text-lg transition-all shadow-md active:scale-95"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Call Letty <span className="text-xs font-normal opacity-90 block">Hablo Español</span></span>
              </span>
              <span className="font-mono text-base tracking-wider text-black bg-white/90 px-2 py-0.5 rounded">719.250.1717</span>
            </a>

            <a
              href="tel:3032422695"
              className="flex items-center justify-between bg-gradient-to-r from-brand-amber-start to-brand-amber-end px-5 py-4 rounded-xl text-black font-display font-black text-lg transition-all shadow-md active:scale-95"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Call Jozette <span className="text-xs font-normal opacity-70 block font-sans">English Service</span></span>
              </span>
              <span className="font-mono text-base tracking-wider text-black bg-white/70 px-2 py-0.5 rounded">303.242.2695</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
