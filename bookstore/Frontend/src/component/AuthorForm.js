import React, { useState } from 'react';
import axios from 'axios';

const AuthorForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !bio.trim()) {
      setError('Please enter both name and bio.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:1001/authors', {
        name,
        bio,
      });
      onAdd(response.data);
      setName('');
      setBio('');
      setError('');
    } catch (error) {
      console.error('Error adding author:', error);
      setError('Error adding author. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Author</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
};

export default AuthorForm;
