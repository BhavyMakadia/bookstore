import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Listbook() {
    const dummyData = [
        { id: 1, name: "Book 1", author: "Author 1", price: "$10" },
        { id: 2, name: "Book 2", author: "Author 2", price: "$15" },
        { id: 3, name: "Book 3", author: "Author 3", price: "$20" }
    ];

    return (
        <div className="text-center">
            <h2 className="text-center">Book List</h2>
            <div className="">
            <Link to="/addbook" className="btn btn-primary">Add Book</Link>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Book ID</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td>
                                    <a style={{ color: 'blue' }} ><FontAwesomeIcon icon={faEdit} /></a>
                                    <a style={{ color: 'red' }}><FontAwesomeIcon icon={faTrashAlt} /></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
