import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home.js';

import Listbook from './component/Listbook.js';
import NewBookRegister from './component/NewBookRegister.js';
import Addbook from './component/Addbook.js';
import Editbook from './component/Editbook.js';
import Signup from './component/Signup.js';
import ListAuthor from './component/Listauthor.js';
import Footer from './component/Footer.js';
import Admin from './component/Admin.js';
//import AdminLayout from './component/Adminnavebar.js'; // Import AdminLayout component
import NewAuthorRegister from './component/NewAuthorRegister.js';
import Showpage from './component/Showpage.js';

import Signin from './component/Signin.js';
import Adminlogin from './component/Adminlogin.js';
import Showbook from './component/Showbook.js';
import MyBooklist from './component/Mybooklist.js';

function App() {
  const [user, setUser] = useState(null);
  //const isAdminPath = window.location.pathname.startsWith('/adminlogin');

  useEffect(() => {
    // You can implement a function here to check if the user is already logged in
    // and set the user state accordingly.
  }, []);

  const handleLogout = () => {
    // Implement a function to log out the user and update the user state
  };

  return (
    <>
      <Router>
       
        {/* {isAdminPath && <AdminLayout />} Conditional rendering of AdminLayout */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listbook" element={<Listbook />} />
          <Route path="/bookregister" element={<NewBookRegister />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/edit/:id" element={<Editbook />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/signin" element={<Signin setUser={setUser} />} />
          <Route path="/newauthor" element={<NewAuthorRegister />} />
          <Route path="/listauthor" element={<ListAuthor />} />
          <Route path="/showpage" element={<Showpage />} />
          <Route path="/showbook" element={<Showbook />} />
         
          <Route path="/mybooklist" element={<MyBooklist />} />
          <Route path="/adminlogin" element={<Adminlogin setUser={setUser} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
