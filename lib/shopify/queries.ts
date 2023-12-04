import {
  productDetailFragment,
  lineItemFragment,
  costFragment,
} from "./fragments"

const gql = String.raw

export const getProducts = gql`
  query Products {
    products(first: 3) {
      edges {
        node {
          ...productDetail
        }
      }
    }
  }

  ${productDetailFragment}
`

export const getProductByHandle = gql`
  query detailProduct($handle: String!) {
    product(handle: $handle) {
      ...productDetail
    }
  }

  ${productDetailFragment}
`

export const getCartByID = gql`
  query Cart($cartId: ID!) {
    cart(id: $cartId) {
      checkoutUrl
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

  ${costFragment}
  ${lineItemFragment}
`
