import { ParsedProduct } from "@/lib/shopify/types"
import Image from "next/image"
import Review from "./Review"

export default function ProductCard({ product }: { product: ParsedProduct }) {
  return (
    <div className="group relative duration-200 shadow-sm shadow-secondary-600 hover:shadow-md hover:shadow-secondary-600 overflow-hidden rounded-md">
      <div className="w-full bg-gray-200">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={600}
          height={600}
          className="object-cover w-[400px] h-[400px] aspect-1 duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm text-accent-100">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
          </div>
          <p className="text-sm font-medium text-accent-100 sm:text-base">
            ${product.price}
          </p>
        </div>
        <p className="text-sm text-secondary-600">Available</p>
        <Review rate={5} />
      </div>
    </div>
  )
}
