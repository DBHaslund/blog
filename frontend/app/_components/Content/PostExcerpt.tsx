import Link from 'next/link';
import DOMPurify from 'dompurify';

const PostExcerpt = (props: wpPost) => {
  console.log(props);

  return (
    <div className='border'>
      <Link href={`posts/${props.slug}`}>
        <h3 className='underline'>{props.title.rendered}</h3>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(props.excerpt.rendered),
        }}
      />
    </div>
  );
};

export default PostExcerpt;
