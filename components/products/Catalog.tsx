import Image from "next/image"

import type { Product } from "@/lib/shopify/types"

export default function ProductCatalog({ products }: { products: Product[] }) {
  return (
    <div className="mx-auto p-8 sm:p-6">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.handle} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={product.imageSrc}
                alt={product.altText}
                height={512}
                width={512}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-accent-700">
                  <a href={`/products/${product.handle}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
              </div>
              <p className="text-sm font-medium text-accent-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
