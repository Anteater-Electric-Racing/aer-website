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
  User,
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
  {
    name: "Welsh Advisors",
    tier: "Title",
    logo: "/sponsor-logos/welshadvisors_logo.png",
  },
  {
    name: "Parker",
    tier: "Platinum",
    logo: "/sponsor-logos/parkerhannifin_logo.png",
  },
  {
    name: "Airtech",
    tier: "Platinum",
    logo: "/sponsor-logos/airtech_logo.jpg",
  },
  {
    name: "Composites One",
    tier: "Platinum",
    logo: "/sponsor-logos/compositesone_logo.png",
  },
  {
    name: "Curbell Plastics",
    tier: "Platinum",
    logo: "/sponsor-logos/curbell_logo.png",
  },
  { name: "Evonik", tier: "Gold", logo: "/sponsor-logos/evonik_logo.png" },
  {
    name: "PEC Tools",
    tier: "Silver",
    logo: "/sponsor-logos/pectools_logo.jpeg",
  },
  { name: "Osh Cut", tier: "Silver", logo: "/sponsor-logos/oshcut_logo.png" },
  {
    name: "ACP Composites",
    tier: "Silver",
    logo: "/sponsor-logos/acpcomposites_logo.png",
  },
  {
    name: "Coastal Enterprises",
    tier: "Silver",
    logo: "/sponsor-logos/coastalenterprisesprecisionboard_logo.png",
  },
  {
    name: "Textile Products Inc.",
    tier: "Silver",
    logo: "/sponsor-logos/textileproductsinc_logo.png",
  },
  {
    name: "Perficient",
    tier: "Partner",
    logo: "/sponsor-logos/perficient_logo.jpg",
  },
  {
    name: "Murata Electronics",
    tier: "Partner",
    logo: "/sponsor-logos/murataelectronics_logo.png",
  },
  {
    name: "SendCutSend",
    tier: "Partner",
    logo: "/sponsor-logos/sendcutsend_logo.png",
  },
  {
    name: "Performance Composites",
    tier: "Partner",
    logo: "/sponsor-logos/performancecomposites_logo.png",
  },
    {
    name: "Mercury",
    tier: "Partner",
    logo: "/sponsor-logos/Mercury_Logo_FullColor_CMYK.png",
  },
];

// =========================================
// SUBTEAMS & MEMBERS DATA
// =========================================

