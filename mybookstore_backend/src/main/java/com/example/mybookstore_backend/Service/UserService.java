package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.models.User;

import java.util.List;

public interface UserService {
    void add(User user);
    void delete(User user);
    boolean findByUsername(String username);
    User findByUserId(int id);
    Integer getUserID(String username);
    String getUserAuthority(int userID);
    List<User> findAll();
    void banUser(int userID);
    void unbanUser(int userID);
}
