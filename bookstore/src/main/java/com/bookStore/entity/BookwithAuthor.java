package com.bookStore.entity;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Table(name = "bookwithAuthor")
public class BookwithAuthor {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    // Add additional fields or relationships as needed

    public BookwithAuthor() {
    }

    public BookwithAuthor(Book book, Author author) {
        this.book = book;
        this.author = author;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBook() {
        return book.getId();
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Long getAuthor() {
        return author.getId();
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

}
