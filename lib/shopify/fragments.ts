const gql = String.raw

export const basicProductFragment = gql`
  fragment basicProductDetails on Product {
    id
    title
    handle
    description
    priceRange {
      minVariantPrice {
        amount
      }
    }
    images(first: 1) {
      edges {
        node {
          url
          altText
        }
      }
    }
  }
`

export const detailedProductFragment = gql`
  fragment detailedProductDetails on Product {
    ...basicProductDetails
    variants(first: 3) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }

  ${basicProductFragment}
`

export const costFragment = gql`
  fragment cost on CartCost {
    totalAmount {
      amount
      currencyCode
    }
  }
`

export const lineItemFragment = gql`
  fragment lineItem on BaseCartLine {
    id
    quantity
    merchandise {
      ... on ProductVariant {
        title
        product {
          title
        }
        price {
          amount
          currencyCode
        }
      }
    }
  }
`

export const cartFragment = gql`
  fragment cart on Cart {
    id
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

  ${costFragment}
  ${lineItemFragment}
`
