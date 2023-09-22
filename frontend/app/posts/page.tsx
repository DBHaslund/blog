'use client';
import { useState, useEffect } from 'react';

import { getPosts } from '@/app/_utils/wordpress';

import PostExcerpt from '@/app/_components/Content/PostExcerpt';

const Posts = () => {
  const [posts, setPosts] = useState([] as wpPost[]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data: wpPost[] = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, [getPosts]);

  return (
    <section>
      {posts.map((post) => (
        <PostExcerpt key={post.id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
