'use client';
import { useState, useEffect } from 'react';

import { getPosts } from '../_utils/wordpress';

import Post from '../_components/Content/Post';

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
        <Post key={post.id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
