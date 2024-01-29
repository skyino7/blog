import React, { useEffect } from 'react'
import Post from '../post'

const Homepage = () => {
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        console.log(posts);
      });
    });
  }, []);
  return (
    <>
        <Post />
        <Post />
        <Post />
    </>
  )
}

export default Homepage