package com.bookStore.repository;

import com.bookStore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("SELECT q FROM Book q WHERE q.id IN (SELECT qwu.book.id FROM MyBookList qwu WHERE qwu.user.id = :userId)")
    List<Book> findBooksByUserId(@Param("userId") Long userId);
}
