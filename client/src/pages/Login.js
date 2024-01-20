import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({Username, Password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });

    if (response.ok) {
      // console.log('Login successful!');
      setRedirect(true);
    } else {
      alert('Login failed!');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={Username} onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="Password" value={Password} onChange={ev => setPassword(ev.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default Login