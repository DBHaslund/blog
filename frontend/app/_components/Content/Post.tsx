import { sanitize } from 'isomorphic-dompurify';

const Post = ({ ...post }: wpPost) => {
  return (
  
      <main>
        <h1>{post.title.rendered}</h1>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: sanitize(post.content.rendered),
          }}
        />
      </main> 
      )
};

export default Post;