import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(mapped);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <>
        <Header />
        <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
            <PostCard key={index} {...post} />
        ))}
        </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: { posts },
  };
};

export default PostsPage;
