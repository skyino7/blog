import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('')

  async function login(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({Username, Password}),
      headers: {'Content-Type':'application/json'},
    });

    if (response.status === 200) {
      alert('Login successful!');
    } else {
      alert('Login failed!');
    }
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