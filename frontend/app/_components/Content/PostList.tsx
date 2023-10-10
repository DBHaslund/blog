'use client';
import { useState } from 'react';
import PostExcerpt from '@/app/_components/Content/PostExcerpt';

interface Posts {
  posts: wpPost[];
}

const PostList = (posts: Posts) => {
  const [postList, setPostList] = useState<wpPost[]>(posts.posts);
  const [sorting, setSorting] = useState<string>('newest');
  const [query, setQuery] = useState<string>('');

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

  return (
    <>
      <div className='w-full flex justify-end'>
        <button onClick={sortList} className='w-1/12 mx-4 border'>
          Sort
        </button>
        <input
          type='text'
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          className='w-2/12 mr-6 border'
        />
      </div>
      {postList
        .filter((post) => {
          if (query === '') {
            return post;
          } else if (
            post.title.rendered.toLowerCase().includes(query.toLowerCase())
          ) {
            return post;
          }
        })
        .map((post) => (
          <PostExcerpt key={post.id} {...post} />
        ))}
    </>
  );
};

export default PostList;
