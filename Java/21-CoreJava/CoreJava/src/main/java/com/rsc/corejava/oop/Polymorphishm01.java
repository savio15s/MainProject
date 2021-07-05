package com.rsc.corejava.oop;

public class Polymorphishm01 {
    public static void main(String[] args) {

        System.out.println(MultiplyFun.Multiply(2, 4));

        System.out.println(MultiplyFun.Multiply(5.5, 6.3));

        System.out.println(MultiplyFun.Multiply(2, 7, 3)); 
    }
}

class MultiplyFun {

    // Method with 2 parameter
    static int Multiply(int a, int b) {
        return a * b;
    }

    // Method with the same name but 2 double parameter
    static double Multiply(double a, double b) {
        return a * b;
    }

    // Method with the same name but 3 parameter 
    static int Multiply(int a, int b, int c) 
    { 
        return a * b * c; 
    } 
}
