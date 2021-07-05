package com.rsc.corejava.lamda.streams;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Stream02 {
    public static void main(String[] args) {
        Student s1 = new Student("1", "Kabali", 100);
        Student s2 = new Student("2", "Zimba", 200);
        Student s3 = new Student("3", "Yakhy", 130);
        Student s4 = new Student("4", "Annamalai", 90);
        Student s5 = new Student("5", "Kala", 10);

        List<Student> lstStudents = new ArrayList();
        lstStudents.add(s1);
        lstStudents.add(s2);
        lstStudents.add(s3);
        lstStudents.add(s4);
        lstStudents.add(s5);

        Comparator myComp = new Comparator<Student>(){

            @Override
            public int compare(Student o1, Student o2) {
                // TODO Auto-generated method stub
                return (o1.getName().compareTo(o2.getName()));
            }
             
        };

        lstStudents.stream().sorted(myComp).forEach(System.out::println);

        List<Student> lst  =lstStudents.stream().map((Student stu)->{
            stu.setMarks(stu.getMarks()+100);
            return stu;
        }).map((Student stu)->{
            stu.setName(stu.getName().concat("-tst"));
            return stu;
        }).collect(Collectors.toList());
        
        lst.forEach(System.out::println);
  
        List<Student> sortedList = lstStudents.stream()
            .sorted(Comparator.comparingInt(Student::getMarks))
            .collect(Collectors.toList());
        System.out.println("=============");
        System.out.println(sortedList);
    }
}
