package com.rsc.corejava.arrays.ArraysObj;

import java.util.Arrays;

public class ArraysCompare03 {
    public static void main(String[] args) 
    { 
  
        // Get the Array 
        int intArr[] = { 10, 20, 15, 22, 35 }; 
  
        // Get the second Array 
        int intArr1[] = { 10, 20, 15, 22, 45 }; 
  
        // To compare both arrays 
        System.out.println("Integer Arrays on comparison: "
                           + Arrays.compare(intArr, intArr1)); 
    }
}
