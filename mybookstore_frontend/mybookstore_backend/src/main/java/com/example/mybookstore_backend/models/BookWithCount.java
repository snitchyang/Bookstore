package com.example.mybookstore_backend.models;

public class BookWithCount {
    public Book book;
    public int count;

    public BookWithCount(Book book, int count) {
        this.book = book;
        this.count = count;
    }
}
