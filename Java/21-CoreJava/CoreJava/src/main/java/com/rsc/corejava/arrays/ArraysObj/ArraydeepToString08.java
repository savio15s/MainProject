package com.rsc.corejava.arrays.ArraysObj;

import java.util.Arrays;

public class ArraydeepToString08 {
    public static void main(String[] args) 
    { 
  
        // Get the Array 
        int intArr[][] = { { 10, 20, 15, 22, 35 } }; 
  
        // To get the deep String of the arrays 
        System.out.println("Integer Array: "
                           + Arrays.deepToString(intArr)); 
    }
}
