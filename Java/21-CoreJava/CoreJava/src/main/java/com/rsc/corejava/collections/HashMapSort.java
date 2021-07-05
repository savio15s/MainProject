package com.rsc.corejava.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class HashMapSort {
    public static void main(String[] args) {

        Map<String, Employee> mp = new HashMap<>();

        Employee emp1 = new Employee("BashaBai1", "Don5", 145, 100000);
        Employee emp2 = new Employee("BashaBai2", "Don4", 245, 1200000);
        Employee emp3 = new Employee("BashaBai3", "Don5", 345, 1300000);
        Employee emp4 = new Employee("BashaBai4", "Don6", 445, 1040000);
        Employee emp5 = new Employee("BashaBai5", "Don7", 545, 50000);

        mp.put(emp1.getName(), emp1);
        mp.put(emp2.getName(), emp2);
        mp.put(emp3.getName(), emp3);
        mp.put(emp4.getName(), emp4);
        mp.put(emp5.getName(), emp5);

        System.out.println(mp);

        Map<String, Employee> sorted = new TreeMap<>(mp);

        System.out.println(sorted);

        List<String> employeeByKey = new ArrayList<>(mp.keySet());
        Collections.sort(employeeByKey);

        System.out.println(employeeByKey);

        List<Employee> employeeById = new ArrayList<>(mp.values());
        
        Collections.sort(employeeById,new SprtBySalary());
        System.out.println("====");
        System.out.println(employeeById);

    }
}

class SprtBySalary implements Comparator<Employee> 
{ 
    // Used for sorting in ascending order of 
    // roll number 
    public int compare(Employee a, Employee b) 
    { 
        return a.getSalary() - b.getSalary(); 
    } 
}
