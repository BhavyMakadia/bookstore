import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Addbook() {
    const books = [
        { id: 1, name: "Book 1", author: "Author 1", price: "$10" },
        { id: 2, name: "Book 2", author: "Author 2", price: "$15" },
        { id: 3, name: "Book 3", author: "Author 3", price: "$20" }
    ];
    return (
        <div>
            <div className="container my-5 col-md-8">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td>
                                    <a className="btn btn-secondary btn-sm" href={`/mylist/${book.id}`}>Add To Mybook</a>
                                    <Link to={`/editBook/`} style={{ color: 'blue' }}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <Link to={`/deleteBook/`} style={{ color: 'red' }}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
