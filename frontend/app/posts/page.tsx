import { getPosts } from '@/app/_utils/wordpress';
import Container from '../_components/UI/Container';
import PostList from '../_components/Content/PostList';

const Posts = async () => {
  const posts: wpPost[] = await getPosts();

  return (
    <section>
      <Container className='w-4/5 m-auto'>
        <h1 className='hover:opacity-80 text-3xl font-semibold underline decoration-white decoration-1 w-full text-center'>
          Posts
        </h1>
        <PostList posts={posts} />
      </Container>
    </section>
  );
};

export default Posts;
