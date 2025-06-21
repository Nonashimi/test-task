import { getReviews } from "../../api/getReview";
import { TestStore } from "../../type";

export const getReviewAction = (
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
) => {
  return async () => {
    const response = await getReviews();
    set((state) => ({
      values: {
        ...state.values,
        reviews: response, 
      },
    }));

    return response;
  };
};
