package com.rsc.corejava.Executors;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

public class ExecScheduleService06 {
    public static void main(String[] args) throws InterruptedException {
        ScheduledExecutorService exec = Executors.newScheduledThreadPool(4);

        Runnable task1 = new Runnable() {
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
        };

        ScheduledFuture<?> future = exec.schedule(task1, 10, TimeUnit.SECONDS);

        System.out.println(future.getDelay(TimeUnit.SECONDS));

        Thread.sleep(5000);

        System.out.println(future.getDelay(TimeUnit.SECONDS));

        exec.shutdown();

        exec.awaitTermination(10, TimeUnit.SECONDS);
    }
}
