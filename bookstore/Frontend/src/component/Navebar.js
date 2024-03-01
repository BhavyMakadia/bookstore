import React from 'react';
import backgroundImage from './BookStore.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-3 mb-2 text-white" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '', backgroundPosition: '' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/listbook">MyBook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listbook">Available Book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/authorcomponent">AuthorForm</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/newauthor">AuthorForm 2</a>
            </li>
            newauthor
          </ul>
          <div>
            <a className="nav-link"style={{color:"black" }} href="/bookregister">New Book Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
