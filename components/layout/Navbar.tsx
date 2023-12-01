"use client"
import Image from "next/image"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

import logo from "@/public/logo.svg"

export default function Navbar() {
  return (
    <nav className="bg-background-500">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Charged Energy" width={32} height={32} />
          <h1 className="text-2xl font-bold tracking-tight text-primary-900">
            Charged Energy
          </h1>
        </div>

        <div>
          <button className="p-2 border border-accent-900 rounded">
            <ShoppingCartIcon className="w-6 h-6 text-accent-900 hover:text-primary-300" />
          </button>
        </div>
      </div>
    </nav>
  )
}
