import { getProducts } from "../../api/getProducts";
import { TestStore } from "../../type";

export const getProductsAction = (
  set: {
    (
      partial: TestStore | Partial<TestStore> | ((state: TestStore) => TestStore | Partial<TestStore>),
      replace?: false
    ): void;
    (
      state: TestStore | ((state: TestStore) => TestStore),
      replace: true
    ): void;
  }
) => async function getProductsAction(params: Parameters<typeof getProducts>) {
  const response = await getProducts(...params);
  console.log("get products");
  set((state) => ({
    values: {
      ...state.values,
      products: {
        ...response,
        items: state.values.products.page === response.page
          ? [...state.values.products.items]
          : [...state.values.products.items, ...response.items],
      },
    },
  }));

  return response;
};

