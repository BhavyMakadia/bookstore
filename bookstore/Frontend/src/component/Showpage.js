import React, { useState, useEffect } from 'react';

import Usernavebar from './Usernavebar.js';


function Showpage() {
  const [books, setBooks] = useState([]);
  const [user,setUser] = useState([]);
  
let userName;
  useEffect(() => {
    fetchBooks();
    const token = sessionStorage.getItem('token');
    const name = token.split("|");
    userName=name[0]; 
    fetchUserId();
    
  }, []);
  const fetchUserId = async () => {
    try {
        const response = await fetch(`http://localhost:1001/book/getuser/${userName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });


        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            setUser(responseData);
        } else {
            throw new Error("User Not Found");
        }

    } catch (error) {
        console.error('Error during Fetch user:', error.message);
    }
};


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
  const addBookMyList = async (bookId) => {
    try {
        const response = await fetch(`http://localhost:1001/book/mylist/${bookId}/${user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set content type as JSON
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData); // Log response data
    } catch (error) {
        console.error("Error adding book to list:", error);
    }
}

 
  return (
    <>
     <Usernavebar /> 
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
    </>
  );
}

export default Showpage;
