import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <form>
        <input type="title" placeholder='Title' />
        <input type="summary" placeholder='summary' />
        <input type='file' />
        <ReactQuill />
        <button>Create Post</button>
    </form>
  )
}

export default CreatePost