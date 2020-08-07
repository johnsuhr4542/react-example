import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    console.log('login');
  }

  return (
    <div>
      <h3>login</h3>
      <form>
        <label htmlFor="username">username</label>
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">password</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="submit" value="login" onClick={login} />
      </form>
    </div>
  );
}

export default Login;