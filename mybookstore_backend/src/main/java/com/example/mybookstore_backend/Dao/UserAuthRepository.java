package com.example.mybookstore_backend.Dao;

import com.example.mybookstore_backend.models.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserAuthRepository extends JpaRepository<UserAuth, Integer> {
    Optional<UserAuth> findById(Integer id);
}
