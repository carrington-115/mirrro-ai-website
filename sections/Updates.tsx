"use client";

import { UpdatesInput } from "@/components";

export default function Updates() {
  return (
    <section className="mx-auto mt-[var(--spacing-80)] flex justify-center w-full">
      <div className="flex flex-col items-center gap-[var(--spacing-20)] w-[90%] p-[var(--spacing-20)] lg:w-[60%]">
        <div className="flex flex-col gap-[var(--spacing-20)]">
          <h3 className="text-4xl font-bold text-center">Signup for updates</h3>
          <p className="text-lg font-normal text-center text-[var(--colors-black-70)]">
            mirrro ends RevOps chaos with one shared superagent brain — giving
            sales, support, and marketing consistent memory, realtime
            visibility, and seamless alignment across every customer touchpoint.
            No more silos, dropped context, or fractured experiences. Just
            predictable revenue growth and teams that finally work as one. We’re
            opening early access soon — enter your email below to get updates,
            exclusive insights, and be first in line when mirrro launches.
          </p>
        </div>
        <div>
          <UpdatesInput
            inputTitle="updates_email"
            inputType="email"
            buttonName="Signup for updates"
            placeholder="Enter your email"
            btnSubmitAction={() => console.log("Test click")}
          />
        </div>
      </div>
    </section>
  );
}
