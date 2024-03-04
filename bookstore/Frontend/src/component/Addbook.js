
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from './BookStore.jpg';

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        isbn: '',
        price: '',
        quantity: ''
    });
   const[books,setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState('');

    const [authors, setAuthors] = useState([]);
    const [selectedAuthorId, setSelectedAuthorId] = useState('');

    useEffect(() => {
        fetchAuthors();
        fetchBooks();
    }, []);

    const fetchAuthors = async () => {
        try {
            const response = await axios.get('http://localhost:1001/author/get');
            setAuthors(response.data);
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    };
    const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:1001/book/gets');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedBookId || !selectedAuthorId) {
            console.error('Please select both a book and an author.');
            return;
        }


        try {
            const response = await axios.post(`http://localhost:1001/bookwithauthor/ba/${selectedBookId}/${selectedAuthorId}/add`);
            console.log('Book with author added successfully:', response.data);
            // Reset form fields or show a success message
        } catch (error) {
            console.error('Error adding book with author:', error);
            // Handle error, show error message, etc.
        }
    };


    return (
        <div className="container my-5 p-5" style={{ border: '1px solid black' }} >
            <h2 className="text-center" > Arrange  book in author wise </h2>
            <form onSubmit={handleSubmit} className="text-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '', backgroundPosition: '' }}>
 <div className="mb-3">
                    <label className="form-label">Book:</label>
                    <select className="form-control" value={selectedBookId} onChange={(e) => setSelectedBookId(e.target.value)} required>
                        <option value="">Select Book</option>
                        {books.map(book => (
                            <option key={book.id} value={book.id}>{book.title}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Author:</label>
                    <select className="form-control" value={selectedAuthorId} onChange={(e) => setSelectedAuthorId(e.target.value)} required>
                        <option value="">Select Author</option>
                        {authors.map(author => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
