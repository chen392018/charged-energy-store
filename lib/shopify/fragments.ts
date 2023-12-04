const gql = String.raw

export const productDetailFragment = gql`
  fragment productDetail on Product {
    id
    title
    handle
    description
    tags
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

export const costFragment = gql`
  fragment cost on CartCost {
    totalAmount {
      amount
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
