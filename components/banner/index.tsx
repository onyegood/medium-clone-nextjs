import React from 'react'

const BannerComponent = () =>{
  return (
    <div
      className="flex items-center justify-between bg-yellow-400 border-y border-black py-10 lg:py-0 max-w-7xl mx-auto"
    >
      <div className="px-10 space-y-5">
        <h1 className="text-6xl font-serif max-w-xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>
          {' '}
          is a place to read, write, and connect.
        </h1>
        <h2>It's easy to post your thinking on any topic and connect with millions of reader.</h2>
      </div>
      <img
        className="hidden md:inline h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="Medium Logo"
      />
    </div>
  )
}

export default BannerComponent;
