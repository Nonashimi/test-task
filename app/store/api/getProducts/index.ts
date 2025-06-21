import axios from "axios"
import { Product } from "./type";



export const getProducts = async (page: number) => {
  const response = await axios.get<Product>(`http://o-complex.com:1337/products?page=${page}&page_size=20`);

  return response.data;
}