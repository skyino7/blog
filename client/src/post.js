import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const Post = ({title, summary, file, content, createdAt, author}) => {

  return (
    <div className="post">
        <div className="image">
          <Link to={'/post/id'}>
            <img src={'http://localhost:4000/'+file} alt="Blog Post" />
          </Link>
        </div>
        <div className="texts">
          <Link to={'/post/id'}>
            <h2>{title}</h2>
          </Link>
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