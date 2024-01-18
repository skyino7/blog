import React, { useState } from 'react'

const Register = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('')

    async function register(ev) {
        ev.preventDefault();

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({Username, Password}),
            headers: {'Content-Type':'application/json'},
        });

        if (response.status === 200) {
            alert('Registration successful!');
        } else {
            alert('Registration failed!');
        }
    }

  return (
    <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input type="text" placeholder="Username" value={Username}
        onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="Password" value={Password}
        onChange={ev => setPassword(ev.target.value)}/>
        <button>Register</button>
    </form>
  )
}

export default Register