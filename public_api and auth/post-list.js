export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    return {
      props: {
        posts: posts.slice(0, 10), // Only the first 10 posts
      },
    };
  }
  
  export default function PostList({ posts }) {
    return (
      <div>
        <h1>Posts List (SSG)</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  