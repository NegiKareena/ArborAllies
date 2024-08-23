import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

function BlogPost() {
  const { slug } = useParams();
  console.log("Requested slug:", slug); // Debugging statement
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">{post.title}</h1>
      <img
        src={`/${post.image}`}
        alt={post.title}
        className="w-full h-48 object-cover mb-6"
      />
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

export default BlogPost;
