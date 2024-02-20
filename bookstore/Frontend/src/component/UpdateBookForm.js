import React, { useState, useEffect } from 'react';
import { updateBook } from '../Services/BookService.js';

function UpdateBookForm({ bookId }) {
  const [book, setBook] = useState({
    title: '',
    genre: '',
    isbn: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    // Fetch the book details by its ID and populate the form
    // You can implement this part based on your application logic
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(bookId, book)
      .then(response => {
        console.log('Book updated successfully:', response.data);
        // Optionally, you can redirect the user to a different page or display a success message
      })
      .catch(error => {
        console.error('Error updating book:', error);
        // Handle error
      });
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" name="genre" value={book.genre} onChange={handleChange} />
        </div>
        <div>
          <label>ISBN:</label>
          <input type="text" name="isbn" value={book.isbn} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={book.price} onChange={handleChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={book.quantity} onChange={handleChange} />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default UpdateBookForm;
