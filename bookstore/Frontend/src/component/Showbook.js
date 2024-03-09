import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Navbar from './Navebar.js';


function Showbook() {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    fetchBooks();
    
    
  }, []);
  


const fetchBooks = async () => {
  try {
    const response = await fetch("http://localhost:1001/book/gets");
    console.log("fetch");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const books = await response.json();
    setBooks(books);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
  
  };
 
 
  return (
    <><Navbar />
    <div className="text-center p-5">
      <h2 className="text-center">Book List</h2>

      
      <br />
      <div className="row">
        <table className="table table-striped table-bordered rounded">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Genre</th>
              <th>ISBN</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Title</th>
              
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.genre}</td>
                <td>{book.isbn}</td>
                <td>{book.price}</td>
                <td>{book.quantity}</td>
                <td>{book.title}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Showbook;
