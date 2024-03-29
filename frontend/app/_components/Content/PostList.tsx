'use client';
import { useState } from 'react';
import PostExcerpt from '@/app/_components/Content/PostExcerpt';
import SortingSwitch from '../UI/SortingSwitch';

interface Posts {
  posts: wpPost[];
}

const PostList = (posts: Posts) => {
  const [postList, setPostList] = useState<wpPost[]>(posts.posts);
  const [sorting, setSorting] = useState<string>('newest');
  const [query, setQuery] = useState<string>('');

  const sortList = () => {
    if (sorting === 'newest') {
      setSorting('oldest');
      const sorted = postList.toSorted((a, b) => {
        return (a.date > b.date) as any;
      });
      setPostList(sorted);
    }
    if (sorting === 'oldest') {
      setSorting('newest');
      const sorted = postList.toSorted((a, b) => {
        return (a.date < b.date) as any;
      });
      setPostList(sorted);
    }
  };

  return (
    <>
      <div className='w-full flex justify-center md:justify-end'>
        <SortingSwitch
          key={sorting}
          sortList={sortList}
          sorting={sorting}
          className='mx-4'
        />
        <input
          type='text'
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          placeholder='Search...'
          className='w-[20%] min-w-[125px] mr-6 border p-1 outline-none'
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
