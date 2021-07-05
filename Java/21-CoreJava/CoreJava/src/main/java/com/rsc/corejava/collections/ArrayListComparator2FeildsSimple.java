package com.rsc.corejava.collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ArrayListComparator2FeildsSimple {
    public static void main(String[] args) 
    {
        List<EmployeeNew> list = Arrays.asList(new EmployeeNew(1, "A", "B", 34),
                                        new EmployeeNew(1, "A", "B", 55),
                                        new EmployeeNew(1, "A", "B", 24), 
                                        new EmployeeNew(4, "C", "D", 30), 
                                        new EmployeeNew(3, "B", "A", 31), 
                                        new EmployeeNew(2, "D", "C", 25));
 
        Collections.sort(list, new FirstNameSorter()
                                .thenComparing(new LastNameSorter())
                                .thenComparing(new AgeSorter()));
 
        System.out.println(list);
    }
    
}

class FirstNameSorter implements Comparator<EmployeeNew> 
{
    public int compare(EmployeeNew o1, EmployeeNew o2) 
    {
        return o1.getFirstName().compareTo(o2.getFirstName());
    }
}
 
class LastNameSorter implements Comparator<EmployeeNew> 
{
    public int compare(EmployeeNew o1, EmployeeNew o2) 
    {
        return o1.getLastName().compareTo(o2.getLastName());
    }
}
 
class AgeSorter implements Comparator<EmployeeNew> 
{
    public int compare(EmployeeNew o1, EmployeeNew o2) 
    {
        return o1.getAge() - o2.getAge();
    }
}