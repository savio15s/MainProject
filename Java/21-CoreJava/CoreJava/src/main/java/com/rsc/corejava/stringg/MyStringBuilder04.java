package com.rsc.corejava.stringg;

public class MyStringBuilder04 {
    public static void main(String[] args) {
        StringBuilder sBuilder = new StringBuilder();
        sBuilder.append("hello");
        sBuilder.append(" world");

        System.out.println(sBuilder);

        System.out.println(sBuilder.capacity());

    }
}
