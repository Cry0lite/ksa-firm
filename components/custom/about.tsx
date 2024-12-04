import React from "react";
import ShimmerButton from "@/components/ui/shimmer-button";

function Aboutbox() {
  return (
    <section
      id="about"
      className="dark:bg-gray-100 dark:text-gray-800  mt-10 w-full"
    >
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-20 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-[2rem] font-bold tracking-tight text-center sm:text-[2.5rem] dark:text-gray-900">
            About us
          </h2>
          <p className="max-w-3xl mx-auto mt-2 text-xl text-center dark:text-gray-600">
            Who We Are, and Our Approach.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
              Empowering Your Financial Growth
            </h3>
            <p className="my-3 text-lg dark:text-gray-600">
              KSA & Associates is a trusted Chartered Accountancy partnership
              firm established in 2013. With a deep commitment to excellence, we
              specialize in delivering integrated services spanning Audit &
              Assurance, Tax Compliance, Corporate Advisory, and Financial
              Consultancy.
            </p>
            <ShimmerButton className="" background="#5046e6">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                Learn more
              </span>
            </ShimmerButton>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                    Building Meaningful Partnerships
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    We develop strong client relationships by focusing on the
                    intersection of people, processes, and platforms, enabling
                    us to deliver solutions that truly matter.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                    Your Growth, Our Vision
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    By understanding your perspective, we craft credible,
                    cost-effective strategies tailored to drive organizational
                    success and sustainable growth.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                    Strategic Insights for Success
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    At KSA & Associates, we aim to empower businesses with
                    actionable insights and innovative solutions, helping them
                    thrive in an ever-changing financial and regulatory
                    landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src="https://unsplash.com/blog/content/images/size/w2000/max/1200/1-6Y06QkNo24P2utyPkLfQZg.jpeg"
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
        </div>
        {/* <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Eam nibh gloriatur ex
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te
                latine theophrastus. Ea his tale nibh dissentias, mei exerci
                tamquam euripidis cu.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Cibo augue offendit has ad
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      An per velit appellantur, ut utinam minimum nominavi sit,
                      odio nostro habemus ne nec. Ne sonet regione contentiones
                      est.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      At eum ferri luptatum lobortis
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Te per quidam maiorum ocurreret, etiam delicatissimi usu
                      ad. Ne has quod periculis. Te sit primis iisque
                      efficiantur.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Dicunt verterem evertitur eu sea
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Audire principes rationibus eam an, autem nominavi
                      luptatum per te. Sumo fabulas vim eu, sonet saperet
                      eleifend ut vix.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src="https://source.unsplash.com/random/361x481"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Aboutbox;
