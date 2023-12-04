import type {
  DetailedProductFragment,
  BasicProductFragment,
  BasicProduct,
  CartCostFragment,
  LineItemFragment,
  DetailedProduct,
  CartCost,
} from "./types"

export const basicProductFragmentParser = (
  product: BasicProductFragment | DetailedProductFragment,
): BasicProduct => ({
  id: product.id,
  title: product.title,
  handle: product.handle,
  description: product.description,
  price: parseFloat(product.priceRange.minVariantPrice.amount),
  imageSrc: product.images.edges[0].node.url,
  altText: product.images.edges[0].node.altText,
})

export const detailedProductFragmentParser = (
  product: DetailedProductFragment,
): DetailedProduct => ({
  ...basicProductFragmentParser(product),
  variants: product.variants.edges.map((variant) => ({
    id: variant.node.id,
    title: variant.node.title,
    price: parseFloat(variant.node.price.amount),
    currencyCode: variant.node.price.currencyCode,
  })),
})

export const cartCostFragmentParser = (cost: CartCostFragment): CartCost => ({
  amount: parseFloat(cost.totalAmount.amount),
  currencyCode: cost.totalAmount.currencyCode,
})

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
