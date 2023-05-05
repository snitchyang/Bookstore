package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.models.Order;
import com.example.mybookstore_backend.models.OrderItem;
import org.springframework.stereotype.Service;

import java.util.List;

public interface OrderService {
    int addOrder(int userId, String orderDate, double total_price);
    int addOrderItem(OrderItem orderItem);
    void deleteOrder(int orderId);
    void updateOrder(int orderId, int quantity);
    List<Order> getAllOrders(int userId);
    List<OrderItem> getAllOrderItems(int orderId);
}
