import React, { useState } from "react";
import { faqsData } from "../data";

export default function FaqSection() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg scroll-mt-28">
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
  );
}
