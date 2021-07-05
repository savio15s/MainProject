package com.rsc.corejava.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArrayListSortReverse05 {
    public static void main(String[] args) 
    { 
        // Create a list of strings 
        List<String> al = new ArrayList<String>(); 
        al.add("Madurai"); 
        al.add("Trichy"); 
        al.add("Kanyakumari"); 
        al.add("Is"); 
        al.add("Tanjore"); 
  
        /* Collections.sort method is sorting the 
        elements of ArrayList in ascending order. */
        Collections.sort(al, Collections.reverseOrder()); 
  
        // Let us print the sorted list 
        System.out.println("List after the use of" + 
                           " Collection.sort() :\n" + al); 
    }
}
