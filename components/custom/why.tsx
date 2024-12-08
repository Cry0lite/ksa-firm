import React from "react";

function WhySection() {
  return (
    <div id="about" className="relative bg-white z-0 overflow-hidden  mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-[#153b55] rounded-lg sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-[#153b55] transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-12 sm:mt-12  md:mt-16 lg:mt-20  xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl">
                Why Choose us ?
              </h2>

              <p className="text-white">
                Here at KSA & Associates we combine expertise, innovation, and a
                client-centric approach to deliver cost-effective and tailored
                solutions for your financial and regulatory needs. With over a
                decade of experience, our team is dedicated to empowering
                businesses with strategic insights, seamless compliance, and
                personalized support, ensuring your success in an ever-evolving
                landscape.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          alt=""
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/team-1.png"
        />
      </div>
    </div>
  );
}

export default WhySection;
