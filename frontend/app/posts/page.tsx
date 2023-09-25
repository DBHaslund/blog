import { getPosts } from '@/app/_utils/wordpress';
import PostExcerpt from '@/app/_components/Content/PostExcerpt';

const Posts = async () => {
  const posts: wpPost[] = await getPosts();

  return (
    <section>
      {posts.map((post) => (
        <PostExcerpt key={post.id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
