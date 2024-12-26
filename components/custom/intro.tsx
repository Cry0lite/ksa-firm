import BoxReveal from "@/components/ui/box-reveal";
import ShimmerButton from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";

export async function IntroBox() {
  return (
    <div className="flex flex-col min-h-[500px] lg:flex-row justify-start lg:justify-between items-start gap-8 w-full">
      <div className="size-full max-w-xl  items-center justify-center  space-y-10 overflow-hidden pt-8">
        <div className="flex flex-col text-center md:text-left justify-start items-center gap-4">
          <BoxReveal boxColor={"#153b55"} duration={0.5}>
            <p className="text-[3rem] leading-10 font-bold">
              Your Trusted Chartered Accountants
              <span className="text-[#153b55]">.</span>
            </p>
          </BoxReveal>
          <div>
            <BoxReveal boxColor={"#153b55"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                – Empowering Businesses with Integrated Financial Solutions
              </h2>
            </BoxReveal>
            <BoxReveal boxColor={"#153b55"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                – Integrated Accounting & Advisory Solutions
                <span className="text-[#153b55]"> Since 2013</span>
              </h2>
            </BoxReveal>
          </div>
        </div>

        {/* <BoxReveal boxColor={"#153b55"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#153b55]"> React</span>,
            <span className="font-semibold text-[#153b55]"> Typescript</span>,
            <span className="font-semibold text-[#153b55]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#153b55]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal> */}

        <BoxReveal boxColor={"#153b55"} duration={0.5}>
          <div className="flex justify-start items-center space-x-4">
          <a className="transition-all" href="#contact">
            <ShimmerButton className="" background="#153b55">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                  Connect with us 
              </span>
            </ShimmerButton>
          </a>

          <a className="transition-all" href="#services"> 
            <ShimmerButton className="">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                  Explore our services      
              </span>
            </ShimmerButton>
          </a>
          </div>
        </BoxReveal>
      </div>
      <MagicCard
        className="cursor-pointer flex-col hidden lg:block z-0 items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={"#D9D9D955"}
      >
        {/* <img src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img> */}
        <img src="/group2.jpg"></img>
      </MagicCard>
    </div>
  );
}
