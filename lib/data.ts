import {
  communicationTypes,
  featureDataProps,
  NavLinkType,
  productLinkTypes,
} from "./types";
import superagentImage from "@/assets/images/superagent.png";
import onememoryImage from "@/assets/images/one-memory.png";
import automationImage from "@/assets/images/automation.png";

// communication icons
import emailIcon from "@/assets/icons/email.svg";
import messageIcon from "@/assets/icons/message.svg";
import smsIcon from "@/assets/icons/sms.svg";
import phoneIcon from "@/assets/icons/phone.svg";

// revenue icons
import memoryImage from "@/assets/icons/memory.svg";
import agentImage from "@/assets/icons/superagent.svg";
import workflowImage from "@/assets/icons/workflow.svg";
import monitoringImage from "@/assets/icons/workflow.svg";
import experimentationImage from "@/assets/icons/testing.svg";
import multichannelImage from "@/assets/icons/multichannel.svg";
import multiuserImage from "@/assets/icons/multiusers.svg";
import marketplaceImage from "@/assets/icons/store.svg";

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

export const featureData: featureDataProps[] = [
  {
    icon: memoryImage,
    title: "One memory",
    description:
      "One Memory provides every agent with a single, unified view of all customer interactions",
  },
  {
    icon: agentImage,
    title: "Superagent",
    description:
      "The Super Agent acts as the central supervisor, orchestrating sales, support, and marketing agents",
  },
  {
    icon: workflowImage,
    title: "Workflows",
    description:
      "No-code drag-and-drop builder for custom processes — fast RevOps alignment and scalable automation without developers.",
  },
  {
    icon: monitoringImage,
    title: "Monitoring",
    description:
      "Realtime Monitoring delivers full visibility into agent actions and performance",
  },

  {
    icon: experimentationImage,
    title: "Testing and simulations",
    description:
      "A/B Testing and Simulations let you safely test agent variants and workflows, refining performance with data-driven insights before deployment.",
  },
  {
    icon: multichannelImage,
    title: "Multichannel support",
    description:
      "Multichannel Support unifies automated calls, SMS, chats (WhatsApp, Telegram, Messenger), and email",
  },
  {
    icon: multiuserImage,
    title: "Multi-user support",
    description:
      "Multi-User Support enables realtime collaboration with role-based access",
  },
  {
    icon: marketplaceImage,
    title: "Workflow marketplace",
    description:
      "The Workflow Marketplace offers pre-built, shareable templates to jumpstart RevOps automation",
  },
];
