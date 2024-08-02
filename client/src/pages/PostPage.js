import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import {UserContext} from '../UserContext';
import { Link } from 'react-router-dom';

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            })
        });
    }, [id]);

    if (!postInfo) return '';

  return (
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <p>By <b>{postInfo.author.Username}</b> on {format((postInfo.createdAt), 'MMM d, yyyy, HH:mm')}</p>
      {userInfo.id === postInfo.author._id && (
        <div className='actions'>
          <Link className='edit' to={`/edit/${postInfo._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit Post
          </Link>
          <Link className='delete' to={`/post/${postInfo._id}`}>Delete Post</Link>
        </div>
      )}
      <div className='image'>
        <img src={`${process.env.REACT_APP_API_URL}/${postInfo.file}`} alt="post" />
      </div>

      <div className='content' dangerouslySetInnerHTML={{ __html: postInfo.content }} />

    </div>
  );
}

export default PostPage