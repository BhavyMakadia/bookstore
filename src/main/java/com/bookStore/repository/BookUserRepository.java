package com.bookStore.repository;

import com.bookStore.entity.Book;
import com.bookStore.entity.BookUser;
import com.bookStore.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BookUserRepository {
    List<BookUser> findByBook(Book book);
    Long countByBook(Book book);

    @Modifying
    @Query("DELETE FROM BookWithUsers qwu WHERE qwu.Book = :Book AND qwu.user = :user")
    void deleteByBookAndUser(@Param("Book") Book book, @Param("user") User user);

    Optional<BookUser> findByBookUser(Book book, User user);

    @Query("SELECT t FROM BookUser t")
    List<BookUser> getALL();
}
