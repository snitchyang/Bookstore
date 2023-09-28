package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.Dao.UserAuthRepository;
import com.example.mybookstore_backend.Dao.UserRepository;
import com.example.mybookstore_backend.models.User;
import com.example.mybookstore_backend.models.UserAuth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserAuthRepository userAuthRepository;
    @Override
    public void add(User user) {
        userRepository.save(user);
    }

    @Override
    public void delete(User user) {
        userRepository.delete(user);
    }

    @Override
    public boolean findByUsername(String username) {
        User user = userRepository.findByUsername(username).orElse(null);
        return userRepository.findByUsername(username).isPresent();
    }
    @Override
    public Integer getUserID(String username){
        User user = userRepository.findByUsername(username).orElse(null);
        if(user != null){
            return user.getId();
        }else{
            return -1;
        }
    }

    @Override
    public String getUserAuthority(int userID) {
        UserAuth userAuth = userAuthRepository.findById(userID).orElse(null);
        if(userAuth != null) {
            return userAuth.getRole();
        }else{
            return "user";
        }
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void banUser(int userID) {
        User user = userRepository.findById(userID).orElse(null);
        if(user!= null){
            user.setStatus("banned");
            userRepository.save(user);
        }
    }

    @Override
    public void unbanUser(int userID) {
        User user = userRepository.findById(userID).orElse(null);
        if(user!= null){
            user.setStatus("OK");
            userRepository.save(user);
        }
    }

    @Override
    public User findByUserId(int id){
        return userRepository.findById(id).orElse(null);
    }
}
