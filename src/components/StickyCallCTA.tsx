import React from "react";
import { Phone } from "lucide-react";

export default function StickyCallCTA() {
  return (
    <a
      href="tel:7192501717"
      className="fixed bottom-6 right-6 z-40 bg-brand-crimson hover:bg-brand-crimson-dark text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-red-900/50"
    >
      <Phone className="w-4 h-4" />
      <span>Free Estimate</span>
    </a>
  );
}
