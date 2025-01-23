import Link from "next/link";

type Props = {
  posts: any[];
}

const Posts = ({posts}:Props) => {
  return (
    <ul>
      {posts.map(({ id, title }: any) => (
        <li key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts;