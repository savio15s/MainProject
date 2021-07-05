package com.rsc.corejava.generics;

import java.util.Arrays;
import java.util.List;

public class WildCardUpper06 {

    public static void main(String[] args){
        List<Integer> listInt = Arrays.asList(4,5,6,7,8);
        System.out.println(sum(listInt));

        List<Double> listDouble = Arrays.asList(4.1,5.4,6.1,7.4,8.5);
        System.out.println(sum(listDouble));
    }


    private static double sum(List<? extends Number> list) {
        
        double sum = 0.0;

        for(Number i : list){
            sum+=i.doubleValue();
        }
        return sum;
    }
    
}
