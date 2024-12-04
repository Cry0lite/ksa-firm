
import BoxReveal from "@/components/ui/box-reveal";
import ShimmerButton from "@/components/ui/shimmer-button";

export async function IntroBox() {
  return (
    <div className="size-full max-w-xl items-center justify-center min-h-[500px] space-y-10 overflow-hidden pt-8">
      <div className="flex flex-col justify-start items-center gap-4">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3rem] leading-10 font-bold">
            Your Trusted Chartered Accountants
            <span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
        <div>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              – Empowering Businesses with Integrated Financial Solutions
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              – Integrated Accounting & Advisory Solutions
              <span className="text-[#5046e6]"> Since 2013</span>
            </h2>
          </BoxReveal>
        </div>
      </div>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal> */}

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="flex justify-start items-center space-x-4">
          <ShimmerButton className="" background="#5046e6">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
              Connect with us
            </span>
          </ShimmerButton>
          <ShimmerButton className="">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
              Explore our services
            </span>
          </ShimmerButton>
        </div>
      </BoxReveal>
    </div>
  );
}
