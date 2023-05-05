package com.example.mybookstore_backend.Controllers;

import com.example.mybookstore_backend.Dao.OrderItemRepository;
import com.example.mybookstore_backend.Service.BookService;
import com.example.mybookstore_backend.Service.OrderService;
import com.example.mybookstore_backend.models.Book;
import com.example.mybookstore_backend.models.Order;
import com.example.mybookstore_backend.models.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private BookService bookService;
    @RequestMapping("/orders")
    public List<Order> getOrder(int userId){
        //get all orders of a user
        return orderService.getAllOrders(userId);
    }
    @RequestMapping("/orderItems")
    public List<OrderItem> getOrderItems(int orderId){
        //get all order items of an order
        return orderService.getAllOrderItems(orderId);
    }
    @RequestMapping("/purchase")
    public String purchase(String bookTitle, Integer bookNumber){
        //TODO
        return "success";
    }
    @PostMapping("/addOrder")
    public int addOrder(@RequestBody Order order){
        return orderService.addOrder(order.getUserID(), order.getOrder_date(), order.getTotal_price());
    }
    @PostMapping("/addOrderItem")
    public int addOrderItem(@RequestBody OrderItem orderItem){
        return orderService.addOrderItem(orderItem);
    }
}
