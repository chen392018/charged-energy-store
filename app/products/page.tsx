import { Suspense } from "react"

import ProductCatalog from "@/components/products/Catalog"

import {
  storefront,
  getProducts as getProductsQuery,
  basicProductFragmentParser,
} from "@/lib/shopify"

import type { BasicProduct } from "@/lib/shopify/types"

export default function ProductsPage() {
  return (
    <div id="container" className="w-full max-w-[1440px]">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
        {/* Product Catalogue */}
        <section className="w-full min-h-screen bg-background-500">
          <Suspense>
            <ProductCatalogWrapper />
          </Suspense>
        </section>
      </div>
    </div>
  )
}

async function ProductCatalogWrapper() {
  const { products } = await storefront(getProductsQuery)
  const productList: BasicProduct[] = products?.edges.map(
    ({ node }: { node: any }) => {
      return basicProductFragmentParser(node)
    },
  )

  return <ProductCatalog products={productList} />
}
