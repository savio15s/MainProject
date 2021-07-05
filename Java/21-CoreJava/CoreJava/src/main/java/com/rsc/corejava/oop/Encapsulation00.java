package com.rsc.corejava.oop;

public class Encapsulation00 {
    private String name;
    private String idNum;
    private int age;

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public String getIdNum() {
        return idNum;
    }

    public void setAge(int newAge) {
        age = newAge;
    }

    public void setName(String newName) {
        name = newName;
    }

    public void setIdNum(String newId) {
        idNum = newId;
    }

    public static void main(String args[]) {
        Encapsulation00 encap = new Encapsulation00();
        encap.setName("James");
        encap.setAge(20);
        encap.setIdNum("12343ms");
  
        System.out.println("Name : " + encap.getName() + " Age : " + encap.getAge());
     }
}
