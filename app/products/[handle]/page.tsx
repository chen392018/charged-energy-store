import Image from "next/image"
import { Suspense } from "react"

import {
  storefront,
  getProductByHandle,
  productFragmentParser,
} from "@/lib/shopify"
import type { Product } from "@/lib/shopify/types"

export default function ProductPage({
  params: { handle },
}: {
  params: { handle: string }
}) {
  return (
    <section className="w-full flex gap-4 divide-x divide-primary-500 items-center max-w-[1440px]">
      <div className="w-1/2 px-8">
        <Suspense>
          <ProductDescription handle={handle} />
        </Suspense>
      </div>

      <div className="w-1/2 px-16 h-full">
        <Suspense>
          <ProductImage handle={handle} />
        </Suspense>
      </div>
    </section>
  )
}

const fetchProduct = async (handle: string): Promise<Product> => {
  const { data } = await storefront(getProductByHandle, { handle })
  const product = productFragmentParser(data.product)
  return product
}

async function ProductDescription({ handle }: { handle: string }) {
  const product = await fetchProduct(handle)
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold tracking-tight text-accent-900 mb-8 ">
        {product.title}
      </h1>
      <p>{product.description}</p>
      <p className="font-bold mb-4">${product.price}</p>
      <button className="w-fit rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-accent-100 shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
        Add to Cart
      </button>
    </div>
  )
}

async function ProductImage({ handle }: { handle: string }) {
  const product = await fetchProduct(handle)
  return (
    <Image
      src={product.imageSrc}
      alt={product.altText}
      width={250}
      height={250}
      className="mx-auto"
    />
  )
}
