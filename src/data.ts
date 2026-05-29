import { Service, TrustBadge, Review } from "./types";
import daycareCleanImg from "./assets/images/daycare_clean_1780019670393.png";
import airbnbTurnoverImg from "./assets/images/airbnb_turnover_1780019691921.png";
import residentialCleanImg from "./assets/images/residential_clean_1780019711990.png";
import junkRemovalImg from "./assets/images/junk_removal_1780019730037.png";

export const servicesData: Service[] = [
  {
    id: "daycare-cleaning",
    title: "Preschool & Daycare Cleaning",
    description: "Ultra-precise disinfection using certified child-safe products. Health-compliant protection for Colorado's youngest learners.",
    details: [
      "100% child-safe, non-toxic sanitizing agents",
      "Deep disinfection of restrooms, toys, and touchpoints",
      "Saves preschools from respiratory germs and seasonal spread",
      "Fully compliant with Colorado Department of Human Services rules",
      "HEPA-filter air dusting & carpet sterilization"
    ],
    iconName: "Baby",
    imageUrl: daycareCleanImg
  },
  {
    id: "airbnb-cleaning",
    title: "Airbnb Turnover Cleaning",
    description: "Five-star rapid cleaning standard designed to elevate guest reviews, secure Superhost status, and guarantee fast check-in turnaround.",
    details: [
      "Rapid checkout reset same-day coordination",
      "Linens, towels, and sheets washed and premium staged",
      "Toiletries, coffee, and welcome amenities restocked",
      "Detailed damage checks with instant photographic updates",
      "Odor removal and sparkling high-end detail inspection"
    ],
    iconName: "HomeStar",
    imageUrl: airbnbTurnoverImg
  },
  {
    id: "residential-cleaning",
    title: "Residential Cleaning",
    description: "Premium house detailing tailored around your lifestyle. Spotless results from baseboards to ceiling fans with a tailored schedule.",
    details: [
      "Kitchen appliances, stoves, countertops detailed shine",
      "Showers, tubs, and bathroom grout meticulously scrubbed",
      "Dusting of intricate fixtures, blinds, and vents",
      "Vacuuming, floor wood steaming, and micro-fiber polishing",
      "Custom routine maid maintenance (Weekly, Bi-weekly, Monthly)"
    ],
    iconName: "Sparkles",
    imageUrl: residentialCleanImg
  },
  {
    id: "junk-removal",
    title: "Commercial & Residential Junk Removal",
    description: "Prompt, heavy-duty hauling that clears clutter, handles cleanouts, and manages debris. Fully insured crews beats franchise pricing.",
    details: [
      "Whole-estate cleanouts, garage and basement purging",
      "Construction debris, yard remnants and timber clearance",
      "Unwanted furniture, appliance and electronics hauling",
      "Environmentally conscious sorting (Donate, Recycle, Haul)",
      "We Beat Any Price! Bring us any competitor estimate"
    ],
    iconName: "Truck",
    imageUrl: junkRemovalImg
  }
];

export const trustBadges: TrustBadge[] = [
  {
    id: "beat-any-price",
    title: "We Beat Any Price",
    description: "Show us any written competitor estimate based in Colorado. We will beat it—Guaranteed. Free estimates always.",
    iconName: "TrendingDown"
  },
  {
    id: "safe-products",
    title: "Child-Safe Eco Products",
    description: "Specially formulated pet-friendly and child-safe disinfectants that sanitise with zero toxic trace chemical odors.",
    iconName: "ShieldCheck"
  },
  {
    id: "bilingual-service",
    title: "Bilingual Service (Español)",
    description: "Direct translation-free service. Letty habla Español para coordinar cada detalle de forma clara y directa.",
    iconName: "Languages"
  }
];

export const reviewsData: Review[] = [
  {
    id: "review-1",
    name: "Gabriela S.",
    rating: 5,
    serviceType: "Preschool Cleaning",
    comment: "Letty and Jozette are unbelievable! Our preschool in Pueblo is spotless, and parents have commented on how fresh it smells. They use certified safe products, which makes a huge difference for us.",
    location: "Pueblo, CO"
  },
  {
    id: "review-2",
    name: "Marcus K.",
    rating: 5,
    serviceType: "Airbnb Turnover",
    comment: "Our Colorado Springs Airbnb ratings increased to straight 5 stars for cleanliness since L&J took over turnovers. They are incredibly reliable, always respond instantly, and take care of checking the sheets.",
    location: "Colorado Springs, CO"
  },
  {
    id: "review-3",
    name: "Elena R.",
    rating: 5,
    serviceType: "Junk Removal & Basement Cleanout",
    comment: "Outstanding price! We were quoted almost double by a national franchise. Jozette and the crew came, swept the garage, loaded their truck, and left it ready in 2 hours. Highly recommended!",
    location: "Denver Metro, CO"
  },
  {
    id: "review-4",
    name: "Robert D.",
    rating: 5,
    serviceType: "Weekly House Cleaning",
    comment: "A high-end detailing brand for homes is the perfect description. Everything was aligned, baseboards shine, and the scent is premium. Free estimate was exact and Letty answered in Spanish for our family.",
    location: "Castle Rock, CO"
  }
];

export const faqsData = [
  {
    question: "Do you offer free estimates or on-site inspections?",
    answer: "Absolutely! We provide virtual estimates via phone/photos and direct on-site physical evaluations throughout Colorado for free, with no obligation. Contact Letty or Jozette anytime."
  },
  {
    question: "How do you guarantee your 'We Beat Any Price' tagline?",
    answer: "Present any active cleaning or junk removal quote from a licensed competitor in Colorado. We review the scope and beat their price safely while maintaining our premium standard of quality."
  },
  {
    question: "Are your cleaning agents child and pet safe?",
    answer: "Yes, especially for Daycare and Preschool turnover clients. We prioritize non-toxic, eco-friendly disinfectants that are free of harsh chemical fumes and residue, protecting kids and animals."
  },
  {
    question: "What geographical areas in Colorado do you cover?",
    answer: "We cover the Front Range and surrounding regions, including Denver Metro, Castle Rock, Pueblo, Colorado Springs, and neighboring mountain residential hubs."
  }
];
