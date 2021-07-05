package com.rsc.corejava.generics;

public class Bound06 {

    public static void main(String[] args){
        Bound<Swift> swiftCar = new Bound<>(new Swift());
        swiftCar.applyBreak();
        swiftCar.startEngine();
        swiftCar.applyBreak();
    }
    
}

class Bound<T extends Car> {

    private T objRef;

    public Bound(T obj) {
        this.objRef = obj;
    }

    public void applyBreak(){
        System.out.println(this.objRef.getClass().getName() + "...Car Stopped");
    }

    public void startEngine(){
        this.objRef.startEngine(true);
    }

}

class Car {
    public void startEngine(Boolean b) {
        System.out.println("Super Class Car Started....");
    }
}

class Celerio extends Car {
    public void startEngine(Boolean b) {
        System.out.println("Celerio Car Started....");
    }
}

class Swift extends Car {
    public void startEngine(Boolean b) {
        System.out.println("Swift Car Started....");
    }
}