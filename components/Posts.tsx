"use client";

import Link from "next/link";
import { usePosts } from "@/store";
import { useEffect } from "react";

const Posts = () => {
  const posts = usePosts((state) => state.posts);
  const loading = usePosts((state) => state.loading);
  const getAllPosts = usePosts((state) => state.getAllPosts);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (loading ? <h3>Loading...</h3> :
      <ul>
        {posts.map(({ id, title }: any) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
  );
};

export default Posts;