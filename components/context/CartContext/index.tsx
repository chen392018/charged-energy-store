"use client"
import { createContext, useContext, useEffect, useState, useRef } from "react"

import {
  // Queries and Mutations
  addToCart,
  createCart,
  getCartByID,
  removeFromCart,
  updateCartItem,

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

  const handleEmptyCart = async () => {
    window.localStorage.removeItem("charge:shopify:cart")
    setCart(null)
    await handleCreateCart()
  }

  const handleAddToCart = async (variantID: string) => {
    // Ensure the cart exists
    if (!cart) {
      throw new Error("Cart does not exist")
    }

    if (!variantID) {
      throw new Error("Variant ID is required. Received: " + variantID)
    }

    // Add a product variant to the cart
    const { cartLinesAdd, errors } = await storefront(addToCart, {
      cartId: cart?.id,
      variantId: variantID,
    })
    if (errors) {
      throw errors
    }

    // Save the cart to state
    setCart({
      ...cart,
      cost: cartCostFragmentParser(cartLinesAdd.cart.cost),
      lines: lineItemFragmentParser(cartLinesAdd.cart.lines.edges),
    })
  }

  const handleRemoveItem = async (lineID: string) => {
    // Ensure that the cart exists before trying to remove an item
    if (!cart) {
      throw new Error("Cart does not exist")
    }

    if (!lineID) {
      throw new Error("Line ID is required. Received: " + lineID)
    }

    const { cartLinesRemove, errors } = await storefront(removeFromCart, {
      cartId: cart?.id,
      lineId: lineID,
    })
    if (errors) {
      throw errors
    }
    setCart({
      ...cart,
      cost: cartCostFragmentParser(cartLinesRemove.cart.cost),
      lines: lineItemFragmentParser(cartLinesRemove.cart.lines.edges),
    })
  }

  const handleUpdateItem = async (lineID: string, quantity: number) => {
    // Ensure that the cart exists before trying to update an item
    if (!cart) {
      throw new Error("Cart does not exist")
    }

    if (!lineID) {
      throw new Error("Line ID is required. Received: " + lineID)
    }

    if (typeof quantity !== "number") {
      throw new Error("Quantity must be a number. Received: " + quantity)
    }

    const { cartLinesUpdate, errors } = await storefront(updateCartItem, {
      cartId: cart?.id,
      lineId: lineID,
      quantity: quantity,
    })
    if (errors) {
      throw errors
    }
    setCart({
      ...cart,
      cost: cartCostFragmentParser(cartLinesUpdate.cart.cost),
      lines: lineItemFragmentParser(cartLinesUpdate.cart.lines.edges),
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleEmptyCart,
        handleAddToCart,
        handleRemoveItem,
        handleUpdateItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContextProvider, useCart }
