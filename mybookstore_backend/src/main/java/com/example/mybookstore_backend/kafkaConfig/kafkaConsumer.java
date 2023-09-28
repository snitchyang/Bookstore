package com.example.mybookstore_backend.kafkaConfig;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.mybookstore_backend.Service.OrderService;
import com.example.mybookstore_backend.models.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class kafkaConsumer {
    @Autowired
    private OrderService orderService;
    @Autowired
    KafkaTemplate<String, String> kafkaTemplate;
    @KafkaListener(topics = "orderTopic")
    void handleOrder(String string){
        JSONObject orderJson = JSON.parseObject(string);
        int userId = orderJson.getInteger("userID");
        System.out.println("Received order from: " + userId);
        int orderId = orderService.addOrder(orderJson.getInteger("userID"), orderJson.getString("date"), orderJson.getDouble("total_price"));
        kafkaTemplate.send("orderFinishedTopic", orderId + " Order placed successfully!");
    }

    @KafkaListener(topics = "orderFinishedTopic")
    void handleOrderFinished(String string){
        System.out.println("Received order finished: " + string);
    }
}
