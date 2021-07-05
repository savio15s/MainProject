package com.rsc.corejava.generics;

import java.util.HashMap;
import java.util.Map;

import com.rsc.corejava.collections.Book;

public class SimpleGeneric05 {
    public static void main(String[] args) {
       Map<String,Book> mpBook = new HashMap<>();
       
       mpBook.put("book1", new Book(2, "Wings of fire1", "APJ Kalam Scientist", "Vanathy Pub", 100));
       mpBook.put("book2", new Book(2, "Wings of fire2", "APJ Kalam People Prsient", "Vanathy Pub", 100));
       mpBook.put("book3", new Book(2, "Wings of fire3", "APJ Kalam Green", "Vanathy Pub", 100));
       mpBook.put("book4", new Book(2, "Wings of fire4", "APJ Kalam Humble", "Vanathy Pub", 100));
       //mpBook.put("book4", new String("123432"));
       if (mpBook.containsKey("book4")){
        System.out.println("Exists");
       } else System.out.println("Not Exists");

       System.out.println(mpBook.containsValue(new Book(2, "Wings of fire4", "APJ Kalam Humble", "Vanathy Pub", 100)));

    }
}
