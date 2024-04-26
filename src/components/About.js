import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
    <img src="https://cdn.pixabay.com/photo/2014/03/24/17/13/fire-295163_1280.png" width={60} height={80}  style={{marginLeft:'47%'}} className='text-center'/>
    <h2 className="text-center" style={{color: "black", marginBottom:'40px'}}> Welcome to Food Store</h2>
    <div className="contentA">
    <div className="row justify-content-centerA">
      <h1>Best Dishes</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias voluptas qui aut iusto ut non architecto odio sit pariatur nihil nemo ipsa praesentium quia saepe aspernatur dolore, dicta at.
    </div>
    <div className="row justify-content-centerAA">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={800} height={200} />
    </div>
    </div>
  </div>
  );
};

export default About;
