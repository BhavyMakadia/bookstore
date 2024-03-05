import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


function Showpage() {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    fetchBooks();
  }, []);
const fetchBooks = async () => {
  try {
    const response = await fetch("http://localhost:1001/book/gets");
    console.log("fetch");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const books = await response.json();
    setBooks(books);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
  
  };
 const addBookMyList=async (bookId)=>{
    try {
        const response = await fetch(`http://localhost:1001/book/mylist/${bookId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set content type as JSON
            },}
        );
        console.log("fetch");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("fetch1");
      } catch (error) {
        console.error("Error fetching books:", error);
      }
 }
 
  return (
    <div className="text-center p-5">
      <h2 className="text-center">Book List</h2>

      
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
                    onClick={() => addBookMyList(book.id)}
                  > 
                    Add Book To MY LIST
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

export default Showpage;
