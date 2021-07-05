package com.rsc.corejava.basics;

import java.math.BigDecimal;

public class BigDecimal10 {
    public static void main(String[] args){
        BigDecimal10.method1();
    }

    public static void method1(){
        int scale=4;

        double value = 0.12343454534343;

        BigDecimal bd = new BigDecimal(Double.toString(value));

        bd = bd.setScale(scale,BigDecimal.ROUND_HALF_EVEN);

        System.out.println(bd);

        String strvalue = bd.stripTrailingZeros().toPlainString();

        System.out.println(strvalue);
    }
}
