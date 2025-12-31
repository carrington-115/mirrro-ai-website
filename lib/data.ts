import { NavLinkType, productLinkTypes } from "./types";
import superagentImage from "@/assets/images/superagent.png";
import onememoryImage from "@/assets/images/one-memory.png";
import automationImage from "@/assets/images/automation.png";

export const navLinks: NavLinkType[] = [
  { label: "Product", id: "product" },
  { label: "Use cases", id: "use-cases" },
  { label: "Features", id: "features" },
  { label: "Integrations", id: "integrations" },
  { label: "Blog", id: "blog" },
];

export const productData: productLinkTypes[] = [
  {
    image: superagentImage,
    productLink: "#",
    title: "Superagent",
    description:
      "Central supervisor with shared memory across sales, marketing, and support for seamless, consistent RevOps workflows.",
  },
  {
    image: onememoryImage,
    productLink: "#",
    title: "One memory",
    description:
      "Ensure every interaction, data point, and action is instantly accessible to sales, support, and marketing agents",
  },
  {
    image: automationImage,
    productLink: "#",
    title: "Automation",
    description:
      "AI-driven routing, personalization, and actions to eliminate silos, boost efficiency, and scale revenue.",
  },
];
