import { Feature } from "@/components";
import { featureData } from "@/lib/data";
import Integrations from "./Integrations";

export default function Features() {
  return (
    <section className="lg:w-[100%] lg:flex lg:flex-col lg:justify-center">
      <div className="mx-auto lg:w-[85%] mt-[var(--spacing-64)] flex flex-col pb-[40px] items-center gap-[var(--spacing-20)] px-[var(--spacing-16)] md:px-[var(--spacing-32)] md:py-[50px] md:bg-[var(--colors-black-5)]/50 lg:pt-[var(--spacing-80)] lg:px-[0px]">
        <h2 className="text-4xl font-bold text-center">
          Better RevOps, More Revenue
        </h2>
        <div className="lg:hidden md:hidden">
          <Feature {...featureData[0]} />
        </div>

        <div className="hidden md:grid lg:grid md:grid-cols-2 lg:grid-cols-4 gap-x-[var(--spacing-20)] lg:gap-y-0 lg:gap-x-0 gap-y-[var(--spacing-32)] mt-[var(--spacing-32)] lg:mx-auto justify-start">
          {featureData.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
      <Integrations />
    </section>
  );
}
