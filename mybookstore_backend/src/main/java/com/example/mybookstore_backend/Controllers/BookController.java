package com.example.mybookstore_backend.Controllers;

import com.example.mybookstore_backend.Dao.BookRepository;
import com.example.mybookstore_backend.Service.BookService;
import com.example.mybookstore_backend.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class BookController {
    @Autowired
    private BookService bookService;
    @RequestMapping("/books")
    public List<Book> getAllBooks(){
        List<Book> allBooks = bookService.getAllBooks();
        //iterate through the list and print out the book title
        for(Book book: allBooks){
            //modify the book cover
            book.setCover("http://localhost:8080/bookCover/" + book.getCover());
        }
        return allBooks;
    }
    @RequestMapping ("/book")
    Book getBookById(int bookId){
        Book book = bookService.getBookById(bookId);
        book.setCover("http://localhost:8080/bookCover/" + book.getCover());
        return book;
    }
}
