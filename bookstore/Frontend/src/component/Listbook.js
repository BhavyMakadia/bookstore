import React, { useState, useEffect } from 'react';
import { listBook } from '../Services/BookService.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Listbook() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); // Changed navigator to navigate

  useEffect(() => {
    fetchBooks();
  }, []);
const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:1001/book");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  function addBook() {
    navigate('/bookregister');
  }

  function updateBook(id) {
    navigate(`/edit/${id}`); 
  }

  return (
    <div className="text-center">
      <h2 className="text-center">Book List</h2>

      <button type="button" onClick={addBook} className="btn btn-primary mb-2">
        Add New Book
      </button>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
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
                    className="btn btn-success"
                    onClick={() => updateBook(book.id)}
                  > 
                    Update
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

export default Listbook;
