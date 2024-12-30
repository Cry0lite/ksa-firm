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
            statutory audits, taxation, regulatory compliance, and financial
            reporting.
          </p>
        </div>

        <div className="grid w-5/6 lg:w-4/6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                  src="/sneha2.jpg"
                    alt="Team Member 1"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">CA Sneha Halder</h3>
            <p className="text-gray-700">Direct Taxation</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <Image
               src="/adnan.jpg"
              alt="Team Member 2"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">CS Adnan Ginwala</h3>
            <p className="text-gray-700">Regulatory Compliances</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/ashish.jpg"
              alt="Team Member 3"
                className="w-full h-full object-cover object-left-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">CA Ashish Gandhi</h3>
            <p className="text-gray-700">Indirect Taxation and Audit</p>
          </div>

          

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <Image
              src="/sarvesh.png"
              alt="Team Member 4"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">CA Sarvesh Bhattad</h3>
            <p className="text-gray-700">Due Diligence and Audit</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/akshay.jpg"
              alt="Team Member 6"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">CA Akshay Jain</h3>
            <p className="text-gray-700">Audit</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <Image
            src="/vedika.jpeg"
              alt="Vedika"
                className="w-full h-full object-cover object-top"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vedika</h3>
            <p className="text-gray-700">Direct Tax</p>
          </div>
          </div>

          <div className="grid w-5/6 lg:w-4/6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div></div>
          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/pratiksha.jpeg"
              alt="Pratiksha"
                className="w-full h-full object-top object-cover"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pratiksha</h3>
            <p className="text-gray-700">Direct Tax</p>
          </div>

         

          {/* <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <Image
              src="https://spacema-dev.com/elevate/assets/images/team/7.jpg"
              alt="Team Member 7"
              className="w-full rounded-full mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-gray-700">Role: Content Writer</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
            <Image
              src="https://spacema-dev.com/elevate/assets/images/team/8.jpg"
              alt="Team Member 8"
              className="w-full rounded-full mb-4"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
            <p className="text-gray-700">Role: Project Manager</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
