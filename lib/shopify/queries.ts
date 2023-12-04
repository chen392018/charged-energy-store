import {
  detailedProductFragment,
  basicProductFragment,
  cartFragment,
} from "./fragments"

const gql = String.raw

export const getProducts = gql`
  query Products {
    products(first: 3) {
      edges {
        node {
          ...basicProductDetails
        }
      }
    }
  }

  ${basicProductFragment}
`

export const getProductByHandle = gql`
  query detailProduct($handle: String!) {
    product(handle: $handle) {
      ...detailedProductDetails
    }
  }

  ${detailedProductFragment}
`

export const getCartByID = gql`
  query Cart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }

  ${cartFragment}
`
