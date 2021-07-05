package com.rsc.corejava.generics;

public class MultipleGenerics02 {
    public static void main (String[] args) 
    { 
        MyTest <String, Integer> obj = 
            new MyTest<String, Integer>("RSC", 15); 
  
        obj.print(); 
    }
}
class MyTest<T, U> 
{ 
    T obj1;  // An object of type T 
    U obj2;  // An object of type U 
  
    // constructor 
    MyTest(T obj1, U obj2) 
    { 
        this.obj1 = obj1; 
        this.obj2 = obj2; 
    } 
  
    // To print objects of T and U 
    public void print() 
    { 
        System.out.println(obj1); 
        System.out.println(obj2); 
    } 
} 