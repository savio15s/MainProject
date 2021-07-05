package com.rsc.corejava.threads;

public class MyThreadYield05 extends Thread {

    public static void main(String[] args) {
        MyThreadYield05 t1 = new MyThreadYield05();
        MyThreadYield05 t2 = new MyThreadYield05();
        MyThreadYield05 t3 = new MyThreadYield05();
        MyThreadYield05 t4 = new MyThreadYield05();
        MyThreadYield05 t5 = new MyThreadYield05();
        MyThreadYield05 t6 = new MyThreadYield05();

        t1.setPriority(Thread.MAX_PRIORITY);
        t2.setPriority(Thread.MIN_PRIORITY);
        t3.setDaemon(Boolean.TRUE);
        
        t1.start();
        t2.start();

        t3.start();
        t4.start();

        t5.start();
        try {
            t5.join();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        Thread.yield();
        t6.start();
        
    
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("i=" + i + Thread.currentThread().getName());

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

        }

    }

}
