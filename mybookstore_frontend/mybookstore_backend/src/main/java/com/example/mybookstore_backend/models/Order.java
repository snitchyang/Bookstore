package com.example.mybookstore_backend.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "book_order")
public class Order {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    public int id;
    @Column(name = "userId")
    public int userID;
    @Column(name = "order_date")
    public String order_date;
    @Column(name = "order_status")
    public String order_status;
    @Column(name = "total_price")
    public double total_price;

    //constructor
    public Order(int userId, String order_date, String order_status, double total_price) {
        this.userID = userId;
        this.order_date = order_date;
        this.order_status = order_status;
        this.total_price = total_price;
    }

    public Order() {}
}
