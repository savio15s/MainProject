package com.rsc.corejava.collections;

import java.util.HashMap;
import java.util.Map;

public class Mapping01 {
    public static void main(String[] args){
        Customer c1 =  new Customer();
        c1.setId(1);
        c1.setName("Shiva");

        Customer c2 =  new Customer();
        c2.setId(2);
        c2.setName("Mahadev");

        Customer c3 =  new Customer();
        c3.setId(3);
        c3.setName("Mahadev");
        

        System.out.println(c1.hashCode());
        System.out.println(c2.hashCode());
        System.out.println(c3.hashCode());

        Map hmMap = new HashMap();
        hmMap.put(c1,"Polaris1");
        hmMap.put(c2,"Polaris2");
        hmMap.put(c3,"Polaris3");

        System.out.println(hmMap);

    }
}
