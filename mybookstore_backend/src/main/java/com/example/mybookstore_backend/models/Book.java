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
    @Column(name = "inventory", columnDefinition = "int default 100")
    public int inventory = 100;

    //constructor
    public Book(){
    }
    public Book(String title, double price, String author, String cover, int inventory){
        this.title = title;
        this.price = price;
        this.author = author;
        this.cover = cover;
        this.inventory = inventory;
    }

}