export const SUBTEAMS = [
  {
    id: "management",
    name: "Management",
    description:
      "The Management subteam is responsible for ...",
    groupImage: "/subteam-photos/suspension_photo.jpg",
    logo: "/subteam-logos/suspension_patch.png",
    icon: Shield,
    members: [
      {
        name: "Jacob Barnett",
        role: "Chief Mechanical Engineer",
        image: "/headshots/jacob_barnett.jpg",
        linkedin: "https://www.linkedin.com/in/jacob-barnett-883838214/",
      },
      {
        name: "Avadi Seneviratne",
        role: "Chief Electrical Engineer",
        image: "/headshots/avadi_seneviratne.png",
        linkedin: "https://www.linkedin.com/in/avadi-s/",
      },
      {
        name: "Nuha Khan",
        role: "Project Manager",
        image: "/headshots/nuha_khan.jpg",
        linkedin: "https://www.linkedin.com/in/nuhakhan24/",
      },
      {
        name: "Rajesh Ganji",
        role: "Project Manager",
        image: "/headshots/rajesh_ganji.jpg",
        linkedin: "https://www.linkedin.com/in/rajesh--ganji/",
      },
      {
        name: "Katie Schmitz",
        role: "Project Manager",
        image: "/headshots/katie_schmitz.jpg",
        linkedin: "https://www.linkedin.com/in/katie-schmitz-893308331/",
      },
    ],
  },
  {
    id: "battery",
    name: "Battery",
    description:
      "The Battery subteam develops the physical housing, thermal solution, and the wiring for the energy storage system (ESS) that powers the vehicle from the cell level up. This team also designs and manufactures a specialized hand cart to lift the battery into the chassis of the vehicle.",
    groupImage: "/subteam-photos/accumulator_photo_crop.jpg",
    logo: "/subteam-logos/accumulator_patch.png",
    icon: Box,
    members: [
      {
        name: "Emily VanDenburgh",
        role: "Battery Lead",
        image: "/headshots/emily_vandenburgh.jpg",
        linkedin: "https://www.linkedin.com/in/emily-vandenburgh/",
      },
    ],
  },
  {
    id: "aerodynamics",
    name: "Aerodynamics",
    description:
      "The Aerodynamics subteam designs, builds, and tests every aerodynamic and composite structure on the car. The team also characterizes the car's aerodynamic behavior and sets downforce and drag targets to guide each design. The design group uses STAR-CCM+ CFD and ANSYS Structural FEA to optimize aerodynamic components, while the composites group uses ANSYS Composite PrepPost and NX Fibersim to balance weight, stiffness, and manufacturability.",
    groupImage: "/subteam-photos/aero_photo.jpg",
    logo: "/subteam-logos/aero_patch.png",
    icon: Wind,
    members: [
      {
        name: "Christian Klenz",
        role: "Aerodynamics Lead",
        image: "/headshots/christian_klenz.jpg",
        linkedin: "https://www.linkedin.com/in/christianklenz/",
      },
      {
        name: "Dylan Richcreek",
        role: "Aerodynamics Lead",
        image: "/headshots/dylan_gene_richcreek.jpg",
        linkedin: "https://www.linkedin.com/in/dylan-richcreek-3a40062a6/",
      },
      {
        name: "Sarah McClelland",
        role: "Aerodynamics Lead",
        image: "/headshots/sarah_mcclelland.jpg",
        linkedin: "https://www.linkedin.com/in/sarahrmcclelland/",
      },
    ],
  },
  {
    id: "dynamics",
    name: "Dynamics",
    description:
      "The Dynamics subteam designs the chassis and suspension that define the vehicle's performance. We engineer a lightweight, triangulated chassis with exceptional structural integrity and precise component mounting, paired with a reliable suspension system, including control arms, rocker arms, and wheel uprights, built to handle all dynamic scenarios.",
    groupImage: "/subteam-photos/dynamics_photo.jpg",
    logo: "/subteam-logos/chassis_patch.png",
    icon: Wrench,
    members: [
      {
        name: "Gabrielle Wang",
        role: "Dynamics Lead",
        image: "/headshots/gabrielle_wang.jpg",
        linkedin: "https://www.linkedin.com/in/gabrielle-wang/",
      },
      {
        name: "Isaac An",
        role: "Dynamics Lead",
        image: "/headshots/isaac_an.png",
        linkedin: "https://www.linkedin.com/in/jisaacan/",
      },
      {
        name: "Bochin Tong",
        role: "Dynamics Lead",
        image: "/headshots/bochin_tong.jpg",
        linkedin: "https://www.linkedin.com/in/bochintong",
      },
      {
        name: "Akil Nafi",
        role: "Dynamics Lead",
        image: "/headshots/akil_nafi.jpg",
        linkedin: "https://www.linkedin.com/in/akil-nafi/",
      },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    description:
      "The Electronics subteam is responsible for designing, implementing, and optimizing the electrical systems of the vehicle. This includes managing high-voltage power distribution and low-voltage controls to ensure efficient and reliable operation of an electric race car.",
    groupImage: "/subteam-photos/electronics_photo.jpg",
    logo: "/subteam-logos/electronics_patch.png",
    icon: CircuitBoard,
    members: [
      {
        name: "Rajesh Ganji",
        role: "Electrical Engineer Lead",
        image: "/headshots/rajesh_ganji.jpg",
        linkedin: "https://www.linkedin.com/in/rajesh--ganji/",
      },
      {
        name: "Avadi Seneviratne",
        role: "Electrical Engineer Lead",
        image: "/headshots/avadi_seneviratne.png",
        linkedin: "https://www.linkedin.com/in/avadi-s/",
      },
    ],
  },
  {
    id: "embedded",
    name: "Embedded",
    description:
      "The Embedded subteam is responsible for all the software and firmware development on the car. Embedded members will be using various microcontrollers to collect data from across the car, control the motor output and ensure that the car is safely and properly functioning.",
    groupImage: "/subteam-photos/embedded_photo.jpg",
    logo: "/subteam-logos/embedded_patch.png",
    icon: Cpu,
    members: [
      {
        name: "Anoop Koganti",
        role: "Embedded Lead",
        image: "/headshots/anoop_koganti.jpg",
        linkedin: "https://www.linkedin.com/in/anoop-koganti/",
      },
    ],
  },
  {
    id: "ergonomics",
    name: "Ergonomics",
    description:
      "The Ergonomics subteam is responsible for the design, manufacturing, testing, and complete documentation of the EV's brake system, pedal assemblies, driver seat, seatbelt harness, and steering system.",
    groupImage: "/subteam-photos/ergo_photo.jpg",
    logo: "/subteam-logos/ergo_patch.png",
    icon: User,
    members: [
      {
        name: "Mylie Yu",
        role: "Ergonomics Lead",
        image: "/headshots/mylie_yu.jpg",
        linkedin: "https://www.linkedin.com/in/mylie-yu-4573452a6/",
      },
      {
        name: "Meera Sambhwani",
        role: "Ergonomics Lead",
        image: "/headshots/meera_sambhwani.png",
        linkedin: "https://www.linkedin.com/in/meera-sambhwani-a95bb0256/",
      },
    ],
  },
  {
    id: "operations",
    name: "Operations & Outreach",
    description:
      "The Operations and Outreach subteam is responsible for ensuring that the technical and non-technical aspects of the project are well-coordinated. This team also manages the project’s exposure through social media, project website, and networking.",
    groupImage: "/subteam-photos/o2_photo.jpg",
    logo: "/subteam-logos/o2_patch.png",
    icon: Briefcase,
    members: [
      {
        name: "Nuha Khan",
        role: "Operations and Outreach Lead",
        image: "/headshots/nuha_khan.jpg",
        linkedin: "https://www.linkedin.com/in/nuhakhan24/",
      },
    ],
  },
  {
    id: "powertrain",
    name: "Powertrain",
    description:
      "The Powertrain subteam manages the driveline system, which is composed of a DC brushless motor, motor controller, differential, and axles. The subteam also designs and builds the motor controller apparatus to monitor and safely supply the motors with energy from the battery system.",
    groupImage: "/subteam-photos/powertrain_photo.jpg",
    logo: "/subteam-logos/powertrain_patch.png",
    icon: Zap,
    members: [
      {
        name: "Jacob Barnett",
        role: "Powertrain Lead",
        image: "/headshots/jacob_barnett.jpg",
        linkedin: "https://www.linkedin.com/in/jacob-barnett-883838214/",
      },
      {
        name: "Ty Mitchell",
        role: "Powertrain Lead",
        image: "/headshots/ty_mitchell.png",
        linkedin: "https://www.linkedin.com/in/ty-mitchell-403772238/",
      },
    ],
  },
];
