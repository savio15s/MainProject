package com.rsc.corejava.stringg;

import java.util.Scanner;

public class SuperString00 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        for(int i=0;i<10000;i++){
            String ss = new String("RSC.." + i);
            System.out.println(ss);
        }
        String ss1 = new String("RSC.." + 1);
        String ss = new String("RSC.." + 2);
        System.out.println("Enter Your name...");
        String result = s.nextLine();
        System.out.println("Return key pressed--" + result);
    }
}
