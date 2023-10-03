import { getDate } from '@/app/_utils/utils';
import { sanitize } from 'isomorphic-dompurify';
import Link from 'next/link';

const Post = ({ ...post }: wpPost) => {
  const date = getDate(post.date)

  return (
    <article className='px-12 pb-12'>
      <h1 className='text-center text-2xl font-semibold m-4 mb-12'>
        {post.title.rendered}
      </h1>
      <div className='flex justify-center gap-20 mb-8 py-4 border-y'>
        <Link
          href={post._links.author[0].href}
          className='underline hover:opacity-80'
        >
          <p>{post.author}</p>
        </Link>
        <p>{date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(post.content.rendered),
        }}
      />
    </article>
  );
};

export default Post;
