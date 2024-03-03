package com.bookStore.repository;

import com.bookStore.entity.BookwithAuthor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookwithAuthorRepository extends JpaRepository<BookwithAuthor, Long> {
}
