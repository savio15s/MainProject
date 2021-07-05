package com.rsc.corejava.basics;

public class DTChar03 {
    public static void main(String[] args) {  
  
        char char1=65;  
        char char2=97;  
        char char3=' ';
        char char4='4';
          
        System.out.println("char1: "+char1);  
        System.out.println("char2: "+char2);  
        System.out.println("char3: "+Character.isWhitespace(char3)); 
        System.out.println("char3: "+Character.isDigit(char4));  
    }  
}
