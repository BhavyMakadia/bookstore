package com.bookStore.controller;

import com.bookStore.entity.Author;
import com.bookStore.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/author")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping
    public List<Author> getAllAuthors() {
        return authorService.getAllAuthors();
    }

    @PostMapping
    public Author addAuthor(@RequestBody Author author) {
        return authorService.addAuthor(author);
    }

    @GetMapping("/{id}")
    public Author getAuthorById(@PathVariable Long id) {
        return authorService.getAuthorById(id);
    }

    @PutMapping("/{id}")
    public Author updateAuthor(@PathVariable Long id, @RequestBody Author author) {
        return authorService.updateAuthor(id, author);
    }

    @DeleteMapping("/{id}")
    public void deleteAuthor(@PathVariable Long id) {
        authorService.deleteAuthor(id);
    }
}
