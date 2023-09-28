package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.Dao.UserAuthRepository;
import com.example.mybookstore_backend.Dao.UserRepository;
import com.example.mybookstore_backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Objects;
import java.util.Optional;

@Service
public class LoginServiceImpl implements LoginService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Override
    public int login(String username, String password){
        System.out.println("LoginService: " + username + " " + password);
        Optional<User> user = userRepository.findByUsername(username);
        if(user.isPresent() && Objects.equals(user.get().getPassword(), password)){
            int id = user.get().getId();
            if(userService.getUserAuthority(id).equals("admin")) {
                return 0;
            }else if(user.get().getStatus().equals("banned")){
                return -2;
            }else{
                return id;
            }
        }else{
            return -1;
        }
    }
}
