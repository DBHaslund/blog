import { notFound } from 'next/navigation';
import Post from '@/app/_components/Content/Post';
import { getPost, getSlugs } from '@/app/_utils/wordpress';

const PostPage = async ({ params: { slug } }: Slug) => {
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Post {...post} />
    </>
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
