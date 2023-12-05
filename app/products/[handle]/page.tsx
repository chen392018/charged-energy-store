import Image from "next/image"
import { Suspense } from "react"

import { storefront, getProductByHandle } from "@/lib/shopify"
import type { ParsedProduct } from "@/lib/shopify/types"
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

const fetchProduct = async (handle: string): Promise<ParsedProduct> => {
  const { data } = await storefront(getProductByHandle, { handle })
  return {
    title: data.productByHandle.title,
    handle: data.productByHandle.handle,
    description: data.productByHandle.description,
    tags: data.productByHandle.tags,
    price: data.productByHandle.priceRange.minVariantPrice.amount,
    imageSrc: data.productByHandle.images.edges[0].node.transformedSrc,
    imageAlt: data.productByHandle.images.edges[0].node.altText,
    href: `/products/${data.productByHandle.handle}`,
  }
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
      <button className="relative p-4 rounded-sm border border-secondary-400 font-bold text-accent-200 text-sm sm:text-lg outline-none duration-200 after:bg-blend-overlay after:ease-in-out after:duration-500 hover:after:w-full after:-z-10 after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:bg-secondary-400">
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
      alt={product.imageAlt}
      width={250}
      height={250}
      className="w-full rounded"
    />
  )
}
