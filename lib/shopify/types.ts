export type ProductDetailFragment = {
  id: string
  title: string
  handle: string
  description: string
  tags: string[]
  priceRange: {
    minVariantPrice: {
      amount: string
    }
  }
  images: {
    edges: {
      node: {
        url: string
        altText: string
      }
    }[]
  }
}

export type Product = {
  id: string
  title: string
  handle: string
  description: string
  price: number
  imageSrc: string
  altText: string
}

export type CartCostFragment = {
  totalAmount: {
    amount: string
  }
}

export type LineItemFragment = {
  id: string
  quantity: number
  merchandise: {
    title: string
    product: {
      title: string
    }
    price: {
      amount: string
      currencyCode: string
    }
  }
}

export type LineItem = {
  id: string
  quantity: number
  title: string
  product: string
  price: number
  currencyCode: string
}

export type Cart = {
  id: string
  checkoutUrl: string
  cost: number
  lines: LineItem[]
}
