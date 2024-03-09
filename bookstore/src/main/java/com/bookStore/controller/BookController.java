package com.bookStore.controller;
import com.bookStore.entity.Book;
import com.bookStore.entity.MyBookList;
import com.bookStore.entity.User;
import com.bookStore.repository.MyBookListRepository;
import com.bookStore.service.BookService;
import com.bookStore.service.MyBookListService;
import com.bookStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	private BookService bookService;

	@Autowired
	private UserService userService;
	@Autowired
	private MyBookListService myBookListService;

	@Autowired
	private MyBookListRepository myBookListRepository;

	@Autowired
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}
	//	@CrossOrigin("*")
//	@GetMapping("/get")
//	public ResponseEntity<List<Book>> getAllBooks() {
//		return new ResponseEntity.ok(bookService.getAllBooks());
//	}
	@CrossOrigin("*")
	@GetMapping("/gets")
	public ResponseEntity<List<Book>> getAllBooks() {
		System.out.println("abc");
		List<Book> books = bookService.getAllBooks();
		System.out.println("getlsit");
		return ResponseEntity.ok(books);
	}



	@CrossOrigin("*")
	@PostMapping
	public Book addBook(@RequestBody Book book) {
		return bookService.addBook(book);
	}
	@CrossOrigin("*")
	@GetMapping("/{id}")
	public Book getBookById(@PathVariable Long id) {
		return bookService.getBookById(id);
	}
	@CrossOrigin("*")
	@PutMapping("/{id}")
	public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
		return bookService.updateBook(id, book);
	}
	@CrossOrigin("*")
	@DeleteMapping("/{id}")
	public void deleteBook(@PathVariable Long id) {
		bookService.deleteBook(id);
	}

	@CrossOrigin("*")
	@GetMapping("/getuser/{userName}")
	public ResponseEntity<User> getUser(@PathVariable String userName){

		User user = userService.findByUsername(userName);


		if(user != null)
		{
			return ResponseEntity.ok(user);
		}
		else{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}

	@CrossOrigin("*")
	@PostMapping("/mylist/{bookid}/{userid}")
	public ResponseEntity<?> SetBookUser(@PathVariable Long bookid,@PathVariable Long userid) {
		try {
			Book book = bookService.getBookById(bookid);
			User user = userService.findUserById(userid);
			if (book == null || user == null) {
				Map<String, String> response = new HashMap<>();
				response.put("error", "Book Or User Not found");
				return ResponseEntity.badRequest().body(response);
			}
			MyBookList myBookList = new MyBookList(book, user);
			myBookListRepository.save(myBookList);
			Map<String, String> response = new HashMap<>();
			response.put("data", "User&book Added Successfully");
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			Map<String, String> response = new HashMap<>();
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}



	@CrossOrigin("*")
	@GetMapping("/books/{userId}/added")
	public ResponseEntity<List<Book>> getAllBooksByUser(@PathVariable Long userId) {
		List<Book> books = bookService.getAllBooksByUser(userId);
		return ResponseEntity.ok(books);
	}

	@CrossOrigin("*")
	@PostMapping("/books/{bookId}/{userId}/delete")
	public ResponseEntity<?> exitBookuser(@PathVariable Long bookId,@PathVariable Long userId)
	{
		try {
			User user = userService.findUserById(userId);
			Book book = bookService.getBookById(bookId);

			bookService.removeBookuser(book, user);
			Map<String, String> response = new HashMap<>();
			response.put("data", "User Removed Successfully");
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			Map<String, String> response = new HashMap<>();
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

}
