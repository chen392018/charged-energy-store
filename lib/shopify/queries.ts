const gql = String.raw

export const getProducts = gql`
  query Products {
    products(first: 3) {
      edges {
        node {
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
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`

export const getProductByHandle = gql`
  query product($handle: String!) {
    productByHandle(handle: $handle) {
      title
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
            transformedSrc
          }
        }
      }
    }
  }
`
