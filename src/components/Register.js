import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate= useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {name, username, password};
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isExistingUser = storedUsers.some((u) => u.username === newUser.username);

    if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }

    if (isExistingUser) {
      alert('Username already exists');
    } else {
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Registration successful');
      navigate('/login');
      setName('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setError('');
      
    }
  };
 

  return (
    <div className="Signup">
      <Form className="form-container-Signup" onSubmit={handleRegister}>
        <h2 className="form-title">Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label className="form-label">Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="form-label">Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-submit">
          Sign Up
        </Button>
      </Form>
      <div className="RegisterImage">
        <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={650} height={450} style={{ margin: '6% auto' }} />
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
