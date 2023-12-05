import { getProducts, getProductByHandle, getCartByID } from "./queries"
import {
  createCart,
  addToCart,
  removeFromCart,
  updateCartItem,
} from "./mutations"
import {
  basicProductFragmentParser,
  detailedProductFragmentParser,
  lineItemFragmentParser,
  cartCostFragmentParser,
} from "./parsers"

export const storefront = async (
  query: string,
  variables?: any,
): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_STOREFRONT_API_URL || ""
  const apiKey = process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN || ""
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": apiKey,
      },
      body: JSON.stringify({ query, variables }),
    })
    const payload = await response.json()

    // Catch and throw any errors that are returned from the server
    if (payload.errors) {
      console.error(payload.errors)
      return { errors: payload.errors }
    }

    return payload.data
    // Catch any error
  } catch (error) {
    console.error(error)
    return { errors: [error] }
  }
}

export { getProducts, getProductByHandle, getCartByID }
export { createCart, addToCart, removeFromCart, updateCartItem }
export {
  basicProductFragmentParser,
  detailedProductFragmentParser,
  lineItemFragmentParser,
  cartCostFragmentParser,
}
