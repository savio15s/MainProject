package com.rsc.corejava.arrays.ArraysObj;

import java.util.Arrays;

public class ArraysParallenSort12 {
    public static void main(String[] args) 
    { 
  
        // Get the Array 
        int intArr[] = { 99,10, 20, 15, 22, 35 }; 
  
        // To sort the array using parallelSort 
        Arrays.parallelSort(intArr); 
  
        System.out.println("Integer Array: "
                           + Arrays.toString(intArr)); 
    } 
}
