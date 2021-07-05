package com.rsc.corejava.oop;

public class PaymentManagerImpl implements PaymentManager,LoggerManager {

    @Override
    public Boolean doFundsTransfer() {
        System.out.println("#### doFundsTransfer");
        return Boolean.TRUE;
    }

    @Override
    public String getFundsTransferStatus(String txnRefNumber) {
        System.out.println("#### getFundsTransferStatus::" + txnRefNumber);
        return "done";
    }

    @Override
    public void doLog(String val) {
        System.out.println("LOGGER ::" + val);
        System.out.println("CUBE::" + PaymentManager.cube(5));
    }
    
}
