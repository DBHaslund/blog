import { getPosts } from '@/app/_utils/wordpress';
import PostExcerpt from '@/app/_components/Content/PostExcerpt';
import Container from '../_components/UI/Container';

const Posts = async () => {
  const posts: wpPost[] = await getPosts();

  return (
    <section>
      <Container className=''>
      {posts.map((post) => (
        <PostExcerpt key={post.id} {...post} />
      ))}
      </Container>
    </section>
  );
};

export default Posts;
