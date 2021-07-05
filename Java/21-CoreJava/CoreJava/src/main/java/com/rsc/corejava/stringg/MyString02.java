package com.rsc.corejava.stringg;

public class MyString02 {
    public static void main(String[] args) {
        String str = "Hello World";
        char[] data = str.toCharArray();

        for(int i=0;i<data.length;i++){
            System.out.println(i + "," + data[i]);
        }

        
        System.out.println(str.length());

        System.out.println(str.charAt(4));

        System.out.println(str.substring(2, 4));

        System.out.println(str.substring(2));

        System.out.println(str.concat(" RSC"));

        System.out.println("=>" + str.indexOf("Wo",2));

        System.out.println(str.lastIndexOf("o"));

        System.out.println(str.equals("Hello world"));

        System.out.println(str.equalsIgnoreCase("Hello world"));

        System.out.println(str.compareTo("Hello world"));

        System.out.println(str.compareToIgnoreCase("Hello world"));

        System.out.println(str.toLowerCase());

        System.out.println(str.toUpperCase());

        System.out.println("  -Hello World-  ".trim());

        System.out.println(str.replace("H", "B"));
    }
}
