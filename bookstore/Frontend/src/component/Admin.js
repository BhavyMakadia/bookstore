
import React, { useState, useEffect } from 'react';

import backgroundImage from './BookStore.jpg';
import AdminLayout from './Adminnavebar.js';
const Admin = () => {
    return (
        <><AdminLayout />
        <div className="container my-5 p-5" style={{ border: '1px solid black' }} >
            <h2 className="text-center" > Arrange  book in author wise </h2>
            <form className="text-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '', backgroundPosition: '' }}>
 <div className="mb-3">
                    <label className="form-label">Book:</label><br></br>
  <a className="nav-link" className="btn  btn-primary" href="/bookregister">New Book Register</a>
                </div>

                <div className="mt-3">
                    <label>Author:</label><br></br>
 <a className="nav-link" className="btn  btn-primary" href="/newauthor">New Author Add</a>

                </div>

            </form>
        </div>
        </>
    );
};

export default Admin;
