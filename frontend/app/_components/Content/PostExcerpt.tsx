'use client';
import Link from 'next/link';
import Card from '../UI/Card';

const PostExcerpt = ({ ...posts }: wpPost) => {
  return (
    <Card>
      <Link href={`posts/${posts.slug}`}>
        <h3 className=''>{posts.title.rendered}</h3>
      </Link>
      <div
        dangerouslySetInnerHTML={{
          __html: posts.excerpt.rendered,
        }}
      />
    </Card>
  );
};

export default PostExcerpt;
