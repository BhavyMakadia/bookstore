package com.bookStore.service;


import com.bookStore.entity.Author;
import com.bookStore.entity.Book;
import com.bookStore.entity.User;
import com.bookStore.repository.BookRepository;
import com.bookStore.repository.MyBookListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
public class BookService {
	@Autowired
	private MyBookListRepository myBookListRepository;

	@Autowired
	private BookRepository bookRepository;
	@Autowired
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	public void saveBook(Book book) {
		bookRepository.save(book);
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
	@Transactional
	public void removeBookuser(Book book, User user) {
		myBookListRepository.deleteBybookAndUser(book,user);
	}
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}

	public List<Book> getAllBooksByUser(Long userId){
		return bookRepository.findBooksByUserId(userId);
	}
}
