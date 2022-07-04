import Link from "next/link";

const PostsPage = () => {
  return (
    <div>
      <div>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
      </div>
      <h1>This is posts page.</h1>
    </div>
  );
};

export default PostsPage;
