package com.rsc.corejava.arrays.ArraysObj;

import java.util.Arrays;

public class Arraysmismatch11 {
    public static void main(String[] args) 
    { 
  
        // Get the Arrays 
        int intArr[] = { 10, 20, 15, 22, 35 }; 
  
        // Get the second Arrays 
        int intArr1[] = { 10, 15, 22 }; 
  
        // To compare both arrays 
        System.out.println("The element mismatched at index: "
                           + Arrays.mismatch(intArr, intArr1)); 
    } 
}
