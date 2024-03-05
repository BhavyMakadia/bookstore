package com.bookStore.repository;

import com.bookStore.entity.Book;
import com.bookStore.entity.MyBookList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MyBookListRepository extends JpaRepository<MyBookList, Long> {


}
