"use client"
import Review from "@/components/products/[handle]/Review"
import SelectPack from "@/components/products/[handle]/SelectPack"

import { useEffect, useState } from "react"

import { useCart } from "@/components/context/CartContext"
import type { DetailedProduct, ProductVariant } from "@/lib/shopify/types"

export default function ProductDetails({
  product,
}: {
  product: DetailedProduct
}) {
  const { handleAddToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0],
  )
  useEffect(() => console.log(selectedVariant), [selectedVariant])

  return (
    <div className="flex flex-col gap-12">
      <div className="space-y-2">
        <h1 className="font-bold tracking-tight text-accent-100 text-4xl md:text-5xl ">
          {product.title}
        </h1>
        <p className="font-semibold text-accent-600 text-base md:text-lg">
          ${selectedVariant.price}
        </p>
        <Review rate={5} />
      </div>
      <p className="text-accent-600 text-lg md:text-xl">
        {product.description}
      </p>
      <SelectPack
        variants={product.variants}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />
      <button
        className="action-btn-style"
        onClick={() => handleAddToCart(selectedVariant.id)}
      >
        Add to Cart
      </button>
    </div>
  )
}
