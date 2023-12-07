"use client"
import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline"

import { useState, useEffect, useRef } from "react"
import {
  storefront,
  cartCostFragmentParser,
  lineItemFragmentParser,
  addToCart,
  removeFromCart,
} from "@/lib/shopify"
import { useCart } from "@/components/context/CartContext"

const gql = String.raw

const variantsQuery = gql`
  query Products {
    products(first: 3) {
      edges {
        node {
          id
          title
          variants(first: 3) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`

const getVariants = async () => {
  const { products } = await storefront(variantsQuery)
  let variants: any[] = []
  products.edges.forEach((product: any) => {
    const productTitle = product.node.title
    const newVars = product.node.variants.edges.map((newVar: any) => ({
      id: newVar.node.id,
      product: productTitle,
      title: newVar.node.title,
      price: newVar.node.price.amount,
      currencyCode: newVar.node.price.currencyCode,
    }))
    variants.push(...newVars)
  })
  return variants
}

export default function TestCart() {
  const initiated = useRef<boolean>(false)
  const {
    cart,
    handleAddToCart,
    handleEmptyCart,
    handleRemoveItem,
    handleUpdateItem,
  } = useCart()

  // Only for development purposes, does not need to be recreated
  const [variants, setVariants] = useState<any[]>([])
  const [selectedVariantID, setSelectedVariantID] = useState<string>("")

  useEffect(() => {
    if (!initiated.current) {
      initiated.current = true

      // Just for drop down menu in development
      getVariants().then((vars) => setVariants(vars))
    }
  }, [])

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
          className="p-2 text-accent-300 rounded border border-accent-300"
          onClick={handleEmptyCart}
        >
          Empty Cart
        </button>
        <button
          className="p-2 bg-secondary-300 text-primary-700 rounded border"
          onClick={() => handleAddToCart(selectedVariantID)}
        >
          Add Item
        </button>
        <select
          value={selectedVariantID}
          onChange={(e) => setSelectedVariantID(e.target.value)}
          className="text-primary-700 bg-secondary-300"
        >
          <option value="">Select a variant</option>
          {variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.product} - {variant.title} - ${variant.price}{" "}
              {variant.currencyCode}
            </option>
          ))}
        </select>
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
            <XCircleIcon
              className="w-4 h-4 text-red-500 cursor-pointer"
              onClick={() => handleRemoveItem(line.id)}
            />
            <PlusIcon
              className="w-4 h-4 text-green-500 cursor-pointer"
              onClick={() => handleUpdateItem(line.id, line.quantity + 1)}
            />
            <MinusIcon
              className="w-4 h-4 text-green-500 cursor-pointer"
              onClick={() => handleUpdateItem(line.id, line.quantity - 1)}
            />
          </div>
        ))}
      </div>
      <p>
        Total Cost: ${cart?.cost.amount} {cart?.cost.currencyCode}
      </p>
    </div>
  )
}

// Need to create a cart with the API
