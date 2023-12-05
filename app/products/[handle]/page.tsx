import Image from "next/image"
import { Suspense } from "react"

import {
  storefront,
  getProductByHandle,
  detailedProductFragmentParser,
} from "@/lib/shopify"
import type { BasicProduct, DetailedProduct } from "@/lib/shopify/types"
import Review from "@/components/products/Review"
import SelectPack from "@/components/products/SelectPack"

export default function ProductPage({
  params: { handle },
}: {
  params: { handle: string }
}) {
  return (
    <section className="w-full flex flex-col max-w-[1440px] md:flex-row">
      <div className="p-8 md:w-1/2">
        <Suspense>
          <ProductImage handle={handle} />
        </Suspense>
      </div>

      <div className="p-8 md:w-1/2">
        <Suspense>
          <ProductDescription handle={handle} />
        </Suspense>
      </div>
    </section>
  )
}

const fetchProduct = async (handle: string): Promise<BasicProduct> => {
  const { data } = await storefront(getProductByHandle, { handle })
  const product: DetailedProduct = detailedProductFragmentParser(data.product)
  return product
}

async function ProductDescription({ handle }: { handle: string }) {
  const product = await fetchProduct(handle)
  return (
    <div className="flex flex-col gap-12">
      <div className="space-y-2">
        <h1 className="font-bold tracking-tight text-accent-100 text-4xl md:text-5xl ">
          {product.title}
        </h1>
        <p className="font-semibold text-accent-600 text-base md:text-lg">
          ${product.price}
        </p>
        <Review rate={5} />
      </div>
      <p className="text-accent-600 text-lg md:text-xl">
        {product.description}
      </p>
      <SelectPack />
      <button className="action-btn-style">Add to Cart</button>
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
      className="w-full rounded"
    />
  )
}
