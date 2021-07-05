package com.rsc.corejava.oop;

public class Inheritance01 {

    public static void main(String[] args){
        Car car = new Car(10);
        System.out.println(car.numberofWheels);
        car.doDrive();
        car.applyBrake();

        Vehicle veh = car;
        veh.doDrive();

    }
    
}

class Car extends Vehicle {
    
    Car(int val) {
        super(val);
    }

    @Override
    public void doDrive(){
        System.out.println("Child Class");
        super.doDrive();
    }

    void applyBrake() {
       System.out.println("Applied Brake...");

    }
    
}

class Vehicle {
    public int numberofWheels=0;

    Vehicle(int val){
        this.numberofWheels = val;
    }

    public void doDrive(){
        System.out.println("Started the " + numberofWheels + "Wheel Vehicle");
    }

    //abstract void applyBrake();
}