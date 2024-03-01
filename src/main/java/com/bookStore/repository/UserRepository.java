package com.bookStore.repository;

import com.bookStore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);

    @Query("SELECT u.email FROM User u WHERE u.id = :userId")
    String getEmailByUserId(@Param("userId") Long userId);

}
