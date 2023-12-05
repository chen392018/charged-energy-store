import { Cart } from "@/lib/shopify/types"

export interface CartContextValue {
  cart: Cart | null
  handleAddToCart: (variantID: string) => Promise<void>
  handleEmptyCart: () => Promise<void>
  handleRemoveItem: (lineID: string) => Promise<void>
  handleUpdateItem: (lineID: string, quantity: number) => Promise<void>
}
