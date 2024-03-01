package com.bookStore.service;

import com.bookStore.entity.User;
import com.bookStore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findByUsername(String username)
    {
        return userRepository.findByUsername(username);
    }
    public User findByEmail(String email)
    {
        return userRepository.findByEmail(email);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }


    public String getEmailByUserId(Long userId){
        return userRepository.getEmailByUserId(userId);
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
