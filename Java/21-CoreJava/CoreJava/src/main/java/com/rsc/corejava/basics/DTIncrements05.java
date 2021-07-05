package com.rsc.corejava.basics;

public class DTIncrements05 {
    public static void main(String[] args) {
        int a = 1;

        //you will see 1
        System.out.println(a++);

        //now a is 2
        System.out.println(a);

        System.out.println(++a); //you will see 3

        int b=a++;

        System.out.println(b); //3
        System.out.println(a); //4
    }
}
