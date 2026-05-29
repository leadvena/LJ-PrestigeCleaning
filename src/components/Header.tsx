import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);

      const sections = ["home", "services", "about", "faq", "contact"];
      const scrollPos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Announcement Strip ── */}
      <div
        style={{ background: "rgba(179,0,0,0.08)", borderBottom: "1px solid rgba(179,0,0,0.15)" }}
        className="fixed top-0 left-0 right-0 z-[60] py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-[10px] font-sans tracking-[0.15em] font-semibold uppercase">
          <span className="flex items-center gap-1.5 text-brand-crimson">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson animate-pulse-glow"></span>
            Small Family-Owned
          </span>
          <span className="text-brand-grey-dark hidden sm:inline">|</span>
          <span className="text-brand-offwhite hidden sm:inline">100% Licensed &amp; Insured</span>
          <span className="text-brand-grey-dark hidden md:inline">|</span>
          <span className="text-brand-grey hidden md:inline">Colorado Springs · Denver · Pueblo · Castle Rock</span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={`fixed top-[33px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "nav-glass px-5 py-3"
                : "bg-transparent px-0 py-2"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2.5 cursor-pointer group"
              aria-label="L&J Prestige Home"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#121212] border border-brand-border relative flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-brand-crimson/40 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                {/* Dynamic radial glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(179,0,0,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                {/* Logo placed behind the gradient overlay */}
                <Logo variant="header" className="w-9 h-9 md:w-10 md:h-10 z-0 transition-transform duration-300 group-hover:scale-105" />

                {/* Subtle gradient at the bottom 1/3 (sits on top of the logo) */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#B30000]/30 via-[#B30000]/12 to-transparent pointer-events-none z-10"></div>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="cursor-pointer"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: activeSection === id ? "#B30000" : "#888",
                    transition: "color 200ms ease",
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                  onMouseEnter={e => { if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = "#F5F5F5"; }}
                  onMouseLeave={e => { if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = "#888"; }}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:7192501717"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 9999,
                  border: "1px solid rgba(179,0,0,0.35)",
                  background: "rgba(179,0,0,0.08)",
                  color: "#F5F5F5",
                  textDecoration: "none",
                  transition: "all 200ms ease",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                }}
                onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, { borderColor: "#B30000", background: "rgba(179,0,0,0.18)" })}
                onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, { borderColor: "rgba(179,0,0,0.35)", background: "rgba(179,0,0,0.08)" })}
              >
                <Phone style={{ width: 13, height: 13, color: "#B30000" }} />
                <span>719.250.1717</span>
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-crimson cursor-pointer"
                style={{
                  padding: "9px 20px",
                  borderRadius: 9999,
                  fontFamily: "Outfit, sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  border: "none",
                }}
              >
                Free Estimate
              </button>
            </div>

            {/* Mobile Buttons */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:7192501717"
                style={{
                  padding: "8px 14px",
                  borderRadius: 9999,
                  background: "#B30000",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "Outfit, sans-serif",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Phone style={{ width: 13, height: 13 }} />
                Call
              </a>
              <button
                id="mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  border: "1px solid #2a2a2a",
                  background: "#111",
                  color: "#F5F5F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 200ms ease",
                }}
              >
                {isOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          style={{
            position: "fixed",
            inset: "0",
            top: "33px",
            background: "rgba(5,5,5,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            zIndex: 40,
            transition: "opacity 300ms ease, transform 300ms cubic-bezier(0.16,1,0.3,1)",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-8px)",
            pointerEvents: isOpen ? "all" : "none",
          }}
          className="md:hidden"
        >
          <div className="flex flex-col h-full pt-20 px-6 pb-10 gap-2">
            {navLinks.map(({ id, label }, i) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="cursor-pointer text-left"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: activeSection === id ? "#B30000" : "#F5F5F5",
                  background: "none",
                  border: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid #1a1a1a",
                  display: "block",
                  width: "100%",
                  animation: isOpen ? `fadeUp 0.5s ${i * 60}ms both` : "none",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={e => { if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = "#B30000"; }}
                onMouseLeave={e => { if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = "#F5F5F5"; }}
              >
                {label}
              </button>
            ))}

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <a
                href="tel:7192501717"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "#B30000",
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  transition: "background 200ms ease",
                  activeOpacity: 0.9,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Phone style={{ width: 18, height: 18 }} />
                  Call Letty (Español)
                </span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14 }}>
                  719.250.1717
                </span>
              </a>
              <a
                href="tel:3032422695"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: 12,
                  border: "1px solid #2a2a2a",
                  background: "#111",
                  color: "#F5F5F5",
                  textDecoration: "none",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Phone style={{ width: 18, height: 18, color: "#888" }} />
                  Call Jozette (English)
                </span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14 }}>
                  303.242.2695
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
