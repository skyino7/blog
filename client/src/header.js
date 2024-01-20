import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [Username, setUsername] = useState('');
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUsername(userInfo.Username)
      })
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    });
  }

  return (
    <header>
        <Link to="/" className="logo">My Blog</Link>
        <nav>
          {Username && (
            <>
              <Link to="/create">Create Post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!Username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )
          }
        </nav>
    </header>
  )
}

export default Header