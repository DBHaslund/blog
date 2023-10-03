import { notFound } from 'next/navigation';
import Post from '@/app/_components/Content/Post';
import { getPost, getSlugs } from '@/app/_utils/wordpress';
import Container from '@/app/_components/UI/Container';
import Card from '@/app/_components/UI/Card';

const PostPage = async ({ params: { slug } }: Slug) => {
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <Container className='w-4/5 m-auto'>
      <Card>
        <Post {...post} />
      </Card>
    </Container>
  );
};

export const generateStaticParams = async () => {
  const postSlugs = await getSlugs('post');
  return postSlugs;
};

export default PostPage;

export const generateMetadata = async ({ params: { slug } }: Slug) => {
  const post = await getPost(slug);

  return {
    title: post.title.rendered,
  };
};
