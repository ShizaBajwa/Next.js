// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog!</h1>
      <p>Click below to read the posts:</p>
      <ul>
        <li><Link href="/posts/post1">Go to Post 1</Link></li>
        <li><Link href="/posts/post2">Go to Post 2</Link></li>
      </ul>
    </div>
  );
}
