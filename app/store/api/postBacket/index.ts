import axios from "axios"
import { Order } from "./type";



export const postBacket = async (data: Order) => {
  const response = await axios.post('http://o-complex.com:1337/order', data);

  return response.data;
}