import { sanitize } from 'isomorphic-dompurify';
import { getPost } from '@/app/_utils/wordpress';


const Intro = async () => {
  const post = await getPost('intro');

  return (
    <article className='px-12 pb-12'>
      <h1 className='text-center text-2xl font-semibold m-4 mb-12'>
        {post.title.rendered}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(post.content.rendered),
        }}
      />
    </article>
  );
};

export default Intro;
