package com.rsc.corejava.basics;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class BigDecimal09 {
    public static void main(String[] args) {
       BigDecimal bd = new BigDecimal("12.456");

       System.out.println(bd.toString());

       System.out.println(bd.setScale(2,RoundingMode.HALF_EVEN).toString());

       BigDecimal bg2 = new BigDecimal("10.456");

       BigDecimal result = bg2.multiply(bd).setScale(2,RoundingMode.HALF_UP);

       System.out.println(result);

       BigDecimal bg3 = new BigDecimal("10.456");

       System.out.println(bg3.compareTo(bg2));

       System.out.println(bg2.intValue());
    }
}
