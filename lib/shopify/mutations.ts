import { cartFragment } from "./fragments"

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
        ...cart
      }
    }
  }

  ${cartFragment}
`
