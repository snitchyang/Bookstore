package com.example.mybookstore_backend.Service;

import com.example.mybookstore_backend.Dao.BookRepository;
import com.example.mybookstore_backend.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    private BookRepository bookRepository;
    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(int id) {
        return bookRepository.findById(id).orElse(null);
    }

    @Override
    public Book getBooksByTitle(String title) {
        return null;
    }

    @Override
    public boolean decreaseInventory(int id, int quantity){
        Book book = bookRepository.findById(id).orElse(null);
        if(book != null){
            book.setInventory(book.getInventory() - quantity);
            bookRepository.saveAndFlush(book);
            return true;
        }
        return false;
    }
    @Override
    public void saveBook(Book book){
        bookRepository.saveAndFlush(book);
    }

    @Override
    public void deleteBook(int id){
        bookRepository.deleteById(id);
    }
}
