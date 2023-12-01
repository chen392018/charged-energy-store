import { getProducts, getProductByHandle } from "./queries"

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
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export { getProducts, getProductByHandle }