'use client'
import Link from 'next/link';
import DOMPurify from 'dompurify';
import Card from '../UI/Card';

const PostExcerpt = ({ ...posts}: wpPost) => {
  return (
    <Card>
      <Link href={`posts/${posts.slug}`}>
        <h3 className=''>{posts.title.rendered}</h3>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(posts.excerpt.rendered),
        }}
      />
    </Card>
  );
};

export default PostExcerpt;
