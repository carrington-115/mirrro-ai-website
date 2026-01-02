import { Button, JoinTeam } from "@/components";

export default function HeroComponent() {
  return (
    <>
      <section className="container relative w-full mt-[110px] md:mt-[175px] lg:mt-[170px] px-[var(--spacing-16)] gap-[var(--spacing-20)] lg:gap-[var(--spacing-64)] flex flex-col items-center">
        <div className="flex flex-col items-center">
          <JoinTeam />
          <h1 className="lg:hidden text-[40px]/[50px] md:text-[55px]/[70px] lg:text-[75px]/[90px]  text-center font-bold">
            Unified AI for all Revenue Operations
          </h1>
          <h1 className="hidden lg:block lg:text-[40px]/[50px] lg:text-[75px]/[90px]  lg:text-center lg:font-bold">
            Unified AI for all Revenue <br />
            Operations
          </h1>
          <p className="text-center text-[17px] md:w-[85%] lg:w-[80%] mt-[var(--spacing-6)] lg:text-[23px]/[35px] text-[var(--colors-black-40)]">
            mirrro gives your teams one unified <strong>superagent</strong> with{" "}
            <strong>full memory</strong>, <strong>realtime visibility</strong>,
            and <strong>total control</strong> so every interaction feels
            consistent and human.
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-[var(--spacing-20)] lg:gap-[var(--spacing-64)]">
          <Button variant="filled" round="corner">
            Talk to founders
          </Button>
          <Button variant="outlined" round="corner">
            Signup for updates
          </Button>
        </div>
      </section>
    </>
  );
}
