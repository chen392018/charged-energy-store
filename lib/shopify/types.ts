export interface BasicProductFragment {
  id: string
  title: string
  handle: string
  description: string
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

export interface DetailedProductFragment extends BasicProductFragment {
  variants: {
    edges: {
      node: {
        id: string
        title: string
        price: {
          amount: string
          currencyCode: string
        }
      }
    }[]
  }
}

export interface BasicProduct {
  id: string
  title: string
  handle: string
  description: string
  price: number
  imageSrc: string
  altText: string
}

export interface ProductVariant {
  id: string
  title: string
  price: number
  currencyCode: string
}

export interface DetailedProduct extends BasicProduct {
  variants: ProductVariant[]
}

export type CartCostFragment = {
  totalAmount: {
    amount: string
    currencyCode: string
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

export type CartCost = {
  amount: number
  currencyCode: string
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
  cost: CartCost
  lines: LineItem[]
}
