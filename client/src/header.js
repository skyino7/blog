import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';
// import { useUserContext } from './UserContext';

const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    });
  }, []);

  function logout() {
    fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null);
  }

  const Username = userInfo?.Username;

  return (
    <header>
        <Link to="/" className="logo">Blog</Link>
        <nav>
          {Username && (
            <>
              <Link to="/create">Create Post</Link>
              <a onClick={logout}>Logout ({Username})</a>
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