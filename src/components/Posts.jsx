// src/components/Posts.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const limit = 10; // Shows 10 posts per page

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${page * limit}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  if (loading) return <p className="text-center">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Latest Posts</h2>
      {posts.map((post) => (
        <Card key={post.id}>
          <h3 className="text-lg font-bold mb-1">{post.title}</h3>
          <p>{post.body}</p>
        </Card>
      ))}
      <div className="flex justify-between">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
