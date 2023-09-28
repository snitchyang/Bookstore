package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.models.Order;
import com.example.mybookstore_backend.models.OrderItem;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    int addOrder(int userId, String orderDate, double total_price);
    int addOrderItem(OrderItem orderItem);
    void deleteOrder(int orderId);
    void updateOrder(int orderId, int quantity);
    List<Order> getAllOrders(int userId);
    List<OrderItem> getAllOrderItems(int orderId);
    List<OrderItem> getAllOrderItems();
    Optional<Order> getOrderById(int orderId);
    List<Order> getAllOrders();
}
