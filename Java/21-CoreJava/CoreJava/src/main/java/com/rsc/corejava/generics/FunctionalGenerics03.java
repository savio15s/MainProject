package com.rsc.corejava.generics;

import com.rsc.corejava.collections.Book;

public class FunctionalGenerics03 {
    static <T> void genericDisplay (T element) 
    { 
        System.out.println(element.getClass().getName() + 
                           " = " + element); 
    } 
   
    // Driver method 
    public static void main(String[] args) 
    { 
         // Calling generic method with Integer argument 
        genericDisplay(11); 
   
        // Calling generic method with String argument 
        genericDisplay("GeeksForGeeks"); 
   
        // Calling generic method with double argument 
        genericDisplay(1.0); 

        Book book = new Book(2, "Wings of fire", "APJ Kalam", "Vanathy Pub", 10);


        genericDisplay(book);
    } 
}
