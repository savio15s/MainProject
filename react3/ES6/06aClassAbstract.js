class Animal {
  constructor() {
      console.log(this.constructor);
    if (this.constructor == Animal) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  say() {
    throw new Error("Method 'say()' must be implemented.");
  }

  eat() {
    console.log("eating");
  }
}

/**
 * Dog.
 *
 * @class Dog
 * @extends {Animal}
 */
class Dog extends Animal {
  say() {
    console.log("bark");
  }
}

/**
 * Cat.
 *
 * @class Cat
 * @extends {Animal}
 */
class Cat extends Animal {
  say() {
    console.log("meow");
  }
}

/**
 * Horse.
 *
 * @class Horse
 * @extends {Animal}
 */
class Horse extends Animal {}


new Dog().eat(); // eating
new Cat().eat(); // eating
new Horse().eat(); // eating

new Dog().say(); // bark
new Cat().say(); // meow
//new Horse().say(); // Error: Method say() must be implemented.

new Animal(); // Error: Abstract classes can't be instantiat