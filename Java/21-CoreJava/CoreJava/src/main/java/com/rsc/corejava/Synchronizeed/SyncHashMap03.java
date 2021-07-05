package com.rsc.corejava.Synchronizeed;

import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class SyncHashMap03 {
    public static void main(String[] args) throws CloneNotSupportedException 
    {
        Map<Integer, String> syncHashMap = Collections.synchronizedMap(new HashMap<>());
         
        //Put require no synchronization
        syncHashMap.put(1, "A");
        syncHashMap.put(2, "B");
         
        //Get require no synchronization
        syncHashMap.get(1);
         
        Iterator<Integer> itr = syncHashMap.keySet().iterator();
         
        //Using synchronized block is advisable
        synchronized (syncHashMap) 
        {
            while(itr.hasNext()) {
                System.out.println(syncHashMap.get(itr.next()));
            }
        }
    }
}
