import React, { useState, useEffect } from 'react';

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
  const editBook = (id) => {
    navigate(`/edit/${id}`);
  };
  
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:1001/book/${id}`);
      // After successful deletion, fetch books again to update the list
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

      <button type="button" onClick={addBook} className="btn btn-primary mb-2">
        Add New Book
      </button>
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
                    className="btn btn-info ms-2"
                    onClick={() => editBook(book.id)}
                  > 
                    Edit
                  </button>
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

export default Listbook;
