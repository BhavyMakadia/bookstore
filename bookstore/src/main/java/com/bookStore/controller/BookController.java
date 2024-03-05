package com.bookStore.controller;

import com.bookStore.entity.Author;
import com.bookStore.entity.Book;
import com.bookStore.entity.MyBookList;
import com.bookStore.repository.MyBookListRepository;
import com.bookStore.service.BookService;
import com.bookStore.service.MyBookListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	private BookService bookService;


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


	@PostMapping("/mylist/{id}")
	public ResponseEntity<?> getMyList(@PathVariable Long id) {
		Book b=bookService.getBookById(id);
System.out.println("Rendwe");
		MyBookList mb=new MyBookList(b.getId(),b.getTitle(),b.getGenre(),b.getIsbn(),b.getPrice(),b.getQuantity());
		myBookListService.saveMyBooks(mb);
		Map<String, String> response = new HashMap<>();
		response.put("data", "Book Added Successfully");
		return ResponseEntity.ok(response);
	}


	@CrossOrigin("*")
	@GetMapping("/mybooklist/gets")
	public ResponseEntity<List<MyBookList>> getMyBooks() {
		System.out.println("abc");
		List<MyBookList> books = myBookListService.getAllMyBooks();
		System.out.println("getmylsit");
		return ResponseEntity.ok(books);
	}

	@CrossOrigin("*")
	@DeleteMapping("/remove/{mybookid}")
	public void deleteMyBook(@PathVariable Long mybookid) {
		myBookListService.deletemybooklistbyid(mybookid);
	}



}
