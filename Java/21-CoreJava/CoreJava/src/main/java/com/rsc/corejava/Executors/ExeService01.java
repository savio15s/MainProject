package com.rsc.corejava.Executors;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ExeService01 {
    public static void main(String[] args) throws InterruptedException {
        ExecutorService exec = Executors.newSingleThreadExecutor();

        System.out.println("Thread Name...." + Thread.currentThread().getName());

        exec.execute(new Runnable() {
            public void run() {
                int a = 5;
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                System.out.println("Thread 1.." + Thread.currentThread().getName() + "," + ++a);
            }
        });

        exec.execute(new Runnable(){
            public void run() {
                int a = 3;
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                System.out.println("Thread 2.." + Thread.currentThread().getName() + "," + ++a);
            }
        });

        exec.shutdown();

        exec.awaitTermination(10, TimeUnit.SECONDS);



    }
}
