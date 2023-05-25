import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type Post = {
  id: number;
  title: string;
};

type InitialState = {
  loading: boolean;
  posts: Post[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  posts: [],
  error: "",
};

const getPosts = createAsyncThunk("users/getPosts", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((data) => data );
});

const postsLice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      }
    );
    
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message || "something went wrong";
    });
  },
});

export default postsLice.reducer;
export { getPosts };
