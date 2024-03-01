
import React, { useEffect, useState } from 'react';
import { addBook} from '../Services/BookService.js';
import { useNavigate, useParams } from 'react-router-dom';

const NewBookRegister = () => {
  const navigator = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    genre: '', isbn: '', price: '', quantity: '', title: ''
  });


  



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Clear form data after submission
      setFormData({
        genre: '', isbn: '', price: '', quantity: '', title: ''
      });
  
      // Extract data from formData
      const { genre, isbn, price, quantity, title } = formData;
  
      // Prepare form data for submission
      const formDataForSubmission = { genre, isbn, price, quantity, title };
  
      // Submit form data
      addBook(formDataForSubmission)
        .then((response) => {
          console.log(response.data);
          navigator('/listbook');
        })
        .catch(error => {
          console.error(error);
        });
  
      alert('Book registered successfully!');
    } catch (error) {
      console.error('Error registering book:', error);
      alert('Error registering book. Please try again.');
    }
  };

  function Title() {
    if (id) {
      return <h2 className="text-center">Update Book Register</h2>;
    } else {
      return <h4 className="text-center">New Book Register</h4>;
    }
  }

  return (
    <div className="container my-5 p-5" style={{ border: '1px solid black' }}>
      <Title />
      <form className="col-md-4 offset-md-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input type="text" className="form-control" name="genre" value={formData.genre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">Isbn</label>
          <input type="text" className="form-control" name="isbn" value={formData.isbn} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input type="text" className="form-control" name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <center><button type="submit" className="btn btn-primary">Submit</button></center>
      </form>
    </div>
  );
};

export default NewBookRegister;
