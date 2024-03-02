/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        isbn: '',
        price: 0,
        quantity: 0,
        selectedAuthorId: ''
    });
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await axios.get('http://localhost:1001/author');
                setAuthors(response.data);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        fetchAuthors();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const selectedAuthor = authors.find(author => author.id === formData.selectedAuthorId);
        const bookData = {
            title: formData.title,
            genre: formData.genre,
            isbn: formData.isbn,
            price: parseFloat(formData.price),
            quantity: parseInt(formData.quantity),
            authors: selectedAuthor ? [selectedAuthor] : [] // Include selected author object if found
        };

        try {
            const response = await axios.post('http://localhost:1001/book/new', bookData);
            console.log('Book added successfully:', response.data);
            // Reset form fields or show a success message
        } catch (error) {
            console.error('Error adding book:', error);
            // Handle error, show error message, etc.
        }
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={formData.genre} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>ISBN:</label>
                    <input type="text" name="isbn" value={formData.isbn} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Author:</label>
                    <select name="selectedAuthorId" value={formData.selectedAuthorId} onChange={handleInputChange} required>
                        <option value="">Select Author</option>
                        {authors.map(author => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        isbn: '',
        price: '',
        quantity: ''
    });
    const [authors, setAuthors] = useState([]);
    const [selectedAuthorId, setSelectedAuthorId] = useState('');

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = async () => {
        try {
            const response = await axios.get('http://localhost:1001/author');
            setAuthors(response.data);
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookData = {
            title: formData.title,
            genre: formData.genre,
            isbn: formData.isbn,
            price: parseFloat(formData.price),
            quantity: parseInt(formData.quantity),
            authors: authors.filter(author => author.id === parseInt(selectedAuthorId))
        };

        try {
            const response = await axios.post('http://localhost:1001/book/new', bookData);
            console.log('Book added successfully:', response.data);
            // Reset form fields or show a success message
        } catch (error) {
            console.error('Error adding book:', error);
            // Handle error, show error message, etc.
        }
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} required />
                </div>
                <div>
                    <label>ISBN:</label>
                    <input type="text" value={formData.isbn} onChange={(e) => setFormData({ ...formData, isbn: e.target.value })} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} required />
                </div>
                <div>
                    <label>Author:</label>
                    <select value={selectedAuthorId} onChange={(e) => setSelectedAuthorId(e.target.value)} required>
                        <option value="">Select Author</option>
                        {authors.map(author => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
