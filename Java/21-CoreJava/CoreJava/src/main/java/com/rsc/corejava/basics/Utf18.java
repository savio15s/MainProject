package com.rsc.corejava.basics;

import java.nio.charset.StandardCharsets;

public class Utf18 {
    public static void main(String[] args) {
        String germanString = "Entwickeln Sie mit Vergnügen";
        byte[] germanBytes = germanString.getBytes();

        String asciiEncodedString = new String(germanBytes, StandardCharsets.US_ASCII);
        String asciiEncodedString2 = new String(germanBytes, StandardCharsets.UTF_8);

        System.out.println(asciiEncodedString.equals(germanString));
        System.out.println(asciiEncodedString2.equals(germanString));
    }
}
