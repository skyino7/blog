import React from 'react'
import { useState } from 'react';
import {Navigate} from "react-router-dom";
import Editor from '../editor';

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState('');

    async function updatePost(ev) {
        ev.preventDefault();
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <form onSubmit={updatePost}>
            <input type="title" placeholder='Title' value={title} onChange={ev => setTitle(ev.target.value)}/>
            <input type="summary" placeholder='summary' value={summary} onChange={ev => setSummary(ev.target.value)}/>
            <input type='file' onChange={ev => setFiles(ev.target.files)}/>
            <Editor onChange={setContent} value={content}/>
            <button style={{marginTop:'10px'}}>Create Post</button>
        </form>
      );
}

export default EditPost