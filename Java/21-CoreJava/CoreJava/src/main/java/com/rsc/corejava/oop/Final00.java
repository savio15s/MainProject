package com.rsc.corejava.oop;

public class Final00 extends Bike{
    final int speedlimit = 90;// final variable

    void run() {
        speedlimit = 400;
    }

    public static void main(String args[]) {
        Final00 obj = new Final00();
        obj.run();
    }
}

final class Bike {
    final void run() {
        System.out.println("running");
    }
}
