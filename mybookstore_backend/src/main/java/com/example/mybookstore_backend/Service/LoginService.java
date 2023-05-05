package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.models.User;

public interface LoginService {
    int login(String username, String password);
}
