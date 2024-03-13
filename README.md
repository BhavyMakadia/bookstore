Online Book Store
This is a mini-project for an Online Book Store developed using Spring Boot for the backend, React for the frontend, and SQL for the database. The project includes functionalities for both administrators and users.

Features:
Admin Functionality:
Login: Admin can log in to access administrative features.
Add Book: Admin can add new books with details such as book title, author, genre, ISBN, price, and quantity.
Delete Book: Admin can delete existing books from the system.
Edit Book: Admin can edit details of existing books in the system.
Add Author: Admin can add new authors.
Delete Author: Admin can delete authors from the system.
Edit Author: Admin can edit details of existing authors in the system.
Arrange Book: Admin can arrange books with authors.
User Functionality:
Signup: Users can sign up for an account.
Signin: Users can sign in to their account.
View Books: Users can browse through the list of available books.
Add to My List: Users can add books to their personal reading list for future reference or purchase.
Entity Models:
Book Entity:
id: Primary key for the book entity.
title: Title of the book.
genre: Genre of the book.
isbn: ISBN of the book.
price: Price of the book.
quantity: Quantity of the book available in stock.
Admin Entity:
id: Primary key for the admin entity.
username: Username of the admin.
email: Email of the admin.
Author Entity:
id: Primary key for the author entity.
name: Name of the author.
biography: Biography of the author.
BookwithAuthor Entity:
id: Primary key for the relationship entity.
book: Many-to-One mapping to the Book entity.
author: Many-to-One mapping to the Author entity.
MyBookList Entity:
id: Primary key for the user's book list entity.
book: Many-to-One mapping to the Book entity.
user: Many-to-One mapping to the User entity.
User Entity:
id: Primary key for the user entity.
username: Username of the user.
email: Email of the user.
password: Password of the user.
Technologies Used:
Backend:
Spring Boot
Frontend:
React
Database:
SQL (Assume appropriate database schema and relationships)
Setup Instructions:
Clone the repository to your local machine.
Set up the backend using Spring Boot and configure the database connection.
Set up the frontend using React and ensure it communicates with the backend APIs correctly.
Run the application and access the respective URLs for admin and user functionalities.
Additional Notes:
Implement proper validation for user inputs.
Handle errors and edge cases gracefully.
Enhance the UI/UX for better user experience.
Implement pagination for book lists if dealing with a large number of records.
Add login and signup pages for users. Admin functionalities should be accessible after admin login.
Implement functionalities for adding books to the user's reading list.
Contributors:
Makadiya Bhavya A
