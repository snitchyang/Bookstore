package com.example.mybookstore_backend.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @Column(name = "username")
    public String username;
    @Column(name = "password")
    public String password;
    @Column(name = "avatar")
    public String avatar;

    //constructor
    public User() {
    }
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
