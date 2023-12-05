import type { BasicProduct } from "@/lib/shopify/types"
import ProductCard from "./ProductCard"

export default function ProductCatalog({
  products,
}: {
  products: BasicProduct[]
}) {
  return (
    <div className="p-8 sm:p-6">
      <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-12 ">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  )
}
