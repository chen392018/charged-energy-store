"use client"
import { MdClose } from "react-icons/md"
import CartItem from "./CartItem"
import { Dispatch, SetStateAction } from "react"

import { useCart } from "../context/CartContext"

export default function CartModal({
  showCart,
  setShowCart,
}: {
  showCart: boolean
  setShowCart: Dispatch<SetStateAction<boolean>>
}) {
  const { cart } = useCart()
  const cartItems = [1, 2, 3, 4]
  return (
    <div
      className={`${
        showCart ? "fixed" : "hidden"
      } top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/70 px-8 z-50`}
    >
      <div className="w-full max-w-4xl p-4 space-y-8 backdrop-blur-xl rounded border border-primary-200 text-primary-100">
        <button onClick={() => setShowCart(false)} className="block ml-auto">
          <MdClose className="w-10 h-10 duration-300 hover:rotate-180" />
        </button>
        {/* cart items */}
        <div className="overflow-auto scrollbar-style">
          <ul className="max-h-[500px] px-4">
            {cart?.lines.map((lineItem, index) => (
              <li
                key={lineItem.id}
                className={`${
                  index !== cartItems.length - 1 && "border-b"
                } border-secondary-700`}
              >
                <CartItem lineItem={lineItem} />
              </li>
            ))}
          </ul>
        </div>
        {/* total */}
        <div className="py-4 border-t border-secondary-400 text-base md:text-lg">
          <p className="flex justify-between">
            <span className="uppercase">Subtotal</span>
            <span>
              ${cart?.cost.amount} {cart?.cost.currencyCode}
            </span>
          </p>

          <p className="flex justify-between uppercase">
            <span>Shipping</span>
            <span>Free</span>
          </p>
        </div>

        {/* Checkout btn */}
        <button className="action-btn-style w-full">Proceed to checkout</button>
      </div>
    </div>
  )
}
