package com.rsc.corejava.threads;

public class MyThreadJoin03 implements Runnable {

    public static void main(String[] args) {
        MyThreadJoin03 t1 = new MyThreadJoin03();

        Thread thrd1 = new Thread(t1,"Tom");
        Thread thrd2 = new Thread(t1, "Jerry");
        Thread thrd3 = new Thread(t1,"Koundamani");
        Thread thrd4 = new Thread(t1,"Senthil");

        thrd1.start();
        thrd2.start();

        try {
            thrd2.join();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        thrd3.start();
        thrd4.start();


    }
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println(i + Thread.currentThread().getName());
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }
    
}
