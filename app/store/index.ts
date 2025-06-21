import { create } from "zustand";
import { getReviewAction } from "./actions/getReviewAction";
import { TestStore } from "./type";
import { getProductsAction } from "./actions/getProductsAction";
import { addTobacket } from "./actions/addToBacket";
import { handleBacket } from "./actions/handleBacketItem";
import { removeItem } from "./actions/removeItemBacket";
import { postBacketAction } from "./actions/postBacketActon/postBacketAction";




export const useTestStore = create<TestStore>((set) => ({
  values: {
    reviews: [],
    products: {
      amount: 0,
      items: [],
      page: 0,
      total: 0
    },
    backet: [],
  },
  actions: {
    getReview: getReviewAction(set),
    getProducts: getProductsAction(set),
    addToBacket: addTobacket(set),
    handleBacket: handleBacket(set),
    removeBacket: removeItem(set),
    postBacket: postBacketAction(),
  }
}));