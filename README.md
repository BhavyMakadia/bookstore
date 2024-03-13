<h1>Online Book Store </h1>
This is a mini-project for an Online Book Store developed using Spring Boot for the backend, React for the frontend, and SQL for the database. The project includes functionalities for both administrators and users.
<h2>Features:</h2>
<h3>Admin Functionality:</h3>
1.	Login: Admin can log in to access administrative features.
2.	Add Book: Admin can add new books with details such as book title, author, genre, ISBN, price, and quantity.
3.	Delete Book: Admin can delete existing books from the system.
4.	Edit Book: Admin can edit details of existing books in the system.
5.	Add Author: Admin can add new authors.
6.	Delete Author: Admin can delete authors from the system.
7.	Edit Author: Admin can edit details of existing authors in the system.
8.	Arrange Book: Admin can arrange books with author.
<h3>User Functionality:</h3>
1.	Signup: Users can sign up for an account.
2.	Signin: Users can sign in to their account.
3.	View Books: Users can browse through the list of available books.
4.	Add to My List: Users can add books to their personal reading list for future reference or purchase.
<h3>Book Entity:</h3>
•	id: Primary key for the book entity.
•	title: Title of the book.
•	genre: Genre of the book.
•	isbn: ISBN of the book.
•	price: Price of the book.
•	quantity: Quantity of the book available in stock.
<h3>Admin Entity:</h3>
•	id: Primary key for the admin entity.
•	username: Username of the admin.
•	email: Email of the admin.
<h3>Author Entity:</h3>
•	id: Primary key for the author entity.
•	name: Name of the author.
•	biography: Biography of the author.
<h3>BookwithAuthor Entity:</h3>
•	id: Primary key for the relationship entity.
•	book: Many-to-One mapping to the Book entity.
•	author: Many-to-One mapping to the Author entity.
<h3>MyBookList Entity:</h3>
•	id: Primary key for the user's book list entity.
•	book: Many-to-One mapping to the Book entity.
•	user: Many-to-One mapping to the User entity.
<h3>User Entity:</h3>
•	id: Primary key for the user entity.
•	username: Username of the user.
•	email: Email of the user.
•	password: Password of the user.
Technologies Used:
Backend:
•	Spring Boot
Frontend:
•	React
Database:
•	SQL (Assume appropriate database schema and relationships)
Setup Instructions:
1.	Clone the repository to your local machine.
2.	Set up the backend using Spring Boot and configure the database connection.
3.	Set up the frontend using React and ensure it communicates with the backend APIs correctly.
4.	Run the application and access the respective URLs for admin and user functionalities.
Additional Notes:
•	Implement proper validation for user inputs.
•	Handle errors and edge cases gracefully.
•	Enhance the UI/UX for better user experience.
•	Implement pagination for book lists if dealing with a large number of records.
•	Add login and signup pages for users. Admin functionalities should be accessible after admin login.
•	Implement functionalities for adding books to the user's reading list.
Contributors: Makadiya Bhavya A

