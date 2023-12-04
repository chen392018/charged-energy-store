import type {
  ProductDetailFragment,
  Product,
  CartCostFragment,
  LineItemFragment,
} from "./types"

export const productFragmentParser = (
  product: ProductDetailFragment,
): Product => ({
  id: product.id,
  title: product.title,
  handle: product.handle,
  description: product.description,
  price: parseFloat(product.priceRange.minVariantPrice.amount),
  imageSrc: product.images.edges[0].node.url,
  altText: product.images.edges[0].node.altText,
})

export const cartCostFragmentParser = (cost: CartCostFragment): number =>
  parseFloat(cost.totalAmount.amount)

type LineItemFragmentNode = {
  node: LineItemFragment
}
export const lineItemFragmentParser = (lineItems: LineItemFragmentNode[]) => {
  return lineItems.map((lineItem) => ({
    id: lineItem.node.id,
    quantity: lineItem.node.quantity,
    title: lineItem.node.merchandise.title,
    product: lineItem.node.merchandise.product.title,
    price: parseFloat(lineItem.node.merchandise.price.amount),
    currencyCode: lineItem.node.merchandise.price.currencyCode,
  }))
}
