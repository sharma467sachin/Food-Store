import NavbarComp from './components/Navbar';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Recipe from './components/Recipe';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import React, { useState } from 'react';

function App() {
  const [LoggedInUser, setLoggedInUser] = useState(false);
  return (  
    <div className="App"> 
      <BrowserRouter>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/register" element={<Register setLoggedInUser={setLoggedInUser} />} />
        <Route exact path='/home' element={<Home/>}/>
       <Route exact path='/about' element={<About/>}/>
       <Route exact path='/blog' element={<Blog/>}/>
       <Route exact path='/contact' element={<Contact/>}/>
       <Route exact path='/recipe' element={<Recipe/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
