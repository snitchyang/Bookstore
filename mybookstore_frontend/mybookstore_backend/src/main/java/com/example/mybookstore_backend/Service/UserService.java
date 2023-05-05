package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.models.User;

public interface UserService {
    void add(User user);
    void delete(User user);
    boolean findByUsername(String username);
    Integer getUserID(String username);
}
