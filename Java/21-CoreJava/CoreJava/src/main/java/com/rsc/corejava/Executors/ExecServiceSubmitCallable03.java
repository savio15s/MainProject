package com.rsc.corejava.Executors;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

public class ExecServiceSubmitCallable03 {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService exec = Executors.newSingleThreadExecutor();

        System.out.println("Thread Name...." + Thread.currentThread().getName());

        Future future = exec.submit(new Callable() {
            public Object call() throws Exception {
                System.out.println("Asynchronous Callable");
                Thread.sleep(5000);
                return "Callable Result";
            }
        });

        System.out.println("future.get() = " + future.get());

        exec.shutdown();

        exec.awaitTermination(10, TimeUnit.SECONDS);

    }
}
