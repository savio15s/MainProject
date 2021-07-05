package com.rsc.corejava.collections;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class LinkedListClass05 {
    public static void main (String[] args) {
        LinkedList<Object> ll = new LinkedList<Object>();

        List<Object> lst = new ArrayList<>();
        lst.add("1");
        lst.add("2");

        ll.addAll(lst);

        ll.addFirst("ZERO");
        ll.addLast("HUNDRED");

        System.out.println(ll.contains("1"));

        String s = "hello";
        ll.add(s);
        ll.add(new Integer(123));
        ll.add(s);
        ll.add("goodbye");
        ll.add(s+s);

        ll.offer("end");
        System.out.println("linked list size = " + ll.size());
        System.out.println("linked list contains: " + ll);
        ll.add(3, new Integer(123));
        System.out.println("linked list size = " + ll.size()); 
        
        System.out.println("linked list contains: " + ll);
        System.out.println(ll.poll());
        System.out.println("linked list contains: " + ll);
    }
}
