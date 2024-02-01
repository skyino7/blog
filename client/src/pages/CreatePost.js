import React from 'react';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import {Navigate} from "react-router-dom";
import Editor from '../editor';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('files', files[0]);

        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

  return (
    <form onSubmit={createNewPost}>
        <input type="title" placeholder='Title' value={title} onChange={ev => setTitle(ev.target.value)}/>
        <input type="summary" placeholder='summary' value={summary} onChange={ev => setSummary(ev.target.value)}/>
        <input type='file' onChange={ev => setFiles(ev.target.files)}/>
        <Editor value={content} onChange={setContent}/>
        <button style={{marginTop:'10px'}}>Create Post</button>
    </form>
  );
}

export default CreatePost