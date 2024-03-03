package com.bookStore.controller;

import com.bookStore.entity.Author;
import com.bookStore.entity.Book;
import com.bookStore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	private BookService bookService;
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
}
