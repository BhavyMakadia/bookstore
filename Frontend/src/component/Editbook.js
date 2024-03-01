import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Editbook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    genre: '',
    isbn: '',
    price: '',
    quantity: '',
    title: ''
  });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:1001/book/${id}`);
      const bookData = response.data;
      setFormData({
        genre: bookData.genre,
        isbn: bookData.isbn,
        price: bookData.price,
        quantity: bookData.quantity,
        title: bookData.title
      });
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:1001/book/${id}`, formData);
      alert('Book updated successfully!');
      navigate('/listbook');
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Error updating book. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input type="text" className="form-control" name="genre" value={formData.genre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN</label>
          <input type="text" className="form-control" name="isbn" value={formData.isbn} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input type="text" className="form-control" name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default Editbook;
