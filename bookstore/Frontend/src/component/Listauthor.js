import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Listauthor() {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate(); // Changed navigator to navigate

  useEffect(() => {
    fetchQueues();
  }, []);
 const fetchQueues = async () => {
         try {
             const response = await fetch('http://localhost:1001/author/get');
             if (response.ok) {
                 const data = await response.json();
                 console.log(data);
                 setAuthors(data);
             }
             else{

                 throw new Error('Failed to fetch queues');
             }
         } catch (error) {
             console.error('Error fetching queues:', error);
 }
 };
    function addBook() {
    navigate('/bookregister');
  }
 function addAuthor() {
    navigate('/newauthor');
  }
  
  const deleteBook = async (id) => {
   try {
          await axios.delete(`http://localhost:1001/author/${id}`);
          setAuthors(authors.filter(author => author.id !== id));
        } catch (error) {
          console.error('Error deleting author:', error);
        }
  };
  return (
    <div className="text-center p-5">

      <br />
 <h2 className="text-center">Author List</h2>
        <button type="button" onClick={addAuthor} className="btn btn-primary mb-2">
              Add New Listauthor
            </button>
            <br />
      <div className="row">
        <table className="table table-striped table-bordered rounded">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Name</th>
              <th>Biography</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((authors) => (
              <tr key={authors.id}>
                <td>{authors.id}</td>
  <td>{authors.name}</td>
                <td>{authors.biography}</td>
                <td>

                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => deleteBook(authors.id)}
                  > 
                    Delete
                  </button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
       <h2 className="text-center">Book List</h2>

            <button type="button" onClick={addBook} className="btn btn-primary mb-2">
              Add New Book
            </button>
    </div>
  );
}

export default Listauthor;
