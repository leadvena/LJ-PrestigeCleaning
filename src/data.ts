import { Service, TrustBadge, Review } from "./types";

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
    imageUrl: "/images/daycare_clean_1780019670393.png"
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
    imageUrl: "/images/airbnb_turnover_1780019691921.png"
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
    imageUrl: "/images/residential_clean_1780019711990.png"
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
    imageUrl: "/images/junk_removal_1780019730037.png"
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
    question: "Do you offer free estimates for cleaning or junk removal in Colorado Springs?",
    answer: "Yes! L&J Prestige Cleaning LLC provides free estimates for all cleaning and junk removal services in Colorado Springs, Denver Metro, Castle Rock, and Pueblo. Contact Letty at 719-250-1717 or submit our online form for a same-day response. No obligation, ever."
  },
  {
    question: "What is the 'We Beat Any Price' guarantee?",
    answer: "Present any active written cleaning or junk removal estimate from a licensed competitor in Colorado. We will review the scope and beat their price while maintaining our premium quality standard. This applies to Airbnb turnovers, daycare cleaning, residential cleans, and junk removal."
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer: "Absolutely. We use 100% non-toxic, eco-friendly disinfectants that are free of harsh chemical fumes and residue. Our child-safe product line is especially important for our daycare and preschool clients. All products are also pet-friendly and leave no harmful traces."
  },
  {
    question: "What cities in Colorado do you service?",
    answer: "We cover the entire Colorado Front Range including Colorado Springs, Denver Metro, Castle Rock, Pueblo, and surrounding mountain residential communities. Call 719-250-1717 to confirm availability in your specific area."
  },
  {
    question: "What types of junk do you haul away?",
    answer: "We haul almost everything — furniture, appliances, electronics, construction debris, yard waste, timber, estate cleanout items, and general household junk. We also handle full garage, basement, and attic purges. Items are sorted responsibly: donated, recycled, or hauled. We do not haul hazardous waste or chemicals."
  },
  {
    question: "Can you do same-day or next-day junk removal?",
    answer: "Yes! Same-day and next-day junk removal is available in Colorado Springs and surrounding areas based on crew availability. Call or text Jozette at 719-425-8551 and we will do our best to accommodate your timeline."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, L&J Prestige Cleaning LLC is a fully licensed LLC in Colorado and our crews operate with full insurance coverage. Our daycare cleaning services are compliant with Colorado Department of Early Childhood standards."
  },
  {
    question: "Do you offer recurring cleaning schedules?",
    answer: "Yes! We offer weekly, bi-weekly, and monthly recurring residential cleaning plans. Airbnb clients can set up automated turnover scheduling tied to their booking calendar. Recurring clients receive priority scheduling and a consistent team."
  },
  {
    question: "What makes L&J Prestige different from franchise cleaning companies?",
    answer: "L&J Prestige is family-owned and operated by Letty and Jozette — two co-founders who personally oversee every job. Unlike franchises with rotating staff and markup pricing, we offer direct co-founder accountability, bilingual service in English and Spanish, child-safe eco products, and a price-beat guarantee. No franchise markups, no shortcuts."
  },
  {
    question: "Do you offer post-construction or move-out cleaning?",
    answer: "Yes, we specialize in post-construction cleanup, renovation debris removal, and move-out deep cleaning. These services are available for both residential and commercial properties across Colorado Springs and Denver Metro."
  },
  {
    question: "Is bilingual (Spanish) service available?",
    answer: "Yes! Co-founder Letty is fully bilingual and coordinates all job details directly in Spanish. We proudly serve Colorado's Spanish-speaking communities with clear, direct communication. Letty habla Español para coordinar cada detalle."
  },
  {
    question: "How do I book an Airbnb turnover cleaning in Colorado Springs?",
    answer: "Call or text Letty at 719-250-1717 or submit our online estimate form. We sync with your Airbnb calendar, handle same-day checkout resets, wash and stage linens, restock amenities, perform damage checks, and send photographic updates after every turnover."
  }
];

