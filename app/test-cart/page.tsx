"use client"
import { useState, useEffect, useRef } from "react"
import {
  storefront,
  createCart,
  getCartByID,
  cartCostFragmentParser,
  lineItemFragmentParser,
  addToCart,
} from "@/lib/shopify"

import type { Cart } from "@/lib/shopify/types"

export default function TestCart() {
  const initiated = useRef<boolean>(false)
  const [cart, setCart] = useState<Cart | null>(null)

  useEffect(() => {
    const getCart = async () => {
      // Read local storage for the cart data
      let localStorageResult = window.localStorage.getItem(
        "charge:shopify:cart",
      )

      // Check if the cart exists in local storage
      if (localStorageResult) {
        await handleCartFromStorage(localStorageResult)

        // Otherwise, if the cart isn't already in local storage
      } else {
        // Create the cart on Shopifys backend
        await handleCreateCart()
      }
    }

    if (!initiated.current) {
      initiated.current = true
      getCart()
    }
  }, [])

  const handleCartFromStorage = async (stringCart: string) => {
    let localCartData = JSON.parse(stringCart)
    // Fetch the contents of the cart from shopify
    const { data } = await storefront(getCartByID, {
      cartId: localCartData.id,
    })

    // Save the cart to state
    setCart({
      ...localCartData,
      cost: cartCostFragmentParser(data.cart.cost),
      lines: lineItemFragmentParser(data.cart.lines.edges),
    })
  }

  const handleCreateCart = async () => {
    const { data } = await storefront(createCart)
    let localCartData = data.cartCreate.cart

    // Save the cart to state
    setCart({
      ...localCartData,
      cost: 0,
      lines: [],
    })

    // Save the cart to local storage to persist across page refreshes
    window.localStorage.setItem(
      "charge:shopify:cart",
      JSON.stringify(localCartData),
    )
  }
  const handleAddToCart = async () => {
    // Ensure the cart exists
    if (!cart) return

    // Add a product variant to the cart
    const VARIANT_ID = "gid://shopify/ProductVariant/44316279963869"
    const { data } = await storefront(addToCart, {
      cartId: cart?.id,
      variantId: VARIANT_ID,
    })

    // Save the cart to state
    setCart({
      ...cart,
      cost: cartCostFragmentParser(data.cartLinesAdd.cart.cost),
      lines: lineItemFragmentParser(data.cartLinesAdd.cart.lines.edges),
    })
  }

  const handleEmptyCart = async () => {
    window.localStorage.removeItem("charge:shopify:cart")
    setCart(null)
    await handleCreateCart()
  }

  return (
    <div className="text-accent-300 flex flex-col mx-auto items-center gap-8">
      <h1 className="text-3xl">Test Cart Page</h1>
      <div className="flex gap-16 items-center">
        <p>
          Checkout URL: <span className="text-sm">{cart?.checkoutUrl}</span>
        </p>
        <p>
          Cart ID: <span className="text-sm">{cart?.id}</span>
        </p>
      </div>
      <div className="flex gap-16 items-center">
        <button
          className="p-2 bg-secondary-300 rounded border"
          onClick={handleAddToCart}
        >
          Add Item
        </button>
        <button
          className="p-2 bg-secondary-300 rounded border"
          onClick={handleEmptyCart}
        >
          Empty Cart
        </button>
      </div>
      <h3 className="text-2xl">Cart Contents</h3>
      <a className="text-sm px-16" href={cart?.checkoutUrl}>
        Checkout URL
      </a>
      <p>Cart ID: {cart?.id}</p>
      <div className="flex flex-col items-center">
        {cart?.lines.map((line) => (
          <div key={line.id} className="flex gap-8">
            <p>
              {line.product} ({line.title})
            </p>
            <p>{line.quantity}</p>
            <p>
              ${line.price * line.quantity} {line.currencyCode}
            </p>
          </div>
        ))}
      </div>
      <p>Total Cost: ${cart?.cost} USD</p>
    </div>
  )
}

// Need to create a cart with the API
