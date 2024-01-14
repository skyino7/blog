import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
            <img src="https://phoenixnap.com/kb/wp-content/uploads/2023/12/how-to-ssh-into-a-docker-container.png" alt="Blog Post" />
        </div>
        <div className="texts">
            <h2>How to SSH into a Docker Container</h2>
        <p className="info">
            <a className="author">John Doe</a>
            <time className="time">May 14, 2021 10:53</time>
        </p>
        <p className="summary">The primary purpose of the SSH protocol is to enable a secure network connection to a remote server. Although Docker containers do not run full-fledged operating systems, they all have private IP addresses, so it is possible to use SSH to establish a local connection to their shell.</p>
        </div>
    </div>
  )
}

export default Post