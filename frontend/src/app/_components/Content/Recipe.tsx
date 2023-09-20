import DOMPurify from 'dompurify';

const Recipe = (props: wpRecipe) => {
  return (
    <div className='border'>
      <h3 className='underline'>{props.title.rendered}</h3>
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.acm_fields.ingredientList) }} />
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.acm_fields.instructions) }} />
    </div>
  );
};

export default Recipe;
