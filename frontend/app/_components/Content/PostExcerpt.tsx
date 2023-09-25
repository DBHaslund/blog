'use client'
import Link from 'next/link';
import DOMPurify from 'dompurify';

const PostExcerpt = ({ ...posts}: wpPost) => {

  return (
    <div className='border'>
      <Link href={`posts/${posts.slug}`}>
        <h3 className='underline'>{posts.title.rendered}</h3>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(posts.excerpt.rendered),
        }}
      />
    </div>
  );
};

export default PostExcerpt;
