import React from "react";

function ServicesBox() {
  return (
    <div id="services" className="w-full flex justify-center items-center">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <section id="new-features" className="py-8 bg-white  sm:py-10 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[2rem] font-bold tracking-tight text-center sm:text-[2.5rem] dark:text-gray-900">
              Our Services{" "}
            </h2>
            <p className="max-w-3xl mx-auto mt-2 text-xl text-center dark:text-gray-600">
              Comprehensive Solutions for Your Business Needs
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-20">
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Audit & Assurance
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Statutory audits, revenue audits, GST audits, and due diligence.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Direct Tax
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Tax planning, transfer pricing, scrutiny assessment, and
                certification.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Start-Up & Financial Services
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Advisory, business evaluation, project reports, and
                registrations.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <i className="fa-solid fa-cloud text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Indirect Tax
              </h3>
              <p className="mt-5 text-base text-gray-600">
                GST implementation, compliance, audits, litigation, and
                representation.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Financial Reporting
              </h3>
              <p className="mt-5 text-base text-gray-600">
                IND AS conversions, due diligence, audit support, and fixed
                asset verification.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <i className="fa-solid fa-bolt text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Risk Advisory
              </h3>
              <p className="mt-5 text-base text-gray-600">
                Internal audits, business risk assessment, SOP preparation, and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesBox;
