import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function MyBooklist() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); // Changed navigator to navigate

  useEffect(() => {
    fetchBooks();
  }, []);
const fetchBooks = async () => {
  try {
    const response = await fetch("http://localhost:1001/book/mybooklist/gets");
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

 
  
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:1001/book/remove/${id}`);
      fetchBooks();
      alert('Book deleted successfully!');
    } catch (error) {
      console.error("Error deleting book:", error);
      alert('Error deleting book. Please try again.');
    }
  };
  return (
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
              <th>Action</th>
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
                <td>
               
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => deleteBook(book.id)}
                  > 
                    Delete
                  </button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBooklist;
