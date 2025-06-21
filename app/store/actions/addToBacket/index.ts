import { Backet, TestStore } from "../../type";


export const addTobacket = (set: {
  (
    partial: TestStore | Partial<TestStore> | ((state: TestStore) => TestStore | Partial<TestStore>),
    replace?: false
  ): void;
  (
    state: TestStore | ((state: TestStore) => TestStore),
    replace: true
  ): void;
}) => function addToBacket(val: Backet) {
  set((state) => ({
    values: {
      ...state.values,
      backet: [...state.values.backet, val],
    }
  }));
};