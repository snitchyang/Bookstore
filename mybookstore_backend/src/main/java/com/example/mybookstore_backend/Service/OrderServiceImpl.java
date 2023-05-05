package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.Dao.OrderItemRepository;
import com.example.mybookstore_backend.Dao.OrderRepository;
import com.example.mybookstore_backend.models.Order;
import com.example.mybookstore_backend.models.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;


    @Override
    public int addOrder(int userId, String orderDate, double total_price) {
        Order order = new Order(userId, orderDate, "payed", total_price);
        orderRepository.saveAndFlush(order);
        return order.getId();
    }

    @Override
    public int addOrderItem(OrderItem orderItem) {
//        orderItem.setOrder(orderRepository.findById(orderItem.getOrderID()).orElse(null));
        orderItemRepository.saveAndFlush(orderItem);
        return orderItem.getId();
    }


    @Override
    public void deleteOrder(int orderId) {

    }

    @Override
    public void updateOrder(int orderId, int quantity) {

    }

    @Override
    public List<Order> getAllOrders(int userId) {
        //get all orders of a user
        return orderRepository.findAllByUserID(userId);
    }
    @Override
    public List<OrderItem> getAllOrderItems(int orderId){
        //get all order items of an order
        return orderItemRepository.findAllByOrderID(orderId);
    }
}
