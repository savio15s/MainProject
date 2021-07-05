package com.rsc.corejava.basics;

import java.math.BigInteger;

public class BigInteger17 {
    public static void main(String[] args){
        System.out.println(BigInteger.TEN);

        String str = "137657566454545345445454545454";

        BigInteger C = BigInteger.TEN.add(new BigInteger(str));

        System.out.println(C);

        BigInteger nxtPrimeNumner = C.nextProbablePrime();

        System.out.println(nxtPrimeNumner.isProbablePrime(8));
    }

     
}
