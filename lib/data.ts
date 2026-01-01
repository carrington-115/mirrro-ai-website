import { communicationTypes, NavLinkType, productLinkTypes } from "./types";
import superagentImage from "@/assets/images/superagent.png";
import onememoryImage from "@/assets/images/one-memory.png";
import automationImage from "@/assets/images/automation.png";

// communication icons
import emailIcon from "@/assets/icons/email.svg";
import messageIcon from "@/assets/icons/message.svg";
import smsIcon from "@/assets/icons/sms.svg";
import phoneIcon from "@/assets/icons/phone.svg";

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

export const communicationChannelsData: communicationTypes[] = [
  { icon: phoneIcon, title: "AI-powered Phone calls" },
  { icon: messageIcon, title: "AI-powered Chats" },
  { icon: smsIcon, title: "AI-powered Sms" },
  { icon: emailIcon, title: "AI-powered Emails" },
];
