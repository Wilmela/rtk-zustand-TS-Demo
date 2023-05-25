import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";

interface Post {
  id: number;
  title: string;
  body: string;
}
type PostsResponse = Post[];

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query<PostsResponse, number>({
      query: (id: number) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostQuery } = postApi;
