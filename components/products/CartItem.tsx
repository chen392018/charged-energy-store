"use client"
import { HiMinus } from "react-icons/hi2"
import { MdAdd, MdDelete } from "react-icons/md"
import Image from "next/image"
import product from "@/public/promo-shot.png"
import { useState } from "react"

export default function CartItem() {
  const [quantity, setQuantity] = useState(0)
  return (
    <div className="flex flex-col justify-between gap-8 py-6 sm:flex-row">
      <div className="flex gap-8">
        <div>
          <Image src={product} alt="Energy drink" width={150} height={150} />
        </div>
        <div className="flex flex-col justify-between">
          <p className="truncate font-bold text-accent-100 text-xl md:text-2xl">
            Dawn
          </p>
          <p className="truncate text-sm md:text-base">Pack: 8</p>

          {/* Quantity */}
          <div className="flex items-center gap-6 border border-secondary-400 p-2 md:px-4 md:py-2">
            <button onClick={() => setQuantity(quantity - 1)}>
              <HiMinus className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <span className="font-bold text-base md:text-lg">{quantity}</span>

            <button onClick={() => setQuantity(quantity + 1)}>
              <MdAdd className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between sm:flex-col">
        {/* Delete cart item */}
        <button>
          <MdDelete className="duration-300 hover:text-red-400 w-6 h-6 md:w-8 md:h-8" />
        </button>
        <p className="text-sm md:text-base">$9.99</p>
      </div>
    </div>
  )
}
