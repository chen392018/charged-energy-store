import { cartFragment } from "./fragments"

const gql = String.raw

// Create a cart for the user
export const createCart = gql`
  mutation createCart {
    cartCreate {
      cart {
        ...cart
      }
    }
  }

  ${cartFragment}
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

export const removeFromCart = gql`
  mutation removeFromCart($cartId: ID!, $lineId: ID!) {
    cartLinesRemove(cartId: $cartId, lineIds: [$lineId]) {
      cart {
        ...cart
      }
    }
  }

  ${cartFragment}
`

export const updateCartItem = gql`
  mutation updateCartItem($cartId: ID!, $lineId: ID!, $quantity: Int!) {
    cartLinesUpdate(
      cartId: $cartId
      lines: [{ id: $lineId, quantity: $quantity }]
    ) {
      cart {
        ...cart
      }
    }
  }

  ${cartFragment}
`
