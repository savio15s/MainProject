package com.rsc.corejava.generics;

import java.util.ArrayList;
import java.util.List;

public class SimpleGeneric04 {
  public static void main(String[] args) {
      List<Integer> lst = new ArrayList<>();

      lst.add(456);
      lst.add(567);

      System.out.println(lst);

      int a = lst.get(1)*2;

      System.out.println(a);
      
  }  
}
