import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderBooks } from "./bookSlice";

type INITIAL = {
  numberOfPen: number;
};
const initialState: INITIAL = {
  numberOfPen: 20,
};

const penSlice = createSlice({
  name: "pen",
  initialState,
  reducers: {
    orderPen: (state, action: PayloadAction<number>) => {
      state.numberOfPen -= action.payload;
    },

    restockPen: (state, action: PayloadAction<number>) => {
      state.numberOfPen += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderBooks, (state) => {
      state.numberOfPen--;
    });
  },
});

export default penSlice.reducer;
export const { orderPen, restockPen } = penSlice.actions;
