import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import {response} from 'express';

const PostPage = () => {
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json().then(data => {
                console.log(data);
            })
        });
    }, [id]);
  return (
    <div>PostPage</div>
  );
}

export default PostPage