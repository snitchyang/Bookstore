package com.example.mybookstore_backend.Controllers;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.mybookstore_backend.Dao.OrderItemRepository;
import com.example.mybookstore_backend.Service.BookService;
import com.example.mybookstore_backend.Service.OrderService;
import com.example.mybookstore_backend.models.Book;
import com.example.mybookstore_backend.models.Order;
import com.example.mybookstore_backend.models.OrderItem;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.kafka.core.KafkaTemplate;
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
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    @RequestMapping("/orders")
    public List<Order> getOrder(int userId){
        //get all orders of a user
        return orderService.getAllOrders(userId);
    }
    @RequestMapping("/allOrders")
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }
    @RequestMapping("/allOrderItems")
    public List<OrderItem> getAllOrderItems(){
        return orderService.getAllOrderItems();
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
        JSONObject orderJson = (JSONObject) JSON.toJSON(order);
        kafkaTemplate.send("orderTopic", orderJson.toJSONString());
//        return orderService.addOrder(order.getUserID(), order.getOrder_date(), order.getTotal_price());
        return 0;
    }
    @PostMapping("/addOrderItem")
    public int addOrderItem(@RequestBody OrderItem orderItem){
        int orderId = orderItem.getOrderID();
        orderItem.setOrder(orderService.getOrderById(orderId).orElse(null));
        bookService.decreaseInventory(orderItem.getBookID(), orderItem.getBookNumber());
        return orderService.addOrderItem(orderItem);
    }
    @PostMapping("/placeOrder")
    public int placeOrder(@RequestBody Order order, OrderItem[] orderItems){
        int orderId = orderService.addOrder(order.getUserID(), order.getOrder_date(), order.getTotal_price());
        for(OrderItem orderItem: orderItems){
            orderItem.setOrderID(orderId);
            orderItem.setOrder(orderService.getOrderById(orderId).orElse(null));
            bookService.decreaseInventory(orderItem.getBookID(), orderItem.getBookNumber());
            orderService.addOrderItem(orderItem);
        }
        return orderId;
    }
}
