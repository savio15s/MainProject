package com.rsc.corejava.threads;

import java.util.concurrent.TimeUnit;

public class Threads01 extends Thread {
    public static void main(String[] args) {
        Threads01 t1 = new Threads01();
        t1.setName("Super Suppu");
        t1.start();
    }

    public void run() {
        System.out.println("==>Thread Started<==" + "," + Thread.currentThread().getName() + "," + Thread.currentThread().getId());

        try {
            Thread.sleep(1);
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        System.out.println("==>Thread Stoped<==");
    }
}
