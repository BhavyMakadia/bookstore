import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home.js';
import Navbar from './component/Navebar.js'; 
import Listbook from './component/Listbook.js';
import NewBookRegister from './component/NewBookRegister.js';
import Addbook from './component/Addbook.js';
import Editbook from './component/Editbook.js'; 
import Signup from './component/Signup.js';
import Signin from './component/Signin.js';

import Footer from './component/Footer.js';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listbook" element={<Listbook />} />
        <Route path="/bookregister" element={<NewBookRegister />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/edit/:id" element={<Editbook />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
     
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
