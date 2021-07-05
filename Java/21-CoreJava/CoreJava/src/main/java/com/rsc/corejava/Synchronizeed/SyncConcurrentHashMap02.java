package com.rsc.corejava.Synchronizeed;

import java.util.Iterator;
import java.util.concurrent.ConcurrentHashMap;

public class SyncConcurrentHashMap02 {
    public static void main(String[] args) throws CloneNotSupportedException 
    {
        ConcurrentHashMap<Integer, String> concurrHashMap = new ConcurrentHashMap<>();
         
        //Put require no synchronization
        concurrHashMap.put(1, "A");
        concurrHashMap.put(2, "B");
         
        //Get require no synchronization
        concurrHashMap.get(1);
         
        Iterator<Integer> itr = concurrHashMap.keySet().iterator();
         
        //Using synchronized block is advisable
        synchronized (concurrHashMap) 
        {
            while(itr.hasNext()) {
                System.out.println(concurrHashMap.get(itr.next()));
            }
        }
    }
}
