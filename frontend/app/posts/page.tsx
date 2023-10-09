import { getPosts } from '@/app/_utils/wordpress';
import Container from '../_components/UI/Container';
import PostList from '../_components/Content/PostList';

const Posts = async () => {
  const posts: wpPost[] = await getPosts();

  return (
    <section>
      <Container className=''>
        <PostList posts={posts} />
      </Container>
    </section>
  );
};

export default Posts;
