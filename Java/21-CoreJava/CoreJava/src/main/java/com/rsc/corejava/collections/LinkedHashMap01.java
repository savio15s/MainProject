package com.rsc.corejava.collections;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMap01 {
    public static void main(String[] args) {
        LinkedHashMap<String, Integer> wordNumberMapping = new LinkedHashMap<>();

        // Adding new key-value pairs to the LinkedHashMap
        wordNumberMapping.put("one", 1);
        wordNumberMapping.put("two", 2);
        wordNumberMapping.put("three", 3);
        wordNumberMapping.put("four", 4);

        // Add a new key-value pair only if the key does not exist in the LinkedHashMap, or is mapped to `null`
        wordNumberMapping.putIfAbsent("five", 5);


        wordNumberMapping.putIfAbsent("five", 55);

        wordNumberMapping.put("five", 555);

        System.out.println(wordNumberMapping);

        String key = "five";
        if(wordNumberMapping.containsKey(key)) {
            System.out.println("Found the customer with id " + key + " : " + wordNumberMapping.get(key));
        } else {
            System.out.println("Customer with id " + key + " does not exist");
        }

        int val = 555;
        if(wordNumberMapping.containsValue(val)) {
            System.out.println("Found the customer with id " + val);
        } else {
            System.out.println("Customer with value " + val + " does not exist");
        }


        System.out.println("\n=== Iterating over the entrySet of a LinkedHashMap using iterator() ===");
        Iterator<Map.Entry<String, Integer>> userCityMappingIterator = wordNumberMapping.entrySet().iterator();
        while (userCityMappingIterator.hasNext()) {
            Map.Entry<String, Integer> entry = userCityMappingIterator.next();
            System.out.println(entry.getKey() + " => " + entry.getValue());
        }
    }
}
