package com.rsc.corejava.Executors;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecCallableInvokeall05 {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executorService = Executors.newFixedThreadPool(3);

        Set<Callable<String>> callables = new HashSet<Callable<String>>();

        callables.add(new Callable<String>() {
            public String call() throws Exception {
                return "Task 1";
            }
        });
        callables.add(new Callable<String>() {
            public String call() throws Exception {
                return "Task 2";
            }
        });
        callables.add(new Callable<String>() {
            public String call() throws Exception {
                return "Task 3";
            }
        });

        for(int i=0;i<1000;i++) {
            callables.add(new Callable<String>() {
                public String call() throws Exception {
                    return "Task X-";
                }
            });
        }

        List<Future<String>> result = executorService.invokeAll(callables);
        for(Future<String> future:result){
            System.out.println("The o/p is..." + future.get());
        }

        executorService.shutdown();
    }
}
