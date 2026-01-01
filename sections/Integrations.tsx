import { Button } from "@/components";
import Image from "next/image";
import mobileIntegrations from "@/assets/images/mobile-integrations.png";
import desktopIntegrations from "@/assets/images/desktop-integrations.png";

export default function Integrations() {
  return (
    <section className="flex flex-col md:flex-row lg:flex-row lg:justify-between md:mx-auto md:px-[40px] lg:px-[64px] md:py-[50px] mx-[var(--spacing-20)] items-center gap-[var(--spacing-20)] p-[var(--spacing-32)] bg-[var(--colors-black-5)] rounded-lg md:rounded-[0px] lg:w-[85%]">
      <div className="flex flex-col md:w-[80%] lg:w-[55%] gap-[var(--spacing-10)] lg:gap-[var(--spacing-12)] items-start">
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Integrate all your key tools in Sync with your agents, workflows, and
          take actions.
        </h3>
        <p className="text-base md:text-lg lg:text-xl">
          Define reusable tools (CRM updates, bookings, lookups) for superagents
          to execute autonomously. Ensure full control and auditability in
          RevOps workflows.
        </p>
        <Button variant="filled" round="corner">
          Sign up for updates
        </Button>
      </div>
      <div>
        <Image
          src={mobileIntegrations}
          alt="mobile integrations"
          className="md:hidden"
        />
        <Image
          src={desktopIntegrations}
          alt="desktop integrations"
          className="hidden md:block lg:block"
        />
      </div>
    </section>
  );
}
