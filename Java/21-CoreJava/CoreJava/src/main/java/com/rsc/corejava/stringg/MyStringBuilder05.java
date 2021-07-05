package com.rsc.corejava.stringg;

public class MyStringBuilder05 {
    public static void main(String[] args) {
        new MyStringBuilder05().example1();
        new MyStringBuilder05().example2();
        new MyStringBuilder05().example3();
        new MyStringBuilder05().example4();
        new MyStringBuilder05().example5();
    }
    

    public void example1(){
        StringBuilder sb = new StringBuilder("Hello");
        sb.insert(2, "Java");

        System.out.println(sb);
    }

    public void example2(){
        StringBuilder sb = new StringBuilder("Hello");
        sb.replace(1, 4, "java");

        System.out.println(sb);
    }

    public void example3(){
        StringBuilder sb = new StringBuilder("Hello");
        sb.delete(1, 3);

        System.out.println(sb);
    }


    public void example4(){
        StringBuilder sb = new StringBuilder("Hello");
        sb.reverse();

        System.out.println(sb);
    }

    public void example5(){
        System.out.println("===");
        StringBuilder sb = new StringBuilder();
        

        System.out.println(sb.capacity()); //default 16

        sb.append('s');
        sb.append(Boolean.TRUE);

        System.out.println(sb.capacity());

        sb.append("A Lengthy Text and sentense");

        System.out.println(sb.capacity()); //(16*2)+2 = 34
    }
}

