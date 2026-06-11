import { AiOutlineHome } from "react-icons/ai";
import { PiCookingPot } from "react-icons/pi";
import { PiToiletLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import Deep from "@/components/small/icons/Deep";
import Save from "@/components/small/icons/Save";
import Quick from "@/components/small/icons/Quick";
import Affordable from "@/components/small/icons/Affordable";
import { IconType } from "react-icons";
import { IoHome } from "react-icons/io5";
import { RiScrollToBottomFill } from "react-icons/ri";

export interface IHomeSteps {
  id: string;
  title?: string;
  text: string;
  link?: string;
  label?: string;
}
export interface IHomeService {
  id: number;
  title?: string;
  text?: string;
  link?: string;
  image?: string;
  type: "image" | "box";
  icon?: IconType;
}
export interface IHomeWhy {
  icon: any;
  title: string;
  text: string;
}

export interface IHomePortfolio {
  image: string;
  label: string;
  title: string;
  link: string;
}
export interface IServiceBox {
  image: string;
  Icon: IconType;
  title: string;
  text: string;
  link: string;
}

export const home_steps: IHomeSteps[] = [
  {
    id: "01",
    title: "Book / Schedule",
    text: "Easily book your cleaning service online or by phone at your convenience.",
  },
  {
    id: "02",
    title: "Make Appointment",
    text: "Book your cleaning service quickly and easily online or by phone anytime.",
  },
  {
    id: "03",
    title: "Lets Clean Home",
    text: "Our trained staff use safe and effective methods to deliver spotless results.",
  },
  {
    id: "04",
    text: "Ready for a Spotless Home Today and Always?",
    link: "/contact-us",
    label: "Book Now",
  },
];

export const home_services: IHomeService[] = [
  {
    id: 1,
    type: "image",
    image: "/images/3.jpg",
  },
  {
    type: "box",
    id: 2,
    title: "Home Cleaning",
    text: "We deliver a spotless, dust-free home with professional sanitization for lasting freshness.",
    link: "/home-cleaning",
    icon: AiOutlineHome,
  },
  {
    type: "box",
    id: 3,
    title: "Kitchen Cleaning",
    text: "Our experts remove grease, sanitize surfaces, and clean appliances for a sparkling kitchen.",
    link: "/kitchen-cleaning",
    icon: PiCookingPot,
  },
  {
    type: "box",
    id: 4,
    title: "Toilet Sanitization",
    text: "We disinfect and deodorize toilets, eliminating germs and stains for a fresh and hygienic restroom.",
    link: "/toilet-sanitization",
    icon: PiToiletLight,
  },
  {
    type: "box",
    id: 5,
    title: "Carpet Treatment",
    text: "Deep shampooing effectively removes dirt, stains, and odors, restoring carpets to original lasting beauty.",
    link: "Carpet-treatment",
    icon: HiOutlineBuildingOffice2,
  },
  {
    type: "image",
    id: 6,
    image: "/images/4.jpg",
  },
];

export const home_why: IHomeWhy[] = [
  {
    icon: Deep,
    title: "Deep Clean",
    text: "We ensure a thorough clean, eliminating dust, grime, bacteria for a fresher, healthier space.",
  },
  {
    icon: Save,
    title: "Safe Products",
    text: "We use eco-friendly, non-toxic solutions, keeping kids, pets, and your home completely safe.",
  },

  {
    icon: Quick,
    title: "Quick Service",
    text: "Our skilled team ensures spotless results, delivering a detailed clean with no compromise.",
  },
  {
    icon: Affordable,
    title: "Affordable Pricing",
    text: "We provide quality cleaning at fair prices, offering excellent service without extra burden.",
  },
];

export const home_portfolio: IHomePortfolio[] = [
  {
    image: "/images/5.jpg",
    title: "PureShine: Deep Clean Experts",
    label: "Organized Living",
    link: "/pureshine-deep-clean-experts",
  },
  {
    image: "/images/6.jpg",
    title: "FreshNest: Transforming Living Spaces",
    label: "Deep Cleaning",
    link: "/freshnest-transforming-living-spaces",
  },
];
export const home_blog: IHomePortfolio[] = [
  {
    image: "/images/13.jpg",
    title: "Transform Your Home with Easy Cleaning Hacks",
    label: "May 23, 2025",
    link: "/transform-your-home-with-easy-cleaning-hacks",
  },
  {
    image: "/images/14.jpg",
    title: "Top Cleaning Hacks for a Sparkling Space",
    label: "April 2, 2025",
    link: "/top-cleaning-hacks-for-a-sparkling-space",
  },
  {
    image: "/images/15.jpg",
    title: "Essential Cleaning Tips to Make Your House Fresh",
    label: "April 2, 2025",
    link: "/essential-cleaning-tips-to-make-your-house-fresh",
  },
];

export const service_services = [
  {
    title: "Home Cleaning",
    text: "We deliver a spotless, dust-free home with professional sanitization for lasting freshness.",
    Icon: IoHome,
    link: "/home-cleaning",
    image: "/images/4.jpg",
  },
  {
    title: "Kitchen Cleaning",
    text: "Our experts remove grease, sanitize surfaces, and clean appliances for a sparkling kitchen.",
    Icon: PiCookingPot,
    link: "/kitchen-cleaning",
    image: "/images/14.jpg",
  },
  {
    title: "Toilet Sanitization",
    text: "We disinfect and deodorize toilets, eliminating germs and stains for a fresh and hygienic restroom.",
    Icon: PiToiletLight,
    link: "toilet-sanitization",
    image: "/images/13.jpg",
  },
  {
    title: "Carpet Treatment",
    text: "Deep shampooing effectively removes dirt, stains, and odors, restoring carpets to original lasting beauty.",
    Icon: HiOutlineBuildingOffice2,
    link: "/carpet-treatment",
    image: "/images/13.jpg",
  },
  {
    title: "Floor Scrubbing",
    text: "We deep-clean and polish floors, removing dirt, grime, and stains for a spotless, gleaming surface.",
    Icon: RiScrollToBottomFill,
    link: "/floor-scrubbing",
    image: "/images/4.jpg",
  },
  {
    title: "Glass Polishing",
    text: "Our streak-free glass cleaning leaves windows, mirrors, and glass surfaces crystal clear.",
    Icon: HiOutlineBuildingOffice2,
    link: "/class-polishing",
    image: "/images/14.jpg",
  },
];
