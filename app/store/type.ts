import { addTobacket } from "./actions/addToBacket";
import { getProductsAction } from "./actions/getProductsAction";
import { getReviewAction } from "./actions/getReviewAction";
import { handleBacket } from "./actions/handleBacketItem";
import { postBacketAction } from "./actions/postBacketActon/postBacketAction";
import { removeItem } from "./actions/removeItemBacket";
import { Product } from "./api/getProducts/type";
import { Review } from "./api/getReview/type";

export type TestStore = {
  values: {
    reviews: Review[],
    products: Product,
    backet: Backet[],
  },
  actions: {
    getReview: ReturnType <typeof getReviewAction>, 
    getProducts: ReturnType <typeof getProductsAction>,
    addToBacket: ReturnType <typeof addTobacket>,
    handleBacket: ReturnType <typeof handleBacket>,
    removeBacket: ReturnType <typeof removeItem>,
    postBacket: ReturnType <typeof postBacketAction>,
  }
};



export type Backet = {
  id: number,
  title: string,
  count: number,
  total_price: number,
}