package com.bookStore.repository;

import com.bookStore.entity.BookwithAuthor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookwithAuthorRepository extends JpaRepository<BookwithAuthor, Long> {
    @Query("SELECT t FROM BookwithAuthor t")
    List<BookwithAuthor> getALL();
}
