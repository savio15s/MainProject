package com.rsc.corejava.collections;

import java.util.Comparator;
import java.util.Map;
import java.util.TreeMap;

public class TreeMapObject {
    public static void main(String[] args) {    
        //Creating map of Books    
        Map<Book,Integer> map=new TreeMap<Book,Integer>(new SortByPublisher());   
        
        //Map<Integer,Book> map = new TreeMap(new SortByPublisher());

        //Creating Books    
        Book b4=new Book(203,"Zamarin By Introduction","Zumba","Wiley",6);    
        Book b1=new Book(101,"Let us C","Yashwant Kanetkar","BPB",8);    
        Book b2=new Book(102,"Data Communications & Networking","Forouzan","Mc Graw Hill",4);    
        Book b3=new Book(103,"Operating System","Galvin","Ailey",6);
        //Adding Books to map   
        map.put(b4,9);  
        map.put(b2,1);  
        map.put(b1,2);  
        map.put(b3,3);  
        
        //System.out.println(map);
        //Traversing map  
        for(Map.Entry<Book,Integer> entry:map.entrySet()){    
            Book key = entry.getKey();
            Integer b=entry.getValue();  
            System.out.println(b + "###" + key);
        }    
    } 
}

class SortByPublisher implements Comparator<Book> 
{ 
    // Used for sorting in ascending order of 
    // roll number 
    public int compare(Book a, Book b) 
    { 
        return a.getPublisher().compareTo(b.getPublisher()) ;
    } 
}