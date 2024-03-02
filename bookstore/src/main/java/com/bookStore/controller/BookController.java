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
	@GetMapping
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}


	@PostMapping("/new")
	public ResponseEntity<Void> saveBookWithNewAuthor(@RequestBody Book book, @RequestParam(value = "authorId", required = false) Long authorId) {
		if (authorId != null && authorId > 0) {
			Author author = new Author();
			author.setId(authorId);
			book.getAuthors().add(author);
		}

		bookService.saveBook(book);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}


	@PostMapping
	public Book addBook(@RequestBody Book book) {
		return bookService.addBook(book);
	}

	@GetMapping("/{id}")
	public Book getBookById(@PathVariable Long id) {
		return bookService.getBookById(id);
	}

	@PutMapping("/{id}")
	public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
		return bookService.updateBook(id, book);
	}

	@DeleteMapping("/{id}")
	public void deleteBook(@PathVariable Long id) {
		bookService.deleteBook(id);
	}
}
