package com.rsc.corejava.collections;

public class EmployeeNew {
    private Integer id = -1;
    private Integer age = -1;
    private String firstName = null;
    private String lastName = null;
 
    public EmployeeNew(Integer id, String fName, String lName, Integer age) {
            this.id = id;
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
    }
 
    //Getters and Setters
 
    @Override
    public String toString() {
        return "\nEmployee [id=" + id + ", age=" + age + ", firstName=" + firstName + ", lastName=" + lastName + "]";
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
