package com.rsc.corejava.generics;

public class Bound07 {
    public static void main(String[] args) {
        SpecialBound<IPod> sBound = new SpecialBound<>(new myIPOD());

        sBound.signa1();
        sBound.signa2();
    }
}

class SpecialBound<T extends IPod & SwitchControls> {
    private T objRef;

    public SpecialBound(T objRef){
        this.objRef = objRef;
    }

    public void signa1(){
        this.objRef.on();
    }

    public void signa2(){
        this.objRef.off();
    }
}

interface SwitchControls {
    public void on();
    public void off();
}

class IPod implements SwitchControls {

    @Override
    public void on() {
        System.out.println("---ON---");
    }

    @Override
    public void off() {
        System.out.println("---OFF---");
    }

}

class myIPOD extends IPod {

}