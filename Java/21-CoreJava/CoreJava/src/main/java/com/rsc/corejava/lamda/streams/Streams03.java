package com.rsc.corejava.lamda.streams;

import java.util.ArrayList;
import java.util.List;

import com.rsc.corejava.collections.Book;

public class Streams03 {
    public static void main(String[] args){
        List<Book> lstBooks = new ArrayList<Book>();

        lstBooks.add(new Book(1, "siva1", "autho", "publusher1", 10));
        lstBooks.add(new Book(2, "siva2", "auth2", "publusher2", 20));
        lstBooks.add(new Book(3, "siva3", "auth3", "publusher3", 30));

        lstBooks.forEach(Streams03::printit);
    }

    public static void printit(Book b) {
        System.out.println("====="+ b.toString());
    }
}
