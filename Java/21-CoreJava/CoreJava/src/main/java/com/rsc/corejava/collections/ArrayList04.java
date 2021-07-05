package com.rsc.corejava.collections;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class ArrayList04 {
    public static void main (String[] args) {
        List<Object> al = new ArrayList<Object>();
        String s = "hello";
        al.add(s);
        al.add(new Integer(123));
        al.add(s);
        al.add("goodbye");
        al.add(s+s);
        al.add("goodbye");
        System.out.println("array list size = " + al.size());
        // Use enhanced for loop to iterate over the collection
        for (Object o : al) { 
            System.out.println(o);  // Print element
        }        
        al.add(2, new Integer(123));
        al.remove(4);  
        System.out.println("array list size = " + al.size());
        System.out.println("first occurrence of s = " + al.indexOf(s));
        System.out.println("last occurrence of s = " + al.lastIndexOf(s));
        // Use enhanced for loop to iterate over the collection
        for (Object o : al) { 
            System.out.println(o);  // Print element
        }        
        System.out.println("====================");

        Iterator itr = al.iterator();
        

        while(itr.hasNext()){
            System.out.println("==>"+ itr.next());
        }
    }
}
