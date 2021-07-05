package com.rsc.corejava.collections;

import java.util.Iterator;
import java.util.TreeSet;

public class TreeSet03 {
    public static void main(String args[]) {
        // Creating TreeSet and
        // adding elements
        TreeSet<String> ts = new TreeSet<String>();

        ts.add("V");
        ts.add("A");
        ts.add("B");
        ts.add("Z");
        ts.add("z");
        ts.add("a");

        // Traversing elements
        Iterator<String> itr = ts.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }
    }
}
