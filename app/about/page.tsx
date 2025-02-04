import Advantages from "@/components/custom/advantages";
import AdvisorsSection from "@/components/custom/advisors";
import TeamSection from "@/components/custom/team";


import { WhySection } from "@/components/custom/why";
import React from "react";

function page() {
  return (
    <div className="w-full">
      <WhySection />
      <Advantages />
      <TeamSection />
      <AdvisorsSection/>
    </div>
  );
}

export default page;
