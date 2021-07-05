package com.rsc.corejava.arrays.ArraysObj;

import java.util.Arrays;

public class ArraysdeepHashCode07 {
    public static void main(String[] args) 
    { 
  
        // Get the Array 
        int intArr[][] = { { 10, 20, 15, 22, 35 } }; 
  
        // To get the dep hashCode of the arrays 
        System.out.println("Integer Array: "
                           + Arrays.deepHashCode(intArr)); 
    } 
}
