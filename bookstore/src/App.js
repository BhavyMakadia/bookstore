import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./component/Home.js";
import Navbar from "./component/Navebar.js";
import Listbook from "./component/Listbook.js";
import NewBookRegister from './component/NewBookRegister.js';
import Addbook from './component/Addbook.js';
import EditBook from './component/Editbook.js';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listbook" element={<Listbook />} />
        <Route path="/bookregister" element={<NewBookRegister />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/editbook" element={<EditBook />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
