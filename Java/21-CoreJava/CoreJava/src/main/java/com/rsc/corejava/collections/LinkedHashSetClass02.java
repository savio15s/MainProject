package com.rsc.corejava.collections;

import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetClass02 {
    public static void main (String[] args) {
        Set<String> lhs = new LinkedHashSet<String>();
        String s = "one";
        lhs.add(s);
        lhs.add("two");
        lhs.add(s+s);

        

        System.out.println("linked hash set size = " + lhs.size());
        // Use enhanced for loop to iterate over the collection
        for (String str : lhs) { 
            System.out.println(str);  // Print element
        }        
        lhs.remove(s);  
        System.out.println(lhs.contains(s));  
        System.out.println("linked hash set size = " + lhs.size());
        // Use enhanced for loop to iterate over the collection
        for (String str : lhs) { 
            System.out.println(str);  // Print element
        }        
        // Check for empty set, clear set and then check again
        System.out.println(lhs.isEmpty());
        lhs.clear();  
        System.out.println(lhs.isEmpty());
    }
}
