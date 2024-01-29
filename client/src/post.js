import React from 'react'
import { formatISO9075 } from 'date-fns'

const Post = ({title, summary, file, content, createdAt}) => {

  return (
    <div className="post">
        <div className="image">
            <img src="https://phoenixnap.com/kb/wp-content/uploads/2023/12/how-to-ssh-into-a-docker-container.png" alt="Blog Post" />
        </div>
        <div className="texts">
            <h2>{title}</h2>
        <p className="info">
            <a className="author">John Doe</a>
            <time className="time">{formatISO9075(createdAt)}</time>
        </p>
        <p className="summary">{summary}</p>
        </div>
    </div>
  )
}

export default Post