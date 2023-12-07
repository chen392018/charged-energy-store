export const formatPrice = (
  price: number | undefined,
  currencyCode: string | undefined,
) => {
  if (price === undefined || currencyCode === undefined) {
    return ""
  }
  switch (currencyCode) {
    case "USD":
      return `$${price.toFixed(2)}`
    default:
      return `${price.toFixed(2)} ${currencyCode}`
  }
}
