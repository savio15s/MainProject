package com.rsc.corejava.basics;

public class CompCompareTo15 {
    public static void main(String[] args){
        // Get some Strings to compare 
        String s1 = "A"; 
        String s2 = "A"; 
        String s3 = "a"; 
        String s4 = new String("A"); 
  
        // Compare s1 and s2 
        // It should return 0 as they both 
        // have the same ASCII value 
        System.out.println(s1 + " .compareTo " + s2 
                         + ": " + s1.compareTo(s2)); 
  
        // Compare s1 and s3 
        // It should return -32 as they both 
        // have the different ASCII value 
        System.out.println(s1 + " .compareTo " + s3 
                         + ": " + s1.compareTo(s3)); 
  
        // Compare s3 and s2 
        // It should return 32 as they both 
        // have the different ASCII value 
        System.out.println(s3 + " .compareTo " + s2 
                         + ": " + s3.compareTo(s2)); 
  
        // Compare s1 and s4 
        // It should return 0 as they both 
        // have the same ASCII value 
        System.out.println(s1 + " .compareTo " + s4 
                         + ": " + s1.compareTo(s4)); 
    }
}
