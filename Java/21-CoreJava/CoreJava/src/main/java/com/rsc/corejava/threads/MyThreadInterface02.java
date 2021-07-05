package com.rsc.corejava.threads;

import java.util.concurrent.TimeUnit;

public class MyThreadInterface02 implements Runnable {
   public static void main(String[] args){
    MyThreadInterface02 myThread = new MyThreadInterface02();
    Thread t1 = new Thread(myThread);
    Thread t2 = new Thread(myThread);
    Thread t3 = new Thread(myThread);
    t1.start();
    t2.start();
    t3.start();
   }

   @Override
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
