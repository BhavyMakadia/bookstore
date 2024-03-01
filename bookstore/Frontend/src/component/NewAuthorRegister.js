import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function NewAuthorRegister() {
    const navigator = useNavigate();
  
    const [formData, setFormData] = useState({
      name:'',biography:''
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
        const response = await axios.post(
          'http://localhost:1001/author',formData
        );
        console.log(response.data);
        navigator('/listbook');
        alert('Book registered successfully!');
        setFormData({
            name:'',biography:''
        });
      } catch (error) {
        console.error('Error registering book:', error);
        alert('Error registering book. Please try again.');
      }
    };
  return (
    <div className="container my-5 p-5" style={{ border: '1px solid black' }}>
    
    <h4 className="text-center">NewAuthorRegister</h4>
      <form className="col-md-4 offset-md-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="biography" className="form-label">biography</label>
          <input type="text" className="form-control" name="biography" value={formData.biography} onChange={handleChange} />
        </div>
       
        <center><button type="submit" className="btn btn-primary">Submit</button></center>
      </form>
    </div>
  )
}
