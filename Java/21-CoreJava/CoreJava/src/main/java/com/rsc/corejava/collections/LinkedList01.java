package com.rsc.corejava.collections;

import java.util.Iterator;
import java.util.LinkedList;

public class LinkedList01 {
    public static void main(String args[]) {
        LinkedList<String> ll = new LinkedList<String>();
        System.out.println("Initial list of elements: " + ll);
        ll.add("Ravi");
        ll.add("Vijay");
        ll.add("Ajay");

        ll.addFirst("Lokesh");

        ll.addLast("Harsh");
        System.out.println("Initial list of elements: " + ll);
        System.out.println("Removes the first item from the ll.." + ll.poll());
        System.out.println("PEEK item from the ll.." + ll.peek()); //get the first item
        System.out.println("Offer item from the ll.." + ll.offer("MyLAST-Item")); 
        System.out.println("Offer item from the ll.." + ll.offer("MyLAST-Item2")); 
        System.out.println("After invoking add(E e) method: " + ll);

        ll.addFirst("Ramaia");

        ll.addLast("Simba");

        System.out.println("After invoking add(E e) method: " + ll);

        ll.remove("Vijay");
        System.out.println("After invoking add(E e) method: " + ll);
        
        ll.remove(0);
        System.out.println("After invoking add(E e) method: " + ll);
        ll.removeLast();
        ll.removeFirstOccurrence("Gaurav");
        ll.removeLastOccurrence("Harsh");

        System.out.println("After invoking add(E e) method: " + ll);

        Iterator i = ll.descendingIterator();
        while (i.hasNext()) {
            System.out.println(i.next());
        }



        ll.clear();
        System.out.println("After invoking clear() method: " + ll);
    }
}
