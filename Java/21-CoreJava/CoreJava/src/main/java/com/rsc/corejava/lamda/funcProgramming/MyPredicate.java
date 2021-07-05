package com.rsc.corejava.lamda.funcProgramming;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class MyPredicate {

    private void option1() {
        Predicate<Integer> noGreaterThan5 = x -> x > 5;

        System.out.println(noGreaterThan5.test(10));

        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        List<Integer> collect = list.stream().filter(noGreaterThan5).collect(Collectors.toList());

        System.out.println(collect); // [6, 7, 8, 9, 10]
    }

    private void option2() {

        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // multiple filters
        List<Integer> collect = list.stream().filter(x -> x > 5 && x < 8).collect(Collectors.toList());

        System.out.println(collect);

    }

    private void option3() {

        Predicate<Integer> noGreaterThan5 = x -> x > 5;
        Predicate<Integer> noLessThan8 = x -> x < 8;

        Predicate newPredicate=noGreaterThan5.and(noLessThan8);

        System.out.println(newPredicate.test(7));

        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        List<Integer> collect = list.stream()
                .filter(noGreaterThan5.and(noLessThan8))
                .collect(Collectors.toList());

        System.out.println(collect);

    }

    private void option4() {
        Predicate<String> lengthIs3 = x -> x.length() == 3;
        Predicate<String> startWithA = x -> x.startsWith("A");

        List<String> list = Arrays.asList("A", "AA", "AAA", "B", "BB", "BBB");

        List<String> collect = list.stream()
                .filter(lengthIs3.or(startWithA))
                .collect(Collectors.toList());

        System.out.println(collect);
    }

    //negaste
    private void option5() {
        Predicate<String> startWithA = x -> x.startsWith("A");

        List<String> list = Arrays.asList("A", "AA", "AAA", "B", "BB", "BBB");

        List<String> collect = list.stream()
                .filter(startWithA.negate())
                .collect(Collectors.toList());

        System.out.println(collect);
    }

    public static void main(String[] args) {
        //new MyPredicate().option1();
        //new MyPredicate().option2();
        //new MyPredicate().option3();
        //new MyPredicate().option4();
        new MyPredicate().option5();
    }
}
