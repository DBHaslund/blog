import Link from 'next/link';
import Card from '../UI/Card';
import { sanitize } from 'isomorphic-dompurify';
import { getDate } from '@/app/_utils/utils';

const PostExcerpt = ({ ...post }: wpPost) => {
  const date = getDate(post.date)

  return (
    <div className='md:w-[30%]'>
      <Link href={`posts/${post.slug}`} >
        <Card className='hover:opacity-80'>
          <h3 className='text-lg font-semibold border-b mb-2 pb-2 text-center px-2'>{post.title.rendered}</h3>
          <div
            className='line-clamp-[16] px-2'
            dangerouslySetInnerHTML={{
              __html: sanitize(post.excerpt.rendered),
            }}
          />
          <p className='text-center border-t mt-2 pt-2'>{date}</p>
        </Card>
      </Link>
    </div>
  );
};

export default PostExcerpt;
