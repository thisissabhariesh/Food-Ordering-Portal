import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username) {
      alert('Please fill in the correct username');
    } 
    else if (!password) {
      alert('Please fill in the correct password');
    }
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your login logic here (e.g., sending data to a server for authentication)
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder='Enter your username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
        Login
        </button>
        <br></br>
        <label htmlFor="username">Forgot Password?</label>
        <br></br>
       
        <label htmlFor="username">Create a new account: <a href="">Signup</a>
        </label>
        
      </form>
    </div>
  );
}

export default Login;