import { Service, TrustBadge, Review } from "./types";

export const servicesData: Service[] = [
  {
    id: "daycare-cleaning",
    title: "Preschool & Daycare Cleaning",
    description: "Ultra-precise sanitization using certified child-safe products. Fully compliant with Colorado Department of Early Childhood rules.",
    details: [
      "100% child-safe, non-toxic sanitizing agents",
      "Deep disinfection of toys, touchpoints, and restrooms",
      "HEPA-filter air dusting & carpet sterilization",
      "Saves preschools from germs and seasonal spread"
    ],
    iconName: "Baby",
    imageUrl: "/images/daycare_clean_1780019670393.png"
  },
  {
    id: "airbnb-cleaning",
    title: "Airbnb Turnover Cleaning",
    description: "Five-star rapid cleaning standard designed to elevate guest reviews, secure Superhost status, and guarantee fast turnaround resets.",
    details: [
      "Rapid checkout reset same-day coordination",
      "Linens, towels, and sheets washed and premium staged",
      "Coffee, toiletries, and amenities restocked",
      "Damage checks with instant photographic updates"
    ],
    iconName: "HomeStar",
    imageUrl: "/images/airbnb_turnover_1780019691921.png"
  },
  {
    id: "residential-cleaning",
    title: "Residential Cleaning & Maid Service",
    description: "Premium house detailing and routine maid services. Spotless results from baseboards, windows, range hoods to ceiling fans.",
    details: [
      "Kitchen appliances, stoves, countertops detailed shine",
      "Showers, tubs, bathroom grout scrubbed clean",
      "Dusting of intricate fixtures, vents, and blinds",
      "Weekly, bi-weekly, or monthly recurring schedules"
    ],
    iconName: "Sparkles",
    imageUrl: "/images/residential_clean_1780019711990.png"
  },
  {
    id: "junk-removal",
    title: "Junk Removal & Debris Hauling",
    description: "Prompt, heavy-duty hauling of waste, junk, building materials, and estate cleanouts. Fully licensed crews beating franchise prices.",
    details: [
      "Whole-estate cleanouts, garage and basement purging",
      "Construction debris, yard remnants and timber clearance",
      "Unwanted furniture, appliance and electronics hauling",
      "Eco-conscious sorting: donate, recycle, and haul"
    ],
    iconName: "Truck",
    imageUrl: "/images/junk_removal_1780019730037.png"
  }
];

export const specialtyServices = [
  {
    id: "post-construction",
    title: "Post-Construction Cleanup",
    description: "Heavy-duty post-renovation detailing. We scrub walls, ceilings, acoustic tiles, range hoods, and remove fine dust and construction adhesives so your space is ready for immediate occupancy.",
    details: [
      "Acoustic ceiling & wall tile clean-up",
      "Adhesives, paint splatters, and heavy dust scrubbing",
      "Fixtures, baseboards, and window frames polished"
    ]
  },
  {
    id: "powerwashing",
    title: "Premium Powerwashing",
    description: "High-pressure wash for commercial and residential exterior surfaces. We restore driveways, brickwork, walkways, and building siding to peak aesthetic condition.",
    details: [
      "Commercial exterior surfaces powerwashing",
      "Residential brick, siding, and deck restoration",
      "Oil stain, mold, and grime removal"
    ]
  },
  {
    id: "chimney-stove",
    title: "Stove & Chimney Care",
    description: "Meticulous cleaning and safety inspection for fireplaces, wood-burning stoves, pellet stoves, and oil-fired chimneys. Keep your home safe and warm during Colorado winters.",
    details: [
      "Clean & inspect wood burning or pellet stoves",
      "Oil-fired chimney cleaning & inspection service",
      "Fireplace cleaning and safety checks"
    ]
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
    id: "emergency-services",
    title: "Emergency Services Offered",
    description: "Unexpected messes or urgent cleanouts? We offer prompt, responsive emergency services to keep your space safe.",
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
    question: "Do you offer free estimates for cleaning or junk removal?",
    answer: "Yes, L&J PRESTIGE CLEANING LLC offers free project estimates for all our services, including residential house cleaning, post-construction cleanup, powerwashing, and debris hauling. Call Letty at 719-250-1717 or fill out our online form to request your estimate."
  },
  {
    question: "What are your service hours? Do you offer emergency services?",
    answer: "Yes! L&J PRESTIGE CLEANING LLC is open all day, 7 days a week (Sunday through Saturday). We offer dedicated emergency services for urgent clean-ups, same-day move-out cleanings, or fast debris removal needs across the Colorado Front Range."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. L&J Prestige Cleaning LLC is a fully licensed LLC in Colorado, and our crews operate with comprehensive liability insurance coverage. We prioritize safety and child-safe environments on every single job."
  },
  {
    question: "What makes your cleaning safe for children and daycares?",
    answer: "We use child-safe and pet-friendly cleaning products that effectively sanitize without leaving toxic residues or harsh chemical odors. This is perfect for preschools, daycare centers, and family homes with young children."
  },
  {
    question: "What is your primary office location and service area?",
    answer: "Our home office is located at 7324 W Ohio Ave Apt 204, Lakewood, CO 80226. We proudly serve the entire Colorado Front Range, including Lakewood, Denver Metro, Castle Rock, Pueblo, Colorado Springs, and surrounding communities."
  },
  {
    question: "Do you clean fireplaces, wood stoves, and chimneys?",
    answer: "Yes! We specialize in cleaning and inspecting fireplaces, wood-burning stoves, pellet stoves, oil-fired chimneys, and stove pipes. We ensure they are soot-free and safe to operate during cold Colorado winters."
  },
  {
    question: "What is the 'We Beat Any Price' guarantee?",
    answer: "Bring us any written estimate from a licensed competitor in Colorado. We will match or beat the quote while delivering our co-founder-backed, high-end quality standard."
  },
  {
    question: "Do you handle post-construction and renovation cleanups?",
    answer: "Absolutely. We offer complete post-construction cleanup. This includes fine dust elimination, paint and adhesive removal, wall and ceiling washing, acoustic tile cleaning, and debris removal to make the property ready for occupancy."
  }
];
