// BookForm.js
import React, { useState } from 'react';

const BookForm = ({ authors, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setIsbn] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [authorId, setAuthorId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, genre, isbn, price, quantity, authorId });
    setTitle('');
    setGenre('');
    setIsbn('');
    setPrice('');
    setQuantity('');
    setAuthorId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
        <option value="">Select Author</option>
        {authors.map(author => (
          <option key={author.id} value={author.id}>{author.name}</option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
