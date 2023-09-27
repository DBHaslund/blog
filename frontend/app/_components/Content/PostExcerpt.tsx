import Link from 'next/link';
import Card from '../UI/Card';
import { sanitize } from 'isomorphic-dompurify';

const PostExcerpt = ({ ...posts }: wpPost) => {
  return (
    <Card>
      <Link href={`posts/${posts.slug}`}>
        <h3 className=''>{posts.title.rendered}</h3>
      </Link>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(posts.excerpt.rendered),
        }}
      />
    </Card>
  );
};

export default PostExcerpt;
