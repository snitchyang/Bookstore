package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.Dao.UserRepository;
import com.example.mybookstore_backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
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
}
