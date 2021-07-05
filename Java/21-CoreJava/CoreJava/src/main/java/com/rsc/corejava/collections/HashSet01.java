package com.rsc.corejava.collections;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;


public class HashSet01 {
    public static void main (String[] args) {
        Set<String> hs = new HashSet<String>();
        String s = "hello";
        hs.add(s);
        hs.add("goodbye");
        hs.add(s+s);
        Customer c = new Customer();
        c.setId(4);
        c.setName("abcd");
        hs.add(c.toString());
        System.out.println("hash set size = " + hs.size());
        // Use enhanced for loop to iterate over the collection
        for (String str : hs) { 
            System.out.println(str);  // Print element
        }        
        hs.remove(s);  
        System.out.println(hs.contains(s));  
        System.out.println("hash set size = " + hs.size());
        // Use enhanced for loop to iterate over the collection
        for (String str : hs) { 
            System.out.println(str);  // Print element
        }        

        Iterator<String> itr = hs.iterator(); 
        while (itr.hasNext()) { 
            System.out.println("==" + itr.next()); 
        }
        // Check for empty set, clear set and then check again
        System.out.println(hs.isEmpty());
        hs.clear();  
        System.out.println(hs.isEmpty());
    }
}
