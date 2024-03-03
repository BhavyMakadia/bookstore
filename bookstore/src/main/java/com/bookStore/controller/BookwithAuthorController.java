package com.bookStore.controller;

import com.bookStore.entity.Author;
import com.bookStore.entity.Book;
import com.bookStore.entity.BookwithAuthor;
import com.bookStore.service.AuthorService;
import com.bookStore.service.BookService;
import com.bookStore.service.BookwithAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/bookwithauthor")
@CrossOrigin("*")
public class BookwithAuthorController {

    @Autowired
    private BookwithAuthorService bookwithAuthorService;
@Autowired
private BookService bookService;

@Autowired
private AuthorService authorService;


    @PostMapping("/ba/{bookId}/{authorId}/add")
    public ResponseEntity<?> addBookWithAuthor(@PathVariable Long bookId, @PathVariable Long authorId) {
            try {
                Book book = bookService.getBookById(bookId);
                Author author = authorService.getAuthorById(authorId);
                if (book == null || author == null) {
                    Map<String, String> response = new HashMap<>();
                    response.put("error", "Queue Or User Not found");
                    return ResponseEntity.badRequest().body(response);
                }
                bookwithAuthorService.addBookWithAuthor(book,author);
                Map<String, String> response = new HashMap<>();
                response.put("data", "User Added Successfully");
                return ResponseEntity.ok(response);
            } catch (Exception e) {
                Map<String, String> response = new HashMap<>();
                response.put("error", e.getMessage());
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
            }
    }

}
