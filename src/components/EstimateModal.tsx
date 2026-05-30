import React from "react";
import { X, Loader2 } from "lucide-react";
import { EstimateFormData } from "../types";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: EstimateFormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleFormSubmit: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
  serviceTitle: string;
}

export default function EstimateModal({
  isOpen,
  onClose,
  formData,
  handleInputChange,
  handleFormSubmit,
  loading,
  serviceTitle
}: EstimateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-brand-surface border border-brand-border w-full max-w-lg rounded-[24px] p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-brand-grey hover:text-white bg-brand-surface-2 hover:bg-brand-crimson rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xl font-bold text-white mb-2">
          Estimate for <span className="text-brand-crimson">{serviceTitle}</span>
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
            className="btn-crimson w-full py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : <span>Send Estimate Request</span>}
          </button>
        </form>
      </div>
    </div>
  );
}
