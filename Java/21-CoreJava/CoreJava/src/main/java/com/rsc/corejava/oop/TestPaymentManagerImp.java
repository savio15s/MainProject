package com.rsc.corejava.oop;

public class TestPaymentManagerImp {
    public static void main(String[] args){
        PaymentManagerImpl impl = new PaymentManagerImpl();
        impl.doFundsTransfer();

        impl.doLog("Test");

        impl.getFundsTransferStatus("TXN123456");

        impl.msg();

    }
}
