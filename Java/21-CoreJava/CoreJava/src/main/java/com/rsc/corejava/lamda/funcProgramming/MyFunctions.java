package com.rsc.corejava.lamda.funcProgramming;

import java.util.function.Function;

public class MyFunctions {
    public static void main(String[] args) {
        new MyFunctions().option1();
        new MyFunctions().option2();
        new MyFunctions().option3();
    }

    public void option1(){
        Function<Long,Long> myFunc = new AddThree();
        System.out.println(myFunc.apply((long) 45));
    }

    public void option2(){
        Function<Long,Long> myFunc = (value) ->  { 
            Long result = value + 3;
            return result;    
        };
        System.out.println(myFunc.apply((long) 45));
    }

    public void option3(){
        Function<Long,Long> myFunc = (value) ->  value + 3;
            
        System.out.println(myFunc.apply((long) 45));
    }
}
class AddThree implements Function<Long, Long> {

    @Override
    public Long apply(Long aLong) {
        return aLong + 3;
    }
}