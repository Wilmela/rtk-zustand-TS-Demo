import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPosts } from "../redux/slices/postsSlice";
import { useGetPostQuery } from "../redux/services";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const [postID, setPostID] = useState<number>(0);
  const { data } = useGetPostQuery(postID);
  const [currentPost, setCurrentPost] = useState<{
    id: number;
    title: string;
    body: string;
  }>({ id: postID, title: "", body: "" });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPost(data);
  }, [data]);

  const handlePostID = () => {
    setPostID(postID + 1);
  };

  console.log(currentPost?.title);

  return (
    <div style={{ marginTop: 20 }}>
      <ul style={{ listStyle: "none" }}>
        {posts.slice(0, 5).map((post) => (
          <li
            style={{
              border: "1px solid gray",
              padding: 10,
              borderRadius: 5,
              marginBlock: 5,
            }}
            key={post.id}
          >
            {post.title}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 20 }}>
        <h2>Post by id</h2>
        <button type="button" onClick={handlePostID}>
          Post
        </button>
        <div style={{ maxWidth: 500 }}>
          <p style={{ fontSize: "18px", fontWeight: 700 }}>
            {currentPost?.title}
          </p>
          <p>{currentPost?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
