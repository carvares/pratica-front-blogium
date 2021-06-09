import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promisse = axios.get('http://localhost:4000/posts');
    promisse.then(r => {setPosts(r.data)})
  }, [])

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
