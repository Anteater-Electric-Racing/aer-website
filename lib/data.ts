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
    icon: Trophy, // Best icon for top tier
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
    icon: Heart, // Or Handshake if available, Heart shows support
    benefits: [
      "Small logo on car",
      "Social media promotion",
      "Featured on website",
    ],
  },
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
      { name: "Camryn Wright", role: "Chief Engineer", image: "/headshots/camryn_wright.jpg" },
      { name: "Natalie Perrochon", role: "Member", image: "/headshots/natalie_perrochon.png" },
      // Add more members...
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
      { name: "Adityan Vairavel", role: "Aero Lead", image: "/headshots/adityan_vairavel.jpg" },
      { name: "Manav Anand", role: "Member", image: "/headshots/manav_anand.jpg" },
      { name: "Sergei Litovchenko", role: "Member", image: "/headshots/sergei_litovchenko.jpg" },
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
      // TODO: { name: "Name Here", role: "Role Here", image: "/headshots/placeholder-user.jpg" },
    ]
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "The Electronics subteam is responsible for designing, implementing, and optimizing the electrical systems of the vehicle. This includes managing high-voltage power distribution and low-voltage controls to ensure efficient and reliable operation of an electric race car.",
    groupImage: "/subteam-photos/electronics_photo.jpg",
    logo: "/subteam-logos/electronics_patch.png",
    icon: CircuitBoard,
    members: []
  },
  {
    id: "embedded",
    name: "Embedded",
    description: "The Embedded subteam is responsible for all the software and firmware development on the car. Embedded members will be using various microcontrollers to collect data from across the car, control the motor output and ensure that the car is safely and properly functioning.",
    groupImage: "/subteam-photos/embedded_photo.jpg",
    logo: "/subteam-logos/embedded_patch.png",
    icon: Cpu,
    members: []
  },
  {
    id: "ergonomics",
    name: "Ergonomics",
    description: "The Ergonomics subteam is responsible for the design, manufacturing, testing, and complete documentation of the EV's brake system, pedal assemblies, driver seat, seatbelt harness, and steering system. Importantly, Ergonomics is responsible for driver safety in all outputs.",
    groupImage: "/subteam-photos/ergo_photo.jpg",
    logo: "/subteam-logos/ergo_patch.png",
    icon: User,
    members: []
  },
  {
    id: "operations",
    name: "Operations & Outreach",
    description: "The Operations and Outreach subteam is responsible for ensuring that the technical and non-technical aspects of the project are well-coordinated. This team also manages the project’s exposure through social media, project website, and networking.",
    groupImage: "/subteam-photos/o2_photo.jpg",
    logo: "/subteam-logos/o2_patch.png",
    icon: Briefcase,
    members: []
  },
  {
    id: "powertrain",
    name: "Powertrain",
    description: "The Powertrain subteam manages the driveline system, which is composed of a DC brushless motor, motor controller, differential, and axles. The subteam also designs and builds the motor controller apparatus to monitor and safely supply the motors with energy from the battery system.",
    groupImage: "/subteam-photos/powertrain_photo.jpg",
    logo: "/subteam-logos/powertrain_patch.png",
    icon: Zap,
    members: []
  },
  {
    id: "suspension",
    name: "Suspension",
    description: "The Suspension subteam is responsible for designing not only a reliable system but a system tolerable within all dynamic scenarios. Components include control arms, rocker arms, wheel uprights and many others.",
    groupImage: "/subteam-photos/suspension_photo.jpg", 
    logo: "/subteam-logos/suspension_patch.png",
    icon: Shield,
    members: []
  },
];
