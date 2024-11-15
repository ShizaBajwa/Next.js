import { useState } from 'react';

// Comments component to manage and display comments
const Comments = () => {
  const [comments, setComments] = useState([]); // State to hold comments
  const [newComment, setNewComment] = useState(''); // State for new comment input

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) { // Only add if comment is not empty
      setComments([...comments, newComment]); // Add new comment to the list
      setNewComment(''); // Clear input field after adding comment
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li> // Display each comment
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)} // Update state with input value
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Submit</button> {/* Submit button to add comment */}
    </div>
  );
};

export default Comments;
