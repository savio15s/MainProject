package com.rsc.corejava.Executors;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

public class ExecServiceSubmit02 {
    public static void main(String[] args) {
        ExecutorService exec = Executors.newSingleThreadExecutor();

        System.out.println("Thread Name...." + Thread.currentThread().getName());

        Future<?> future = exec.submit(new Runnable() {
            public void run() {
                System.out.println("Asynchronous task");
            }
        });

        try {
            future.get();
        } catch (InterruptedException | ExecutionException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        } // returns null if the task has finished correctly.

        exec.shutdown();

        try {
            exec.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
