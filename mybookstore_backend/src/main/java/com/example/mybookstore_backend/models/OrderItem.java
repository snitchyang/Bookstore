package com.example.mybookstore_backend.models;

import com.example.mybookstore_backend.Dao.OrderItemRepository;
import com.example.mybookstore_backend.Service.OrderService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Repository;

import javax.persistence.*;

@Data
@Entity
@Table(name = "OrderItem")
public class OrderItem {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    public Integer id;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "orderID", insertable = false, updatable = false)
    public Order order;
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
