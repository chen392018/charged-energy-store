"use client"
import { createContext, useContext, useEffect, useState, useRef } from "react"

import {
  // Queries and Mutations
  createCart,
  getCartByID,

  // Storefront client
  storefront,

  // Parsers
  cartCostFragmentParser,
  lineItemFragmentParser,
} from "@/lib/shopify"

import type { Cart } from "@/lib/shopify/types"
import type { CartContextValue } from "./types"

const CartContext = createContext<CartContextValue>({} as CartContextValue)

function CartContextProvider({ children }: { children: React.ReactNode }) {
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
    const { cart, errors } = await storefront(getCartByID, {
      cartId: localCartData.id,
    })
    if (errors) {
      throw errors
    }

    // Save the cart to state
    setCart({
      ...localCartData,
      cost: cartCostFragmentParser(cart.cost),
      lines: lineItemFragmentParser(cart.lines.edges),
    })
  }

  const handleCreateCart = async () => {
    const { cartCreate, errors } = await storefront(createCart)
    if (errors) {
      throw errors
    }

    let localCartData = cartCreate.cart

    // Save the cart to state
    setCart({
      ...localCartData,
      cost: cartCostFragmentParser(localCartData.cost),
      lines: lineItemFragmentParser(localCartData.lines.edges),
    })

    // Save the cart to local storage to persist across page refreshes
    window.localStorage.setItem(
      "charge:shopify:cart",
      JSON.stringify(localCartData),
    )
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleCreateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContextProvider, useCart }
