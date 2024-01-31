import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            })
        });
    }, [id]);

    if (!postInfo) return '';

  return (
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <div className='image'>
        <img src={`http://localhost:4000/${postInfo.file}`} alt="post" />
      </div>

      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />

    </div>
  );
}

export default PostPage