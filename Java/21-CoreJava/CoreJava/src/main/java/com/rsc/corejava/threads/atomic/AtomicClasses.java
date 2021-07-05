package com.rsc.corejava.threads.atomic;

import java.util.concurrent.atomic.AtomicBoolean;

public class AtomicClasses {
    public static void main(String[] args) {
        AtomicBoolean aBol = new AtomicBoolean();
        aBol.set(Boolean.TRUE);

        // swapping
        Boolean oldValue = aBol.getAndSet(false);

        System.out.println(oldValue);

        boolean expectedValue = true;
        boolean newValue = false;

        boolean wasNewValueSet = aBol.compareAndSet(expectedValue, newValue);

        System.out.println(wasNewValueSet);
    }
}
