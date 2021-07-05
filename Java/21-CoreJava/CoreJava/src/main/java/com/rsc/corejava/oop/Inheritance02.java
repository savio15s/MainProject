package com.rsc.corejava.oop;

public class Inheritance02 {

    public static void main(String[] args){
        Car1 car = new Car1();

        car.setLicensePlate("123");
        car.updateLicensePlate("abc");
        
        System.out.println("license plate: "
                + car.getLicensePlate());
    }
    
}

class Car1 extends Vehicle1 {
    
    protected String licensePlate = null;

    @Override
    public void setLicensePlate(String license) {
        super.setLicensePlate(license);
    }

    @Override
    public String getLicensePlate() {
        return super.getLicensePlate();
    }

    public void updateLicensePlate(String license){
        this.licensePlate = license;
    }
    
}

class Vehicle1 {
    String licensePlate = null;

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    //abstract void applyBrake();
}