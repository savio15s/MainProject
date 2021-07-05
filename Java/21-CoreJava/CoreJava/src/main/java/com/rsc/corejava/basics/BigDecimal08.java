package com.rsc.corejava.basics;

public class BigDecimal08 {
    public static void main(String[] args) {
        double total = 0.3;
        for(int i=0;i<100;i++){
            total += 0.3;
        }
        System.out.println("total==" + total);
    }
}
