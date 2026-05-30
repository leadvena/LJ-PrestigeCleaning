import React from "react";
import { Star, Phone } from "lucide-react";
import { reviewsData } from "../data";

export default function ReviewsSection() {
  return (
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
  );
}
