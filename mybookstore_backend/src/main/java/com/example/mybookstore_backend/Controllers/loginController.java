package com.example.mybookstore_backend.Controllers;

import com.example.mybookstore_backend.Dao.UserRepository;
import com.example.mybookstore_backend.Service.LoginService;
import com.example.mybookstore_backend.Service.LoginServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/login")
public class loginController {
    @Autowired
    private LoginService loginService;
    @GetMapping("")
    int login(String username, String password){
        return loginService.login(username, password);
    }

}
