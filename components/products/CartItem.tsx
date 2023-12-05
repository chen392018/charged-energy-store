"use client"
import { HiMinus } from "react-icons/hi2"
import { MdAdd, MdClose } from "react-icons/md"
import Image from "next/image"
import product from "@/public/promo-shot.png"
import { useState } from "react"

export default function CartItem() {
  const [quantity, setQuantity] = useState(0)
  return (
    <div className="flex justify-between py-6 border-b-4 border-secondary-700">
      <div className="flex gap-8">
        <div>
          <Image src={product} alt="Energy drink" width={150} height={150} />
        </div>
        <div className="flex flex-col justify-between">
          <p className="truncate font-bold text-accent-100 text-xl md:text-2xl">
            Dawn
          </p>
          <p className="truncate text-lg md:text-xl">Pack: 8</p>

          {/* Quantity */}
          <div className="flex items-center gap-6 border-4 border-secondary-400 px-4 py-2">
            <button onClick={() => setQuantity(quantity - 1)}>
              <HiMinus className="w-6 h-6" />
            </button>

            <span className="font-bold text-base md:text-lg">{quantity}</span>

            <button onClick={() => setQuantity(quantity + 1)}>
              <MdAdd className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between px-4">
        {/* Delete cart item */}
        <button>
          <MdClose className="w-8 h-8 duration-300 hover:rotate-180" />
        </button>
        <p className="text-lg md:text-xl">$9.99</p>
      </div>
    </div>
  )
}
