// pages/posts/[postId].js
// pages/posts/[postId].js
export async function getStaticProps(context) {
    const { postId } = context.params;
    const postData = { id: postId, title: `Post ${postId}`, content: `This is content for ${postId}` };
  
    return { props: { postData } };
  }
  
  export async function getStaticPaths() {
    return {
      paths: [{ params: { postId: 'post1' } }, { params: { postId: 'post2' } }],
      fallback: false,
    };
  }
  
  const Post = ({ postData }) => (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
  
  export default Post;
  