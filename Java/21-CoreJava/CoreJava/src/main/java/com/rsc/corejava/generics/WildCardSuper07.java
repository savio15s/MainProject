package com.rsc.corejava.generics;

import java.util.Arrays;
import java.util.List;

public class WildCardSuper07 {

    public static void main(String[] args) {
        List<Integer> listInt = Arrays.asList(4,6,7,8,9,6);
        printOnlyIntegerClassesorSuperClass(listInt);

        List<Number> lstNum = Arrays.asList(1,2,3,4,5,6,7,8,9);
        printOnlyIntegerClassesorSuperClass(lstNum);
    }
    
    private static void printOnlyIntegerClassesorSuperClass(List<? super Integer> list ) {
     System.out.println(list);   
    }
}

