'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DOMPurify from 'dompurify';

import { getPost } from '@/app/_utils/wordpress';

const PostPage = () => {
  const [post, setPost] = useState({} as wpPost);
  const path: string = usePathname().slice(7);
  console.log(post);

  useEffect(() => {
    const fetchPost = async () => {
      const data: wpPost = await getPost(path);
      setPost(data);
      console.log(data);
    };
    fetchPost();
  }, [getPost]);

  const content =
    Object.keys(post).length !== 0 ? (
      <>
        <h1>{post.title.rendered}</h1>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content.rendered),
          }}
        />
      </>
    ) : (
      <p>Loading...</p>
    );

  return <main>{content}</main>;
};

export default PostPage;
