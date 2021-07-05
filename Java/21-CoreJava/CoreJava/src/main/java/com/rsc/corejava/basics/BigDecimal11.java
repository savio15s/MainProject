package com.rsc.corejava.basics;

import java.math.BigDecimal;

public class BigDecimal11 {
    public static void main(String[] args) {
        double d1 = 10;
        double d2 = 3;
        System.out.println("Double:\t 10 / 3 = " + (d1 / d2));
    
        float f1 = 10f;
        float f2 = 3f;
        System.out.println("Float:\t 10 / 3 = " + (f1 / f2));
    
        // Exception! 
        BigDecimal bd3 = new BigDecimal("10");
        BigDecimal bd4 = new BigDecimal("3");
        System.out.println("BigDec:\t 10 / 3 = " + (bd3.divide(bd4,4,BigDecimal.ROUND_HALF_EVEN)));
    }
}
