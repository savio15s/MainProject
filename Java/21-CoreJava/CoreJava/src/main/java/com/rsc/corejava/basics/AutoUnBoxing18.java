package com.rsc.corejava.basics;

import java.util.ArrayList;
import java.util.List;

public class AutoUnBoxing18 {
    public static void main(String[] args){
        Integer i = new Integer(45);

        //UnBoxing
        int a = i;

        System.out.println(a*4);

        int b = 50;

        Integer ii = b;

        System.out.println(ii);

        List<Integer> ages = new ArrayList<>();
        for (int k=0;k<100;k++){
            ages.add(k);
        }
        System.out.println(ages);
    }
}
