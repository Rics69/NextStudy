import type { Metadata } from "next";
import Link from "next/link";

type PostProps = {
  id: string;
  title: string;
}

export const metadata: Metadata = {
  title: "Blog | Next App"
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map(({ id, title }: PostProps) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}