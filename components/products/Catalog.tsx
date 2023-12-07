import type { BasicProduct } from "@/lib/shopify/types"
import ProductCard from "./ProductCard"

export default function ProductCatalog({
  products,
}: {
  products: BasicProduct[]
}) {
  return (
    <div className="p-6 md:p-8">
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center justify-center gap-12">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  )
}
