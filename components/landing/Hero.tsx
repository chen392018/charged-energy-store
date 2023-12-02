import React from "react"

export default function HeroSection() {
  return (
    <div className="py-12 sm:py-24 lg:py-32">
      <div className="pt-[12rem] flex flex-col prose text-center mx-auto">
        <h1 className="text-4xl font-bold tracking-wider sm:text-6xl uppercase">
          All Day Energy
        </h1>
        <div className="py-8">
          <a
            href="/products"
            className="rounded p-2 border border-accent-300 cursor-pointer"
          >
            Take Charge
          </a>
        </div>
      </div>
    </div>
  )
}
