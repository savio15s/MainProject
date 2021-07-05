package com.rsc.corejava.collections;

import java.util.Enumeration;
import java.util.List;
import java.util.Vector;

public class Vector05 {
    public static void main (String[] args) {
        List<Object> vec = new Vector<Object>();
        String s = "hello";
        vec.add(s);
        vec.add(new Integer(123));
        vec.add(s);
        vec.add("goodbye");
        vec.add(s+s);
        vec.add("goodbye");
        System.out.println("vector size = " + vec.size());
        // Use enhanced for loop to iterate over the collection
        for (Object o : vec) { 
            System.out.println(o);  // Print element
        }        
        vec.add(2, new Integer(123));
        vec.remove(4);  
        System.out.println("vector size = " + vec.size());
        System.out.println("first occurrence of s = " + vec.indexOf(s));
        System.out.println("last occurrence of s = " + vec.lastIndexOf(s));
        // Use enhanced for loop to iterate over the collection
        for (Object o : vec) { 
            System.out.println(o);  // Print element
        }        
        System.out.println("=========");

        
  
        System.out.println("The enumeration of values are:"); 
  
        
    }
}
