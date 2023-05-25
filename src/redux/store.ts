import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/slices/bookSlice";
import penReducer from "../redux/slices/penSlice";
import postsReducer from "./slices/postsSlice";

import { postApi } from "./services";

const store = configureStore({
  reducer: {
    books: booksReducer,
    pen: penReducer,
    posts: postsReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
