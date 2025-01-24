import Posts from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

export default function Blog() {

  return (
    <>
      <h1>Blog Page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}