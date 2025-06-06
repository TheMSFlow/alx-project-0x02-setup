import Link from "next/link"
import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";


const Home:React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Getting Started", content: "Learn how to begin your journey with our platform." },
    { title: "Features", content: "Explore all the powerful tools we offer." },
    { title: "Support", content: "We're here to help, 24/7." },
  ]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };
    return (
        <>
            <h1>Home page</h1>
            <nav className="flex flex-row gap-4">
                <Link href={'/home'}>Go to Home page</Link>
                <Link href={'/about'}>Go to About page</Link>
                <Link href={'/posts'}>Go to About page</Link>
            </nav>
             <main className="p-8">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mb-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
                >
                    Add New Post
                </button>

                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddPost}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, idx) => (
                    <Card key={idx} title={post.title} content={post.content} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Home