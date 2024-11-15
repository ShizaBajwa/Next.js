// pages/posts/[slug].js
import { useState } from 'react';
import { useRouter } from 'next/router';

// Fetch paths for dynamic routes
export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'post1' } },
    { params: { slug: 'post2' } },
  ];
  return { paths, fallback: false }; // 'false' means only the listed paths are valid
}

// Fetching the data for a post based on the slug
export async function getStaticProps({ params }) {
  const postData = {
    post1: {
      title: 'Title for Post 1',
      content: 'This is the content for the first blog post.',
    },
    post2: {
      title: 'Title for Post 2',
      content: 'This is the content for the second blog post.',
    },
  };
  return { props: { postData: postData[params.slug] } }; // Return data based on the slug
}

// Comments Component
const Comments = () => {
  const [comments, setComments] = useState([]); // Array of comments
  const [newComment, setNewComment] = useState(''); // New comment being typed

  // Function to handle comment submission
  const handleAddComment = () => {
    if (newComment.trim()) { // Only add if there's a comment
      setComments([...comments, newComment]);
      setNewComment(''); // Clear the input field
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li> // Render each comment
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)} // Update input state
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Submit</button> {/* Add comment button */}
    </div>
  );
};

// Main Post Page Component
export default function Post({ postData }) {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
      <Comments /> {/* Insert the comments section */}
    </div>
  );
}
