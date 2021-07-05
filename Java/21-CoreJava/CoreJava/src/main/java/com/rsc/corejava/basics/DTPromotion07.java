package com.rsc.corejava.basics;

public class DTPromotion07 {
    public static void main(String[] args) {
        DTPromotion07.Promotion1();
        DTPromotion07.Promotion2();
    }

    public static void Promotion1() {
        byte b = 42;
        char c = 'a';
        short s = 1024;

        short z = 1048;

        int i = 50000;
        float f = 5.67f;
        double d = .1234;

        // The Expression
        double result = (f * b) + (i / c) - (d * s);

        // Result after all the promotions are done
        System.out.println("result = " + result);

        int zz = s + z;

        System.out.println(zz);
    }

    public static void Promotion2() {
        byte b = 50;  
          
        //type casting int to byte 
        b = (byte)(b * 2);  
        System.out.println(b);
    }
}