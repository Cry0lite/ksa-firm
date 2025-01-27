import React from "react";
import Image from "next/image";
import Kethaan from '../../public/kethaan.png'
import Amit from '../../public/amit.jpg'

function AdvisorsSection() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-5/6 md:w-4/5">
        <h2 className="text-[2.5rem] text-center leading-10 font-bold">
          Advisory Board
        </h2>

        <p className="mt-[1.2rem] text-[1rem] text-center">Expertise</p>
      </div>
      <section className="bg-[#153b55] my-30 lg:my-40 w-full">
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">
          <div className="flex flex-col ">
            <div className="mt-6 border-t pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
                <div>
                  <p className="text-4xl mt-8 tracking-tighter font-semibold text-white text-balance">
                    {" "}
                    CA Kethaan Parakh
                  </p>
                  <p className="text-sm  mt-4 text-white text-balance">
                    {" "}
                    Kethaan has helped clients from over 12 countries with the
                    regulatory environment, company set-up, financial planning,
                    and budgeting. He is also the driving force behind
                    automation systems specifically catering to Accounting Firms
                    & Departments.
                  </p>
                </div>
                <div className="h-full md:order-first">
                  <Image
                    src={Kethaan}
                    alt="Kethaan"
                    className=" bg-gray-200 shadow-xl rounded-lg  shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"
                  />{" "}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
                <div>
                  <p className="text-4xl mt-8 tracking-tighter font-semibold text-white text-balance">
                    {" "}
                    CA Amit Chandak
                  </p>
                  <p className="text-sm  mt-4 text-white text-balance">
                    {" "}
                    Amit inspires entrepreneurship and ownership within the
                    team. His business acumen, out-of-the-box thinking and
                    razor-sharp focus on quality, guides the operations team to
                    achieve excellence.
                  </p>
                </div>
                <div className="h-full ">
                  {" "}
                  <Image
                    src={Amit}
                    alt="Amit"
                    className=" bg-gray-200 shadow-xl rounded-lg shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdvisorsSection;
