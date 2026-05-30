import React from "react";
import { Phone, ShieldCheck, CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { EstimateFormData } from "../types";

interface ContactSectionProps {
  formData: EstimateFormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleFormSubmit: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
  status: {
    type: "success" | "error" | null;
    message: string;
  };
}

export default function ContactSection({
  formData,
  handleInputChange,
  handleFormSubmit,
  loading,
  status
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg border-t border-brand-border relative scroll-mt-28">
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
                  <h4 className="text-lg font-bold text-white mt-1">Letty</h4>
                </div>
                <span className="text-[9px] font-mono bg-brand-crimson/10 border border-brand-crimson/30 text-brand-crimson px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  Hablo Español
                </span>
              </div>
              <a
                href="tel:7192501717"
                className="inline-flex items-center gap-2 mt-4 text-white hover:text-brand-crimson transition-colors font-mono text-lg font-bold"
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
                className="inline-flex items-center gap-2 mt-4 text-white hover:text-brand-crimson transition-colors font-mono text-lg font-bold"
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
                className={`p-4 rounded-xl mb-6 flex items-start gap-3 border text-sm ${status.type === "success"
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
                    <label key={method} className="flex items-center gap-2 text-xs text-brand-offwhite cursor-pointer animate-fade-in">
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
                className="btn-crimson w-full py-4 rounded-full font-bold uppercase tracking-wider transition-all disabled:opacity-50 text-sm flex items-center justify-center gap-2 cursor-pointer"
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
  );
}
