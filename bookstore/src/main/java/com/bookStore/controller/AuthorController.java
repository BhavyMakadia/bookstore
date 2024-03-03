package com.bookStore.controller;

import com.bookStore.entity.Author;
import com.bookStore.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/author")
@CrossOrigin("*")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @PostMapping("/POST")
    public Author addAuthor(@RequestBody Author author) {
        return authorService.addAuthor(author);
    }

    @GetMapping("/get")
    public List<Author> getAllAuthors() {
        return authorService.getAllAuthors();
    }
}
