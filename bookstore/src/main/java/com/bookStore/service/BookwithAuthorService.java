package com.bookStore.service;

import com.bookStore.entity.Author;
import com.bookStore.entity.Book;
import com.bookStore.entity.BookwithAuthor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bookStore.repository.BookwithAuthorRepository;

import java.util.List;

@Service
public class BookwithAuthorService {

    @Autowired
    private BookwithAuthorRepository bookwithAuthorRepository;

    public void addBookWithAuthor(Book book, Author author) {
        BookwithAuthor bookwithAuthor = new BookwithAuthor(book, author);
        bookwithAuthorRepository.save(bookwithAuthor);
    }
    public List<BookwithAuthor> getBooksWithAssignedUsers() {
        List<BookwithAuthor> queuesWithUsers = bookwithAuthorRepository.getALL();

        return queuesWithUsers;
    }
}
