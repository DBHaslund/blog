import DOMPurify from 'dompurify';

const Post = (props: wpPost) => {
  console.log(props);

  return (
    <div className='border'>
      <h3 className='underline'>{props.title.rendered}</h3>
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.excerpt.rendered) }} />
    </div>
  );
};

export default Post;
