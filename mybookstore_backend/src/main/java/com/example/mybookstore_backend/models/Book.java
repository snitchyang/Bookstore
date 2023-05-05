package com.example.mybookstore_backend.models;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "book")
public class Book {
    @Id
    @Column(name = "id")
    public int id;
    @Column(name = "title")
    public String title;
    @Column(name = "price")
    public double price;
    @Column(name = "author")
    public String author;
    @Column(name = "cover")
    public String cover;

    //constructor
    public Book(){
    }
    public Book(int id, String title, double price, String author, String cover){
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
        this.cover = cover;
    }

}
