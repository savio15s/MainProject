package com.rsc.corejava.lamda.funcProgramming;

public class MyFunctionalImpl {
    public static void main(String[] args) {
        MyInterface lambda = () -> {
            System.out.println("Executing...");
        };

        lambda.execute();
    }
}
