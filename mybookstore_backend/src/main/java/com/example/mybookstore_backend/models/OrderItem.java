package com.example.mybookstore_backend.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "OrderItem")
public class OrderItem {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    public Integer id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parentOrderID")
    public Order order;
    @Column(name = "")
    public int orderID;
    @Column(name = "bookID")
    public int bookID;
    @Column(name = "bookNumber")
    public int bookNumber;
    @Column(name = "total_price")
    public double total_price;

    //constructor
    public OrderItem() {
    }
    public OrderItem(int orderID, int bookID, int bookNumber, double total_price) {
        this.orderID = orderID;
        this.bookID = bookID;
        this.bookNumber = bookNumber;
        this.total_price = total_price;
    }
}
