package com.rsc.corejava.stringg;

public class MyString01 {
    public static void main(String[] args){
         // Declare String without using new operator
         String s = "Hello World";
 
         // Prints the String.
         System.out.println("String s = " + s);
  
         // Declare String using new operator
         String s1 = new String("Hello World");

         String s2 = new String("Hello World").intern();
  
         // Prints the String.
         System.out.println("String s1 = " + s1);

         char[] names = s.toCharArray();
         for(int i=0;i<names.length;i++){
             System.out.println(names[i]);
         }
    }
}
