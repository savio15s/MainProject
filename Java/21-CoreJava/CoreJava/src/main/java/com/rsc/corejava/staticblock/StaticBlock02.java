package com.rsc.corejava.staticblock;

public class StaticBlock02 {
    static int num;
    static String mystr;
    static {
        num = 97;
        mystr = "Static keyword in Java";
        System.out.println("Static Block 1...");
    }

    static {
        num = 197;
        mystr = "Static keyword in Java2";
        System.out.println("Static Block 2...");
    }

    {
        num = 297;
        mystr = "Static keyword in Java3";
        System.out.println("Static Block 3...");

    }

    public static void main(String args[]) {
        System.out.println("Value of num: " + num);
        System.out.println("Value of mystr: " + mystr);
    }
}
