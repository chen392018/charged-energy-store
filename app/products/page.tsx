import { Suspense } from "react"

import ProductCatalog from "@/components/products/Catalog"
import FiltersBar from "@/components/products/FiltersBar"

import { storefront, getProducts as getProductsQuery } from "@/lib/shopify"

import type { ParsedProduct } from "@/lib/shopify/types"

export default function ProductsPage() {
  return (
    <div id="container" className="w-full max-w-[1440px] px-8">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
        {/* Left Drawer */}
        <section className="w-full md:w-1/5 md:min-h-screen bg-background-400">
          <FiltersBar />
        </section>

        {/* Product Catalogue */}
        <section className="w-full md:w-4/5 min-h-screen bg-background-500">
          <Suspense>
            <ProductCatalogWrapper />
          </Suspense>
        </section>
      </div>
    </div>
  )
}

async function ProductCatalogWrapper() {
  const { data } = await storefront(getProductsQuery)
  const products: ParsedProduct[] = data.products.edges.map(
    ({ node }: { node: any }) => {
      return {
        title: node.title,
        handle: node.handle,
        description: node.description,
        tags: node.tags,
        price: node.priceRange.minVariantPrice.amount,
        imageSrc: node.images.edges[0].node.transformedSrc,
        imageAlt: node.images.edges[0].node.altText,
        href: `/products/${node.handle}`,
      }
    },
  )

  return <ProductCatalog products={products} />
}
