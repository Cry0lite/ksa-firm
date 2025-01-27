'use client'

import React from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
 
import { useRouter } from 'next/navigation';
import Image from "next/image";
import CoreGroup from '../../public/core-group.jpg'

function Aboutbox() {
  const { push } = useRouter();
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
            Who we are and our approach.
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
            <ShimmerButton onClick={()=>{push('/about');}}  background="#153b55">
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
            <Image
              src={CoreGroup}
              alt="core-team"
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutbox;
