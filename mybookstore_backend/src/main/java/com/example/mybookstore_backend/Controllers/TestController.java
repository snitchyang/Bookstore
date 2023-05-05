package com.example.mybookstore_backend.Controllers;

import com.example.mybookstore_backend.models.Book;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {
    @RequestMapping("/hello")
    String hello(int pageNum, String bookName){
        return "HelloWorld" + bookName + pageNum;
    }

}


