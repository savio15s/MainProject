package com.rsc.corejava.Synchronizeed;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class SyncArrayList01 {
    public static void main(String[] args) {
        List<String> list = Collections.synchronizedList(new ArrayList<String>());

        list.add("practice");
        list.add("code");
        list.add("quiz");

        synchronized (list) {
            // must be in synchronized block
            Iterator it = list.iterator();
            String val = "";
            while (it.hasNext()) {
                val = (String)it.next();
                if (val.equalsIgnoreCase("code")){
                    it.remove();
                } else System.out.println(val);
            }
        }
    }
}
