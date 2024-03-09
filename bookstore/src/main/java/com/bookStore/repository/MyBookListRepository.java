package com.bookStore.repository;

import com.bookStore.entity.Book;
import com.bookStore.entity.MyBookList;
import com.bookStore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MyBookListRepository extends JpaRepository<MyBookList, Long> {

    @Modifying
    @Query("DELETE FROM MyBookList qwu WHERE qwu.book = :book AND qwu.user = :user")
    void deleteBybookAndUser(@Param("book") Book book, @Param("user") User user);
}
