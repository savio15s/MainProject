package com.rsc.corejava.oop;

public interface PaymentManager {
    public Boolean doFundsTransfer();

    public String getFundsTransferStatus(String txnRefNumber);

    public static int cube(int x){
        return x*x*x;
    }  

}
