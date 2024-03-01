import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthorComponent = () => {
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState({ name: '', biography: '' });

  useEffect(() => {
   // fetchAuthors();
  }, []);

  // const fetchAuthors = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:1001/author');
  //     setAuthors(response.data);
  //   } catch (error) {
  //     console.error('Error fetching authors:', error);
  //   }
  // };

  const addAuthor = async () => {
    try {
      const response = await axios.post('http://localhost:1001/author', newAuthor);
      setAuthors([...authors, response.data]);
      setNewAuthor({ name: '', biography: '' });
    } catch (error) {
      console.error('Error adding author:', error);
    }
  };

  // const deleteAuthor = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:1001/author/${id}`);
  //     setAuthors(authors.filter(author => author.id !== id));
  //   } catch (error) {
  //     console.error('Error deleting author:', error);
  //   }
  // };

  return (
    <div>
      <h1>Authors</h1>
      {/* <ul>
        {authors.map(author => (
          <li key={author.id}>
            {author.name} - {author.biography}
            <button onClick={() => deleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
      <h2>Add New Author</h2>
      
    

      <form >
      <div>
        <label htmlFor="name">Name:</label>
        <input
        type="text"
        placeholder="Name"
        value={newAuthor.name}
        onChange={e => setNewAuthor({ ...newAuthor, name: e.target.value })}
      />
     
      </div>
      <div>
        <label htmlFor="biography">Biography:</label>
        <input
        type="text"
        placeholder="Biography"
        value={newAuthor.biography}
        onChange={e => setNewAuthor({ ...newAuthor, biography: e.target.value })}
      />
      </div>
      <button onClick={addAuthor}>Add Author</button>
    </form>
    </div>
  );
};

export default AuthorComponent;
