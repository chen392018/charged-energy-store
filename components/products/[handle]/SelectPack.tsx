"use client"
import { useState } from "react"

import type { ProductVariant } from "@/lib/shopify/types"

export default function SelectPack({
  variants,
  selectedVariant,
  setSelectedVariant,
}: {
  variants: ProductVariant[]
  selectedVariant: ProductVariant
  setSelectedVariant: (variant: ProductVariant) => void
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-accent-200 text-xl font-bold uppercase">
        Select pack:
      </h2>
      <ul className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <li key={variant.id}>
            <button
              onClick={() => setSelectedVariant(variant)}
              className={`border border-secondary-400 font-bold rounded-sm text-accent-200 w-12 h-12 duration-200 outline-none sm:w-16 sm:h-16 ${
                selectedVariant.id !== variant.id && "hover:bg-secondary-800"
              } ${selectedVariant.id === variant.id && "bg-secondary-400"}`}
            >
              {extractPackSize(variant.title)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const extractPackSize = (title: string): number => {
  const packSize = title.split(" ")[0]
  return parseInt(packSize)
}
