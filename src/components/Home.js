import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

import './home.css';

const Home = () => {
  // Sample food images
  const foodImages = [
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150857732.jpg?t=st=1712817857~exp=1712821457~hmac=eaf32d21daa930528c3175220f3b181a12e4cff06a31426ff65cde2251d4dd77&w=900',
    'https://www.shutterstock.com/image-photo/two-halves-club-sandwich-on-600nw-1817988131.jpg',
  ];

  return (
    <div className='Home-body'>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col" style={{color:'white'}}>
          <h1 id='headingg' className='slide-in'>Discover Restaurants that Deliver near You</h1><br/>
          <p id='contentt' className='slide-in'>This is the place where you can enjoy delicious food and great ambiance.</p>
          <Button variant="dark" href="/Recipe" id='Order'>Order Now</Button>
        </div>
        
       
        <div className="col">
          <div style={{ width: '500px', height: '400px', margin: '0 auto'}} className='caro'>
            <Carousel interval={2000}>
              {foodImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Food ${index + 1}`} style={{width: '500px', height:"450px"}} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
