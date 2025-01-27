import RippleButton from "@/components/ui/ripple-button";
import Image from "next/image";
import Team1 from '../../public/team-1.jpg'

export const WhySection = () => {
  return (
    <div className="relative mt-10 px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 rounded-md z-0 w-full h-full bg-[#153b55] lg:w-3/4" />
      </div>
      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-base leading-6 text-gray-100 lg:pr-8">
            Here at KSA & Associates, we combine expertise, innovation, and a
            client-centric approach to deliver cost-effective and tailored
            solutions for your financial and regulatory needs. With over a
            decade of experience, our team is dedicated to empowering businesses
            with strategic insights, seamless compliance, and personalized
            support, ensuring your success in an ever-evolving landscape.
          </p>
          <div className="mt-6 w-full flex justify-center  items-center lg:justify-start">
            <RippleButton className="">
              <a href="#contact" className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#153b55] from-white to-slate-900/10 lg:text-base">
                Get in touch
              </a>
            </RippleButton>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="object-contain w-full max-w-2xl rounded-lg shadow-lg"
            src={Team1}
            alt="Team working together"
          />
        </div>
      </div>
    </div>
  );
};
