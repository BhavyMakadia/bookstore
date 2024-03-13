
    <h1>Online Book Store</h1>
    <p>This is a mini-project for an Online Book Store developed using Spring Boot for the backend, React for the frontend, and SQL for the database. The project includes functionalities for both administrators and users.</p>
    
    <h2>Features:</h2>
    
    <h3>Admin Functionality:</h3>
    <ol>
        <li>Login: Admin can log in to access administrative features.</li>
        <li>Add Book: Admin can add new books with details such as book title, author, genre, ISBN, price, and quantity.</li>
        <li>Delete Book: Admin can delete existing books from the system.</li>
        <li>Edit Book: Admin can edit details of existing books in the system.</li>
        <li>Add Author: Admin can add new authors.</li>
        <li>Delete Author: Admin can delete authors from the system.</li>
        <li>Edit Author: Admin can edit details of existing authors in the system.</li>
        <li>Arrange Book: Admin can arrange books with authors.</li>
    </ol>
    
    <h3>User Functionality:</h3>
    <ol>
        <li>Signup: Users can sign up for an account.</li>
        <li>Signin: Users can sign in to their account.</li>
        <li>View Books: Users can browse through the list of available books.</li>
        <li>Add to My List: Users can add books to their personal reading list for future reference or purchase.</li>
    </ol>
    
    <h3>Entity Models:</h3>
    
    <h4>Book Entity:</h4>
    <ul>
        <li>id: Primary key for the book entity.</li>
        <li>title: Title of the book.</li>
        <li>genre: Genre of the book.</li>
        <li>isbn: ISBN of the book.</li>
        <li>price: Price of the book.</li>
        <li>quantity: Quantity of the book available in stock.</li>
    </ul>
    
    <h4>Admin Entity:</h4>
    <ul>
        <li>id: Primary key for the admin entity.</li>
        <li>username: Username of the admin.</li>
        <li>email: Email of the admin.</li>
    </ul>
    
    <h4>Author Entity:</h4>
    <ul>
        <li>id: Primary key for the author entity.</li>
        <li>name: Name of the author.</li>
        <li>biography: Biography of the author.</li>
    </ul>
    
    <h4>BookwithAuthor Entity:</h4>
    <ul>
        <li>id: Primary key for the relationship entity.</li>
        <li>book: Many-to-One mapping to the Book entity.</li>
        <li>author: Many-to-One mapping to the Author entity.</li>
    </ul>
    
    <h4>MyBookList Entity:</h4>
    <ul>
        <li>id: Primary key for the user's book list entity.</li>
        <li>book: Many-to-One mapping to the Book entity.</li>
        <li>user: Many-to-One mapping to the User entity.</li>
    </ul>
    
    <h4>User Entity:</h4>
    <ul>
        <li>id: Primary key for the user entity.</li>
        <li>username: Username of the user.</li>
        <li>email: Email of the user.</li>
        <li>password: Password of the user.</li>
    </ul>
    
    <h2>Technologies Used:</h2>
    
    <h3>Backend:</h3>
    <ul>
        <li>Spring Boot</li>
    </ul>
    
    <h3>Frontend:</h3>
    <ul>
        <li>React</li>
    </ul>
    
    <h3>Database:</h3>
    <ul>
        <li>SQL (Assume appropriate database schema and relationships)</li>
    </ul>
    
    <h2>Setup Instructions:</h2>
    <ol>
        <li>Clone the repository to your local machine.</li>
        <li>Set up the backend using Spring Boot and configure the database connection.</li>
        <li>Set up the frontend using React and ensure it communicates with the backend APIs correctly.</li>
        <li>Run the application and access the respective URLs for admin and user functionalities.</li>
    </ol>
    
    <h2>Additional Notes:</h2>
    <ul>
        <li>Implement proper validation for user inputs.</li>
        <li>Handle errors and edge cases gracefully.</li>
        <li>Enhance the UI/UX for better user experience.</li>
        <li>Implement pagination for book lists if dealing with a large number of records.</li>
        <li>Add login and signup pages for users. Admin functionalities should be accessible after admin login.</li>
        <li>Implement functionalities for adding books to the user's reading list.</li>
    </ul>
    
    <h2>Contributors:</h2>
    <ul>
        <li>Makadiya Bhavya A</li>
    </ul>

