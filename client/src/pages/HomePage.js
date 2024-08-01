import React, { useEffect, useState } from 'react'
import Post from '../post'

const Homepage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
       {posts.length > 0 && posts.map(post => (
          <Post {...post} />
       ))}
    </>
  )
}

export default Homepage