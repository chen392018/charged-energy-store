import { ParsedProduct } from "@/lib/shopify/types"
import Image from "next/image"
import Review from "./Review"

export default function ProductCard({ product }: { product: ParsedProduct }) {
  return (
    <div className="bg-primary-600 group relative duration-500 shadow-2xl shadow-black hover:shadow hover:shadow-secondary-400 overflow-hidden rounded-md">
      <div className="bg-gray-200 min-[400px]:w-[384px] min-[400px]:h-[400px] overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={400}
          height={400}
          className="object-cover w-auto h-auto"
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
