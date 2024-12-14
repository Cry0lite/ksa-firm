import React from 'react'

function Advantages() {
  return (
    <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center gap-6 w-11/12 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-10">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Advantages</h2>
  
      <p className="mt-[1.2rem] text-[1rem] text-center">
        What do we bring  to the table ?
      </p>
    </div>
  
    <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-base font-medium text-gray-500"> Professional quality at competitive rates.</dt>
  
        <dd className="text-xl font-extrabold text-blue-600 md:text-2xl">Cost Effective</dd>
      </div>
  
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-base font-medium text-gray-500"> We focus on resolving challenges with precision.</dt>
  
        <dd className="text-xl font-extrabold text-blue-600 md:text-2xl">Solution-Driven Approach</dd>
      </div>
  
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-base font-medium text-gray-500">Building trust through empathy and understanding.</dt>
  
        <dd className="text-xl font-extrabold text-blue-600 md:text-2xl">Client Relationships </dd>
      </div>
  
      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-base font-medium text-gray-500">Access to a collaborative team with deep industry knowledge.</dt>
  
        <dd className="text-xl font-extrabold text-blue-600 md:text-2xl">Diverse Expertise </dd>
      </div>

      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-base font-medium text-gray-500">We see through our clients’ eyes to deliver meaningful outcomes.</dt>
  
        <dd className="text-xl font-extrabold text-blue-600 md:text-2xl">Human Touch </dd>
      </div>

      <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
        <dt className="order-last text-base font-medium text-gray-500"> We listen, we empathize, we understand and we solve - all with a
        smile.</dt>
  
        <dd className="text-xl font-extrabold text-blue-600 md:text-2xl"> Communication</dd>
      </div>
    </dl>
  </div>
  )
}

export default Advantages



