package com.rsc.corejava.oop;

public interface LoggerManager {
    void doLog(String val);

    default void msg(){
        System.out.println("default method");
    }  
}
