// src/components/Blog.jsx

import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">Gardening Basics</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
              <Link to={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
