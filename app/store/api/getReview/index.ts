import axios from "axios"
import { Review } from "./type";



export const getReviews = async () => {
  const response = await axios.get<Review[]>('http://o-complex.com:1337/reviews');

  return response.data;
}