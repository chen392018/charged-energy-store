"use client"
import Image from "next/image"
import Link from "next/link"
import { BsCart } from "react-icons/bs"

import logo from "@/public/charge-logo.png"
import { useState } from "react"
import CartModal from "../products/CartModal"

export default function Navbar() {
  const [showCart, setShowCart] = useState(false)

  return (
    <nav className="bg-primary-700 navbar-shadow-bottom relative top-0 right-0 left-0 z-[1000]">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 z-[100]">
            <Image src={logo} alt="Charged Energy" width={32} height={32} />
            <h1 className="text-2xl font-bold tracking-tight text-accent-100">
              Charged Energy
            </h1>
          </Link>
          <Link
            href="/research"
            className="text-accent-600 hover:text-secondary-300 ml-12 mr-4 self-end z-[100]"
          >
            Research
          </Link>
          <Link
            href="/products"
            className="text-accent-600 hover:text-secondary-300 mx-4 self-end z-[100]"
          >
            Shop
          </Link>
        </div>

        <button className="relative rounded text-accent-300 glow-sm-hover duration-200 hover:text-secondary-200">
          <BsCart
            onClick={() => setShowCart(!showCart)}
            className="p-2 w-12 h-12"
          />
          {/* TODO: Counter */}
          {/* <span className="absolute top-0 left-0 p-2 font-bold flex items-center justify-center text-primary-100 text-xs w-full h-full">
            2
          </span> */}
        </button>
      </div>

      {/* Cart Modal */}
      <CartModal showCart={showCart} setShowCart={setShowCart} />
    </nav>
  )
}
