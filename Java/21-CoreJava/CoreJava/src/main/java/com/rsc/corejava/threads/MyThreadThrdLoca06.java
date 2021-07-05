package com.rsc.corejava.threads;

public class MyThreadThrdLoca06 implements Runnable {

    private ThreadLocal<Integer> threadLocal = new ThreadLocal<Integer>();

    @Override
    public void run() {
        threadLocal.set((int) (Math.random() * 50d));
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        System.out.println(threadLocal.get());
    }

    public static void main(String[] args) {
        MyThreadThrdLoca06 mythrd = new MyThreadThrdLoca06();

        Thread thrd1 = new Thread(mythrd);
        Thread thrd2 = new Thread(mythrd);
        Thread thrd3 = new Thread(mythrd);

        thrd1.start();
        thrd2.start();
        thrd3.start();
    }
    
}
