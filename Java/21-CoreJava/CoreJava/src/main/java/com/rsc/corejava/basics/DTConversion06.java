package com.rsc.corejava.basics;

public class DTConversion06 {
    public static void main(String[] args) {
        new DTConversion06().wideningAuto();
        new DTConversion06().NarrowExplicit1();
        new DTConversion06().NarrowExplicit2();
    }

    public void wideningAuto() {
        int ii = 100;

        // automatic type conversion
        long ll = ii;

        // automatic type conversion
        float f = ll;
        System.out.println("Int value " + ii);
        System.out.println("Long value " + ll);
        System.out.println("Float value " + f);
    }

    public void NarrowExplicit1() {
        char ch = 'c';
        int num = 88;
        ch = (char) num;

        System.out.println(ch);

    }

    public void NarrowExplicit2() {
        double d = 100.04;  
          
        //explicit type casting 
        long l = (long)d; 
          
        //explicit type casting  
        int i = (int)l;  
        System.out.println("Double value "+d); 
          
        //fractional part lost 
        System.out.println("Long value "+l);  
          
        //fractional part lost 
        System.out.println("Int value "+i);  
    }

}
