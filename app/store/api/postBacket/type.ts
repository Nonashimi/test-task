

export type Order = {
  phone: string,
  cart: Cart[],
}

type Cart = {
  id: number,
  quantity: number,
}