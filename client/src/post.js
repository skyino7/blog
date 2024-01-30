import React from 'react'
import { format } from 'date-fns'

const Post = ({title, summary, file, content, createdAt, author}) => {

  return (
    <div className="post">
        <div className="image">
            <img src={'http://localhost:4000/'+file} alt="Blog Post" />
        </div>
        <div className="texts">
            <h2>{title}</h2>
        <p className="info">
            <a className="author">{author.Username}</a>
            <time className="time">{format((createdAt), 'MMM d, yyyy, HH:mm')}</time>
        </p>
        <p className="summary">{summary}</p>
        </div>
    </div>
  )
}

export default Post