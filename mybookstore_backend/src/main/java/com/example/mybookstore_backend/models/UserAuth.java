package com.example.mybookstore_backend.models;

import lombok.Data;
import org.hibernate.annotations.FetchProfile;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user_auth")
public class UserAuth {
    @Id
    @Column(name = "id")
    public Integer id;
    //foreign key to user table
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    public User user;
    @Column(name = "role")
    public String role;
}
