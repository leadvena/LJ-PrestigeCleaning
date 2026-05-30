import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-16 pb-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-brand-border pb-12">
          <div className="flex flex-col gap-2">
            <span className="font-extrabold text-xl tracking-tight text-white uppercase">L&amp;J Prestige Cleaning LLC</span>
            <p className="text-xs text-brand-grey max-w-sm">
              Colorado Springs, Denver Metro, Castle Rock &amp; Pueblo. Premium cleaning and junk removal. We beat any competitor quote.
            </p>
            <address className="text-xs text-[#444] not-italic mt-1">
              <a href="tel:7192501717" className="hover:text-brand-crimson transition-colors">719-250-1717</a>
              {" · "}
              <span>Colorado Springs, CO</span>
            </address>
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
  );
}
