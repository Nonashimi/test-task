import { TestStore } from "../../type";


export const removeItem = (set: {
  (
    partial: TestStore | Partial<TestStore> | ((state: TestStore) => TestStore | Partial<TestStore>),
    replace?: false
  ): void;
  (
    state: TestStore | ((state: TestStore) => TestStore),
    replace: true
  ): void;
}) => function addToBacket(id: number) {
  set((state) => ({
    values: {
      ...state.values,
      backet: [...state.values.backet.filter(b => b.id !== id)],
    }
  }));
};