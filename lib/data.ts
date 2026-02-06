import { 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  Heart,
  Box, 
  Wind, 
  Cpu, 
  CircuitBoard, 
  Wrench, 
  Briefcase, 
  Zap, 
  Shield, 
  User 
} from "lucide-react";

// =========================================
// SPONSORSHIP DATA
// =========================================

export const SPONSOR_TIERS = [
  {
    name: "Title",
    amount: "$10,000+",
    icon: Trophy,
    benefits: [
      "Choice of logo size and placement on car",
      "Collaboration with designers on livery for car",
      "Invitation to lab and design fair",
      "Resume database access",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Platinum",
    amount: "$5,000+",
    icon: Award, 
    benefits: [
      "Extra large logo on car",
      "Invitation to lab and design fair",
      "Resume database access",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Gold",
    amount: "$3,500+",
    icon: Medal,
    benefits: [
      "Large logo on car",
      "Resume database access",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Silver",
    amount: "$2,000+",
    icon: Star,
    benefits: [
      "Medium logo on car",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Partner",
    amount: "$1,000+",
    icon: Heart,
    benefits: [
      "Small logo on car",
      "Social media promotion",
      "Featured on website",
    ],
  },
];

// =========================================
// CURRENT SPONSORS
// =========================================

export const CURRENT_SPONSORS = [
  { name: "Welsh Advisors", tier: "Title", logo: "/sponsor-logos/welshadvisors_logo.png" },
  { name: "Parker", tier: "Platinum", logo: "/sponsor-logos/parkerhannifin_logo.png" },
  { name: "Airtech", tier: "Platinum", logo: "/sponsor-logos/airtech_logo.jpg" },
  { name: "Composites One", tier: "Platinum", logo: "/sponsor-logos/compositesone_logo.png" },
  { name: "Evonik", tier: "Gold", logo: "/sponsor-logos/evonik_logo.png" },
  { name: "PEC Tools", tier: "Silver", logo: "/sponsor-logos/pectools_logo.jpeg" },
  { name: "Osh Cut", tier: "Silver", logo: "/sponsor-logos/oshcut_logo.png" },
  { name: "ACP Composites", tier: "Silver", logo: "/sponsor-logos/acpcomposites_logo.png" },
  { name: "Coastal Enterprises", tier: "Silver", logo: "/sponsor-logos/coastalenterprisesprecisionboard_logo.png" },
  { name: "Textile Products Inc.", tier: "Silver", logo: "/sponsor-logos/textileproductsinc_logo.png" },
  { name: "Perficient", tier: "Partner", logo: "/sponsor-logos/perficient_logo.jpg" },
  { name: "Murata Electronics", tier: "Partner", logo: "/sponsor-logos/murataelectronics_logo.png" },
  { name: "SendCutSend", tier: "Partner", logo: "/sponsor-logos/sendcutsend_logo.png" },
  { name: "Performance Composites", tier: "Partner", logo: "/sponsor-logos/performancecomposites_logo.png" },
];

// =========================================
// SUBTEAMS & MEMBERS DATA
// =========================================

export const SUBTEAMS = [
  {
    id: "accumulator",
    name: "Accumulator",
    description: "The Accumulator subteam develops the physical housing, thermal solution, and the wiring for the energy storage system (ESS) that powers the vehicle from the cell level up. This team also designs and manufactures a specialized hand cart to lift the battery into the chassis of the vehicle.",
    groupImage: "/subteam-photos/accumulator_photo_crop.jpg",
    logo: "/subteam-logos/accumulator_patch.png",
    icon: Box,
    members: [
      { 
        name: "Camryn Wright", 
        role: "Chief Engineer, Accumulator Lead", 
        image: "/headshots/camryn_wright.jpg",
        linkedin: "http://www.linkedin.com/in/camryn-wright/"
      },
      { 
        name: "Natalie Perrochon", 
        role: "Member", 
        image: "/headshots/natalie_perrochon.png",
        linkedin: "" 
      },
    ]
  },
  {
    id: "aerodynamics",
    name: "Aerodynamics",
    description: "The Aerodynamics subteam is responsible for the designing, manufacturing, testing and documentation of the body for the UCI electric racecar. The subteam is also responsible for the aerodynamic behavior of the vehicle, performing CFD analysis using programs such as SolidWorks and Flow Simulation.",
    groupImage: "/subteam-photos/aero_photo.jpg",
    logo: "/subteam-logos/aero_patch.png",
    icon: Wind,
    members: [
      { 
        name: "Alexander Sadigursky", 
        role: "Aerodynamics Lead", 
        image: "/headshots/alexander_sadigursky.jpg", 
        linkedin: "https://www.linkedin.com/in/sadigursky/" 
      },
      { 
        name: "Dylan Richcreek", 
        role: "Aerodynamics Co-Lead", 
        image: "/headshots/dylan_gene_richcreek.jpg",
        linkedin: "https://www.linkedin.com/in/dylan-richcreek-3a40062a6/"
      },
      { 
        name: "Manav Anand", 
        role: "Senior Aerobody Engineer", 
        image: "/headshots/manav_anand.jpg",
        linkedin: "https://www.linkedin.com/in/manand222/"
      },
      { 
        name: "Sergei Litovchenko", 
        role: "Lead Aerodynamics Engineer", 
        image: "/headshots/sergei_litovchenko.jpg",
        linkedin: "https://www.linkedin.com/in/sergeil/"
      },
    ]
  },
  {
    id: "chassis",
    name: "Chassis",
    description: "The Chassis subteam's mission is to engineer a design that balances minimal weight with exceptional structural integrity, ensuring precise component mounting through strategic triangulation. The chassis is the foundational structural framework of the vehicle.",
    groupImage: "/subteam-photos/dynamics_photo.jpg",
    logo: "/subteam-logos/chassis_patch.png",
    icon: Wrench,
    members: [
      { 
        name: "Andrew Chao", 
        role: "Chassis Lead", 
        image: "/headshots/andrew_chao.jpg", 
        linkedin: "https://www.linkedin.com/in/andrewychao/" 
      },
      { 
        name: "Bochin Tong", 
        role: "Chassis Co-Lead", 
        image: "/headshots/bochin_tong.jpg", 
        linkedin: "https://www.linkedin.com/in/bochintong" 
      },
      { 
        name: "Akil Nafi", 
        role: "Chassis Co-Lead", 
        image: "/headshots/akil_nafi.jpg", 
        linkedin: "https://www.linkedin.com/in/akil-nafi/" 
      },
    ]
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "The Electronics subteam is responsible for designing, implementing, and optimizing the electrical systems of the vehicle. This includes managing high-voltage power distribution and low-voltage controls to ensure efficient and reliable operation of an electric race car.",
    groupImage: "/subteam-photos/electronics_photo.jpg",
    logo: "/subteam-logos/electronics_patch.png",
    icon: CircuitBoard,
    members: [
      { 
        name: "Gabriel Schoene", 
        role: "Lead Electrical Engineer", 
        image: "/headshots/gabriel_schoene.jpg", 
        linkedin: "https://www.linkedin.com/in/gabriel-schoene-228438294" 
      },
    ]
  },
  {
    id: "embedded",
    name: "Embedded",
    description: "The Embedded subteam is responsible for all the software and firmware development on the car. Embedded members will be using various microcontrollers to collect data from across the car, control the motor output and ensure that the car is safely and properly functioning.",
    groupImage: "/subteam-photos/embedded_photo.jpg",
    logo: "/subteam-logos/embedded_patch.png",
    icon: Cpu,
    members: [
      { 
        name: "Natalie Perrochon", 
        role: "EE Project Manager", 
        image: "/headshots/natalie_perrochon.png", 
        linkedin: "https://www.linkedin.com/in/natalie-perrochon/" 
      },
      { 
        name: "Karan Thakkar", 
        role: "Embedded Lead - Firmware", 
        image: "/headshots/karan_thakkar.jpg", 
        linkedin: "https://www.linkedin.com/in/ksthakkar/" 
      },
      { 
        name: "Alistair Keiller", 
        role: "Embedded Lead - Data", 
        image: "/headshots/alistair_keiller.jpg", 
        linkedin: "https://www.linkedin.com/in/akeiller/" 
      },
    ]
  },
  {
    id: "ergonomics",
    name: "Ergonomics",
    description: "The Ergonomics subteam is responsible for the design, manufacturing, testing, and complete documentation of the EV's brake system, pedal assemblies, driver seat, seatbelt harness, and steering system.",
    groupImage: "/subteam-photos/ergo_photo.jpg",
    logo: "/subteam-logos/ergo_patch.png",
    icon: User,
    members: [
      { 
        name: "Lorelei Hobbis", 
        role: "Ergonomics Lead", 
        image: "",
        linkedin: "" 
      },
      { 
        name: "Meera Sambhwani", 
        role: "Ergonomics Co-Lead", 
        image: "/headshots/meera_sambhwani.png", 
        linkedin: "https://www.linkedin.com/in/meera-sambhwani-a95bb0256/" 
      },
      { 
        name: "Katie Schmitz", 
        role: "Ergonomics Co-Lead", 
        image: "/headshots/katie_schmitz.jpg", 
        linkedin: "https://www.linkedin.com/in/katie-schmitz-893308331/" 
      },
    ]
  },
  {
    id: "operations",
    name: "Operations & Outreach",
    description: "The Operations and Outreach subteam is responsible for ensuring that the technical and non-technical aspects of the project are well-coordinated. This team also manages the project’s exposure through social media, project website, and networking.",
    groupImage: "/subteam-photos/o2_photo.jpg",
    logo: "/subteam-logos/o2_patch.png",
    icon: Briefcase,
    members: [
      { 
        name: "Nuha Khan", 
        role: "Operations and Outreach Lead", 
        image: "/headshots/nuha_khan.jpg", 
        linkedin: "https://www.linkedin.com/in/nuhakhan24/" 
      },
      { 
        name: "Trang Nguyen", 
        role: "Webmaster", 
        image: "/headshots/trang_nguyen.jpg", 
        linkedin: "https://www.linkedin.com/in/trangn12/" 
      },
      { 
        name: "Anna Lee", 
        role: "Web developer", 
        image: "/headshots/anna_lee.jpg", 
        linkedin: "https://www.linkedin.com/in/anna-lee-ab7383257/" 
      },
    ]
  },
  {
    id: "powertrain",
    name: "Powertrain",
    description: "The Powertrain subteam manages the driveline system, which is composed of a DC brushless motor, motor controller, differential, and axles. The subteam also designs and builds the motor controller apparatus to monitor and safely supply the motors with energy from the battery system.",
    groupImage: "/subteam-photos/powertrain_photo.jpg",
    logo: "/subteam-logos/powertrain_patch.png",
    icon: Zap,
    members: [
      { 
        name: "Jonathan Leung", 
        role: "Project Manager, Powertrain Lead", 
        image: "/headshots/jonathan_leung.jpg", 
        linkedin: "https://www.linkedin.com/in/jt-leung/" 
      },
      { 
        name: "Pratik Palwai", 
        role: "Powertrain Lead", 
        image: "", 
        linkedin: "" 
      },
    ]
  },
  {
    id: "suspension",
    name: "Suspension",
    description: "The Suspension subteam is responsible for designing not only a reliable system but a system tolerable within all dynamic scenarios. Components include control arms, rocker arms, wheel uprights and many others.",
    groupImage: "/subteam-photos/suspension_photo.jpg", 
    logo: "/subteam-logos/suspension_patch.png",
    icon: Shield,
    members: [
      { 
        name: "Vikram Repalle", 
        role: "Suspension Lead", 
        image: "/headshots/vikram_repalle.jpg", 
        linkedin: "https://www.linkedin.com/in/vikram-repalle-9744bb291/" 
      },
      { 
        name: "Dom Serrano", 
        role: "Assistant Lead", 
        image: "", 
        linkedin: "" 
      },
      { 
        name: "Isaac An", 
        role: "Assistant Lead", 
        image: "", 
        linkedin: "" 
      },
      { 
        name: "Walter Ramirez", 
        role: "Brakes Lead", 
        image: "", 
        linkedin: "" 
      },
      { 
        name: "Diego Martinez", 
        role: "Brakes Lead", 
        image: "", 
        linkedin: "" 
      },
    ]
  },
];
