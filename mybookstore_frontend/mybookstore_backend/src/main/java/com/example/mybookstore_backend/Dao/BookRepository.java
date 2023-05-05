package com.example.mybookstore_backend.Dao;

import com.example.mybookstore_backend.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByTitle(String title);
    Optional<Book> findById(Integer id);
}
