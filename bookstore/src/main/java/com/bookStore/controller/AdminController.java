package com.bookStore.controller;

import com.bookStore.entity.Admin;
import com.bookStore.entity.BookwithAuthor;
import com.bookStore.security.JwtUtils;
import com.bookStore.service.AdminService;
import com.bookStore.service.BookwithAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @CrossOrigin("*")
    @PostMapping("/admin")
    public ResponseEntity<?> adminLogin(@RequestBody Admin formadmin){
        Boolean admin = adminService.authenticate(formadmin.getUsername(),formadmin.getPassword());
        if(admin)
        {
            String token = JwtUtils.generateAdminToken(formadmin);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("message", "Login successful");
            return ResponseEntity.ok(response);
        }
        else
        {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @Autowired
    private BookwithAuthorService bookwithAuthorService;

    @CrossOrigin("*")
    @GetMapping("/abed/admin/queues")
    public ResponseEntity<List<BookwithAuthor>> getBooksWithAssignedUsers() {
        try{
            List<BookwithAuthor> booksWithUsers = bookwithAuthorService.getBooksWithAssignedUsers();
            if(booksWithUsers == null)
                return ResponseEntity.notFound().build();
            else
                return ResponseEntity.ok(booksWithUsers);
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }
}

