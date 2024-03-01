package com.bookStore.service;

import com.bookStore.entity.Author;
import com.bookStore.entity.Book;
import com.bookStore.repository.AuthorRepository;
import com.bookStore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;
	@Autowired
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}

	@Autowired
	private AuthorRepository authorRepository;

	public Book addBook(Long authorId, Book book) {
		Optional<Author> optionalAuthor = authorRepository.findById(authorId);
		if (optionalAuthor.isPresent()) {
			Author author = optionalAuthor.get();
			book.setAuthor(author);
			author.getBooks().add(book);
			authorRepository.save(author);
			return bookRepository.save(book);
		}
		return null; // Handle the case when the author is not found
	}

	public void saveBookWithNewAuthor(Book book) {

		bookRepository.save(book); // Save the book (and associated author if it's new)
	}
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	public Book getBookById(Long id) {
		return bookRepository.findById(id).orElse(null);
	}

	public Book addBook(Book book) {
		return bookRepository.save(book);
	}

	public Book updateBook(Long id, Book updatedBook) {
		updatedBook.setId(id);
		return bookRepository.save(updatedBook);
	}

	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}
}
