package com.rsc.corejava;

/**
 * Hello world!
 */
public final class App {
    private App() {
    }

    /**
     * Says hello to the world.
     * @param args The arguments of the program.
     */
    public static void main(String[] args) {
        System.out.println("Hello World!");
        char c = 'A';
        char b = 'a';

        int result = c-b;

        System.out.println(result);
    }
}
