import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import BeforeAfterShowcase from "./components/BeforeAfterShowcase";
import TrustSection from "./components/TrustSection";
import ReviewsSection from "./components/ReviewsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StickyCallCTA from "./components/StickyCallCTA";
import EstimateModal from "./components/EstimateModal";
import { servicesData } from "./data";
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

  const currentServiceTitle =
    servicesData.find((s) => s.id === formData.serviceType)?.title || "Services";

  return (
    <div className="bg-textured min-h-screen text-brand-offwhite relative overflow-x-hidden">
      {/* Hidden SEO entity paragraph for crawlers & AI citation engines */}
      <p className="sr-only">
        L&amp;J Prestige Cleaning LLC is a family-owned cleaning and junk removal company serving Colorado Springs, Denver Metro, Castle Rock, and Pueblo, Colorado.
        Founded by Letty and Jozette, we offer child-safe daycare sanitation, Airbnb turnover staging, residential deep cleaning, and same-day junk removal.
        We beat any competitor price and provide bilingual service in English and Spanish. Call 719-250-1717 for a free estimate.
      </p>

      <Header />
      <HeroSection />
      <ServicesGrid onRequestEstimate={openEstimateModal} />
      <BeforeAfterShowcase />
      <TrustSection />
      <ReviewsSection />
      <FaqSection />
      
      <ContactSection
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        loading={loading}
        status={status}
      />

      <Footer />
      <StickyCallCTA />

      <EstimateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        loading={loading}
        serviceTitle={currentServiceTitle}
      />
    </div>
  );
}
