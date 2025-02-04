import React from "react";
import Image from "next/image";

function TeamSection() {
  return (
    <section id="our-team" className="bg-background w-full flex justify-center py-28">
      <div className="container justify-center gap-8 items-center w-11/12 flex flex-col  px-4">
        <div className="w-5/6 md:w-4/5">
          <h2 className="text-[2rem] text-center leading-10 font-bold">
            Meet the Experts Behind Our Success
          </h2>

          <p className="mt-[1.2rem] text-[1rem] text-center">
            Our multidisciplinary team comprises professionals specializing in
            statutory audits, tax, regulatory compliance, and financial
            reporting.
          </p>
        </div>

        <div className="grid w-5/6 justify-center lg:w-4/6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                  src="/sneha2.jpg"
                    alt="Team Member 1"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">CA Sneha Halder</h3>
            <p className="text-gray-700 text-sm">Direct Tax</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
               src="/adnan.jpg"
              alt="Team Member 2"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">CS Adnan Ginwala</h3>
            <p className="text-gray-700 text-sm">Regulatory Compliances</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/ashish.jpg"
              alt="Team Member 3"
                className="w-full h-full object-cover object-left-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">CA Ashish Gandhi</h3>
            <p className="text-gray-700 text-sm">Indirect Tax and Audit</p>
          </div>

          

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
              src="/sarvesh.png"
              alt="Team Member 4"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">CA Sarvesh Bhattad</h3>
            <p className="text-gray-700 text-sm">Due Diligence and Audit</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/akshay.jpg"
              alt="Team Member 6"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">CA Akshay Jain</h3>
            <p className="text-gray-700 text-sm">Audit</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/pratiksha.jpeg"
              alt="Pratiksha"
                className="w-full h-full object-top object-cover"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">CA Pratiksha Chandak</h3>
            <p className="text-gray-700 text-sm">Direct Tax</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <Image
            src="/vedika.jpeg"
              alt="Vedika"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">CA Vedika Maniyar</h3>
            <p className="text-gray-700 text-sm">Direct Tax</p>
          </div>
          </div>
      </div>
    </section>
  );
}

export default TeamSection;
