import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type INITIAL = {
  numberOfBooks: number;
};
const initialState: INITIAL = {
  numberOfBooks: 20,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    orderBooks: (state, action: PayloadAction<number>) => {
      state.numberOfBooks -= action.payload;
    },

    restockBooks: (state, action: PayloadAction<number>) => {
      state.numberOfBooks += action.payload;
    },
  },
});

export default booksSlice.reducer;
export const { orderBooks, restockBooks } = booksSlice.actions;
