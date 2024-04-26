import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

import { FaUser } from 'react-icons/fa'; // Assuming you're using FontAwesome icons

const NavbarComp = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setLoggedInUser(userLoggedIn);

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedUserName = sessionStorage.getItem('username');
    const user = storedUsers.find(u => u.username === storedUserName);

    if (userLoggedIn && user) {
      setUserName(user.name);
    }
  }, []);

  const handleLogOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('isLoggedIn');
      window.location.reload();
      setLoggedInUser(false);
      setUserName('');
      
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='navy'>
          <img src="https://cdn.pixabay.com/photo/2014/03/24/17/13/fire-295163_1280.png" id='brand_icon' alt="" />
          <Navbar.Brand as={Link} to='/home'>FOOD STORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/recipe'>Recipes</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
              <Nav.Link as={Link} to='/contact' id='Contact'>Contact Us</Nav.Link>
              {loggedInUser ? (
                <>
                  <Nav.Link className='afterLogin'>
                    <FaUser style={{ marginRight: '0.5rem' }} />
                    {userName}
                  </Nav.Link>
                  <button className='afterLogin' id='logout' variant="outline-light" onClick={handleLogOut}>Logout</button>
                </>
              ) : (
                <>
                  <button id='login' variant="outline-light" onClick={() => navigate('/login')}>Login</button>
                  <button id='register' variant="outline-light" onClick={() => navigate('/register')}>Register</button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};




export default NavbarComp;