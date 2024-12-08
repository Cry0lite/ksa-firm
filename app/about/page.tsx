import TeamSection from "@/components/custom/team";
import { ValuesCircle } from "@/components/custom/values";
import WhySection from "@/components/custom/why";
import React from "react";

function page() {
  return (
    <div className=" w-full">
      <WhySection />
      <ValuesCircle />
      <TeamSection />
    </div>
  );
}

export default page;
