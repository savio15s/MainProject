package com.rsc.corejava.threads;

public class MyThreadCallRun04 extends Thread {
    public void run(){
        System.out.println("Thread Stasrted:-" + Thread.currentThread().getName());
    }

    public static void main(String[] args) {
        MyThreadCallRun04 myThread = new MyThreadCallRun04();
        //myThread.run();
        myThread.start();
    }
}
