package com.rsc.corejava.lamda.funcProgramming;

import java.util.function.BiPredicate;

public class BiPredicateSample {

    private void option1(){
        BiPredicate<String, Integer> filter = (x, y) -> {
            return x.length() == y;
        };

        boolean result = filter.test("RSC-SRM Tech", 6);
        System.out.println(result);  // true

        boolean result2 = filter.test("java", 4);
        System.out.println(result2); // false


    }
    public static void main(String[] args) {
        new BiPredicateSample().option1();
    } 
}
