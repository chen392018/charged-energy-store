"use client"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

import logo from "@/public/charge-logo.png"

export default function Navbar() {
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

        <div>
          {/* <button className="p-2 border border-accent-600 rounded cart-icon"> */}
          <ShoppingCartIcon className="w-10 h-10 border border-accent-600 rounded p-2 text-accent-300 glow-sm hover:text-secondary-200 hover:border-secondary-200" />
          {/* </button> */}
        </div>
      </div>
    </nav>
  )
}
