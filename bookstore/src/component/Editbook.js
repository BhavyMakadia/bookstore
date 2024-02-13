import React from 'react';

const EditBook = ({ book }) => {
  return (
    <div className="container my-5 p-5" style={{ border: '1px solid black' }}>
      <h4 className="text-center">Edit Book Here</h4>
      <form className="col-md-4 offset-md-4" action="/save" method="post">
        <input type="hidden" name="id"  />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name"  />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" name="author"  />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" name="price"  />
        </div>
        <center>
          <button type="submit" className="btn btn-primary">Submit</button>
        </center>
      </form>
    </div>
  );
};

export default EditBook;
