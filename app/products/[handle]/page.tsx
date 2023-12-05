import Image from "next/image"
import { Suspense } from "react"

import {
  storefront,
  getProductByHandle,
  detailedProductFragmentParser,
} from "@/lib/shopify"
import type { BasicProduct, DetailedProduct } from "@/lib/shopify/types"
import ProductDetails from "@/components/products/[handle]/ProductDetails"

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

const fetchProduct = async (handle: string): Promise<DetailedProduct> => {
  const { product } = await storefront(getProductByHandle, { handle })
  const parsedProduct: DetailedProduct = detailedProductFragmentParser(product)
  return parsedProduct
}

async function ProductDescription({ handle }: { handle: string }) {
  const product = await fetchProduct(handle)
  return <ProductDetails product={product} />
}

async function ProductImage({ handle }: { handle: string }) {
  const product = await fetchProduct(handle)
  return (
    <Image
      src={product.imageSrc}
      alt={product.altText}
      width={600}
      height={600}
      className="w-full rounded"
    />
  )
}
