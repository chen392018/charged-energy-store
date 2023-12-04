import { getProducts, getProductByHandle, getCartByID } from "./queries"
import { createCart, addToCart, removeFromCart } from "./mutations"
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
  console.log(variables)
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": apiKey,
      },
      body: JSON.stringify({ query, variables }),
    })
    console.log(response.status)
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export { getProducts, getProductByHandle, getCartByID }
export { createCart, addToCart, removeFromCart }
export {
  basicProductFragmentParser,
  detailedProductFragmentParser,
  lineItemFragmentParser,
  cartCostFragmentParser,
}
