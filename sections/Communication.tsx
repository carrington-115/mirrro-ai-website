import { ComItem } from "@/components";
import { communicationChannelsData } from "@/lib/data";

export default function Communication() {
  return (
    <>
      <section className="mx-auto flex flex-col gap-[var(--spacing-32)] mt-[100px] px-[var(--spacing-32)] lg:items-center">
        <div className="flex flex-col items-center px-[var(--spacing-20)] gap-[var(--spacing-10)] lg:w-[60%]">
          <h2 className="text-3xl text-center text-[var(--colors-black-70)] font-bold lg:text-5xl">
            Multi-channel communication
          </h2>
          <p className="text-sm text-center text-[var(--colors-black-50)] lg:text-base">
            Reach customers wherever they are — phone calls, SMS, WhatsApp,
            Telegram, Messenger, and email — all powered by one shared
            superagent for consistent, context-aware conversations that keep
            your revenue teams perfectly aligned
          </p>
        </div>
        <div className="grid grid-cols-2 md:flex md:justify-center md:grid-cols-4 gap-[var(--spacing-20)]">
          {communicationChannelsData.map((channel) => (
            <ComItem key={channel.title} {...channel} />
          ))}
        </div>
      </section>
    </>
  );
}
