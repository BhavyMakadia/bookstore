package com.bookStore.controller;

import com.bookStore.entity.User;
import com.bookStore.security.JwtUtils;
import com.bookStore.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        try {
            logger.info("Received signup request for username: {}", user.getUsername());

            // Check if the username or email is already registered
            if (userService.findByUsername(user.getUsername()) != null ||
                    userService.findByEmail(user.getEmail()) != null) {
                Map<String, String> response = new HashMap<>();
                response.put("error", "Username or email already registered");
                return ResponseEntity.badRequest().body(response);
            }
            userService.saveUser(user);
            Map<String, String> response = new HashMap<>();
            response.put("data", "User registered successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Handle other exceptions if needed
            Map<String, String> response = new HashMap<>();
            response.put("error", "Error during signup");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {

        // Check if the username exists in the database
        User user = userService.findByUsername(loginRequest.getUsername());

        if (user == null || !loginRequest.getPassword().equals(user.getPassword())) {
            // If username does not exist or password does not match, return an error response
            Map<String, String> response = new HashMap<>();
            response.put("error", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        String token = JwtUtils.generateUserToken(loginRequest);
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("message", "Login successful");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
        try {
            User user = userService.findByUsername(username);

            if (user != null) {
                // Return the user object if found
                return ResponseEntity.ok(user);
            } else {
                // Return a response indicating that the user was not found
                Map<String, String> response = new HashMap<>();
                response.put("error", "User not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        } catch (Exception e) {
            // Handle other exceptions if needed
            Map<String, String> response = new HashMap<>();
            response.put("error", "Error during user retrieval");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getData/{userId}")
    public ResponseEntity<User> getUserDataById(@PathVariable Long userId) {
        logger.info(userId + "");
        User user = userService.findUserById(userId);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.ok(user);
    }
}
