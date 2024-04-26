import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setLoginError(false); // Clear login error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((u) => u.username === username && u.password === password);
    
    if (user) {
      // Login successful
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', user.username);
      console.log('Login successful');
     alert('Login successful');
      navigate('/home');
      window.location.reload();
    } else {
      setError('Invalid username or password');
    }
  };
  

  return (
    <div className="LoginBody">
      <div className="row justify-content-centerL align-items-center">
        <div className="col" style={{ color: 'white' }}>
          <Form className='LoginF' onSubmit={handleSubmit}>
            <h2 className="form-title">Login</h2>
            {loginError && <Alert variant="danger">Invalid username or password. Please try again.</Alert>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Button variant="primary" type="submit" id='Lb'>
              Login
            </Button>
            {error && <p>{error}</p>}
          </Form>
        </div>
        <div className="col">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={500} height={450} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
