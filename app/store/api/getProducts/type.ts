export type ProductItem = {
  id: number,
  image_url: string,
  title: string,
  description: string,
  price: number,
}


export type Product = {
  amount: number,
  items: ProductItem[],
  page: number,
  total: number,
}