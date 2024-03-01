package com.bookStore.service;

import com.bookStore.entity.Book;
import com.bookStore.entity.BookUser;
import com.bookStore.repository.BookUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Queue;

@Service
public class BookUserService {
    @Autowired
    private BookUserRepository bookUserRepository;

    public List<BookUser> findByBook(Book book) {
        return bookUserRepository.findByBook(book);
    }

    public List<BookUser> getQueuesWithAssignedUsers() {
        List<BookUser> bookUser = bookUserRepository.getALL();

        return bookUser;
    }
}
