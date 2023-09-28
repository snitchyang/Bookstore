package com.example.mybookstore_backend.Controllers;

import com.example.mybookstore_backend.Service.UserService;
import com.example.mybookstore_backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    public UserService userService;
    @RequestMapping("/register")
    public String register(String username, String password){
        if(userService.findByUsername(username)){
            return "Username already exists";
        }
        User user = new User(username, password);
        userService.add(user);
        return "Register Success";
    }
    @RequestMapping("/userID")
    public Integer getUserID(String username){
        return userService.getUserID(username);
    }
    @RequestMapping("/allUsers")
    public List<User> getAllUsers(){
        return userService.findAll();
    }
    @RequestMapping("/banUser")
    public void banUser(int userid){
        userService.banUser(userid);
    }
    @RequestMapping("/unbanUser")
    public void unbanUser(int userid){
        userService.unbanUser(userid);
    }
}
