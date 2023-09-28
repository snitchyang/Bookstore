package com.example.mybookstore_backend.Controllers;

import com.example.mybookstore_backend.Dao.BookRepository;
import com.example.mybookstore_backend.Service.BookService;
import com.example.mybookstore_backend.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
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
    @RequestMapping("/addBook")
    boolean addBook(String title, String author, double price, String cover, int inventory){
        Book book = new Book(title, price, author, cover, inventory);
        bookService.saveBook(book);
        return true;
    }
    @RequestMapping("/deleteBook")
    boolean deleteBook(int bookId){
        bookService.deleteBook(bookId);
        return true;
    }
    @RequestMapping("/inventory")
    int getInventory(int bookId){
        Book book = bookService.getBookById(bookId);
        return book.getInventory();
    }
    @RequestMapping("/editBook")
    boolean editBook(int bookId, String title, String author, double price, int inventory){
        Book book = bookService.getBookById(bookId);
        if(book != null){
            book.setTitle(title);
            book.setAuthor(author);
            book.setPrice(price);
            book.setInventory(inventory);
            bookService.saveBook(book);
            return true;
        }
        return false;
    }
    @RequestMapping("/changeBookCover")
    boolean changeBookCover(int bookId, String cover){
        Book book = bookService.getBookById(bookId);
        if(book != null){
            book.setCover(cover);
            bookService.saveBook(book);
            return true;
        }
        return false;
    }
    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("photo") MultipartFile file){
        String fileName = file.getOriginalFilename();
        try{
            file.transferTo(new File(new File("src/main/resources/static/bookCover").getAbsolutePath() + "/" + fileName));
        }catch (IOException e){
            e.printStackTrace();
        }
        return "error";
    }
}
