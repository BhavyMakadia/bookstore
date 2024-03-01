package com.bookStore.service;

import com.bookStore.entity.Author;
import com.bookStore.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {

	@Autowired
	private AuthorRepository authorRepository;

	public List<Author> getAllAuthors() {
		return authorRepository.findAll();
	}

	public Author getAuthorById(Long id) {
		return authorRepository.findById(id).orElse(null);
	}

	public Author addAuthor(Author author) {
		return authorRepository.save(author);
	}

	public Author updateAuthor(Long id, Author updatedAuthor) {
		updatedAuthor.setId(id);
		return authorRepository.save(updatedAuthor);
	}

	public void deleteAuthor(Long id) {
		authorRepository.deleteById(id);
	}
}
