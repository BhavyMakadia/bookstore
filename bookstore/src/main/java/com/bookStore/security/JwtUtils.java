package com.bookStore.security;

import com.bookStore.entity.Admin;
import com.bookStore.entity.User;

public class JwtUtils {

    private static final long EXPIRATION_TIME = 86400000; // 1 day in milliseconds

    public static String generateUserToken(User user) {
        // Creating a simple, unencrypted token string
        return user.getUsername() +"|"+ user.getEmail()+"|" + (System.currentTimeMillis() + EXPIRATION_TIME);
    }
    public static String generateAdminToken(Admin admin) {
        // Creating a simple, unencrypted token string
        return admin.getUsername() +"|"+ admin.getEmail()+"|" + (System.currentTimeMillis() + EXPIRATION_TIME);
    }
}
