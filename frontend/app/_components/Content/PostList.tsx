'use client';
import { useState } from 'react';
import PostExcerpt from '@/app/_components/Content/PostExcerpt';

interface Posts {
  posts: wpPost[];
}

const PostList = (posts: Posts) => {
  const [postList, setPostList] = useState<wpPost[]>(posts.posts);
  const [sorting, setSorting] = useState<string>('newest');
  // const [inputValue, setInputValue] = useState<string>('');

  // console.log(postList)

  const sortList = () => {
    if (sorting === 'newest') {
      setSorting('oldest');
      const sorted = postList.toSorted(function (a, b) {
        return a.date > b.date;
      });
      setPostList(sorted);
    }
    if (sorting === 'oldest') {
      setSorting('newest');
      const sorted = postList.toSorted(function (a, b) {
        return a.date < b.date;
      });
      setPostList(sorted);
    }
  };

  // const searchHandler = (e: any) => {
  //   setInputValue(e.target.value)
  //   const result = postList.filter((post) => post.title.rendered.includes(inputValue))
  //   console.log(result)
  //   setPostList(result)
  // }

  return (
    <>
      <div className='w-full flex justify-end'>
        <button onClick={sortList} className='w-1/12 mx-4 border'>
          Sort
        </button>
        {/* <input type="text" value={inputValue} onChange={(e: any) => searchHandler(e)} className='w-2/12 mr-6 border' /> */}
      </div>
      {postList.map((post) => (
        <PostExcerpt key={post.id} {...post} />
      ))}
    </>
  );
};

export default PostList;
