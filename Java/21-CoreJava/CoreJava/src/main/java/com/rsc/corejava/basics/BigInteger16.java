package com.rsc.corejava.basics;

import java.math.BigInteger;

public class BigInteger16 {
    public static void main(String[] args){
        int N = 70; 
        System.out.println(factorial(N)); 
    }

    static BigInteger factorial(int N) 
    { 
        // Initialize result 
        BigInteger f = new BigInteger("1"); // Or BigInteger.ONE 
  
        // Multiply f with 2, 3, ...N 
        for (int i = 2; i <= N; i++) 
            f = f.multiply(BigInteger.valueOf(i)); 
  
        return f; 
    } 
}
