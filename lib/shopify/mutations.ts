import { lineItemFragment, costFragment } from "./fragments"

const gql = String.raw

export const createCart = gql`
  mutation createCart {
    cartCreate {
      cart {
        checkoutUrl
        id
      }
    }
  }
`

export const addToCart = gql`
  mutation addToCart($cartId: ID!, $variantId: ID!) {
    cartLinesAdd(
      cartId: $cartId
      lines: [{ quantity: 1, merchandiseId: $variantId }]
    ) {
      cart {
        cost {
          ...cost
        }
        lines(first: 100) {
          edges {
            node {
              ...lineItem
            }
          }
        }
      }
    }
  }

  ${lineItemFragment}
  ${costFragment}
`
