import { Cart } from "@/lib/shopify/types"

export interface CartContextValue {
  cart: Cart | null
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>
  handleCreateCart: () => Promise<void>
}
