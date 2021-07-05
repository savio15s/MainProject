package com.rsc.corejava.basics;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class BigDecimal12 {
    public static void main(String[] args) {
        BigDecimal bd4 = new BigDecimal("2.557");
        System.out.println(bd4.setScale(1, RoundingMode.HALF_EVEN));
        //System.out.println(bd4.setScale(2, RoundingMode.HALF_UP));
    }
}
