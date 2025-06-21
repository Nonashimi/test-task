import { TestStore } from "../../type";

export const handleBacket = (set: {
  (
    partial: TestStore | Partial<TestStore> | ((state: TestStore) => TestStore | Partial<TestStore>),
    replace?: false
  ): void;
  (
    state: TestStore | ((state: TestStore) => TestStore),
    replace: true
  ): void;
}) => function handleBacket(id: number, type: TypeChevron) {
  set((state) => {
    const updatedBacket = state.values.backet
      .map((item) => {
        if (item.id === id) {
          if (type === TypeChevron.minus) {
            if (item.count > 1) {
              item.total_price = (item.total_price / item.count) * (item.count - 1);
              item.count--;
              return item;
            } else {
              return null; 
            }
          } else {
            item.total_price = (item.total_price / item.count) * (item.count + 1);
            item.count++;
          }
        }
        return item;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null); // удаляем null-элементы

    return {
      values: {
        ...state.values,
        backet: updatedBacket,
      }
    };
  });
};



export enum TypeChevron {
  plus = 'PLUS',
  minus = "MINUS",
}