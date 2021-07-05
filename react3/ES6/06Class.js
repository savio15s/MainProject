class Animal {
<<<<<<< HEAD
  constructor(h, w) {
    this.height = h;
    this.weight = w;
    this.#property = "test";
  }

  #property;

  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#property;
  }

  doSomething() {
    return this.height + this.weight;
  }

  set hght(h) {
    this.height = h;
  }

  get getHght() {
    return this.height;
  }
}

class Elephant extends Animal {
  constructor(h, w, x) {
    super(h, w);
    this.xVar = x;
  }

  doShout() {
    console.log("Elephant is shouting..");
  }
}

let dog = new Animal(12, 34);
let res = dog.doSomething();
//console.log(res);

let indianEle = new Elephant(1, 2, 3);
=======
    constructor(h,w){
        this.height = h;
        this.weight = w;
    }

    doSomething(){
        return this.height + this.weight;
    }

    set hght(h){
        this.height = h
    }

    get getHght(){
        return this.height;
    }
}

class Elephant extends Animal {

    constructor(h,w,x){
        super(h,w);
        this.xVar = x;
    }

    doShout(){
        console.log("Elephant is shouting..");
    }
}

let dog = new Animal(12,34);
let res = dog.doSomething();
//console.log(res);

let indianEle = new Elephant(1,2,3);
>>>>>>> 7a2b5e1093478a025252f7a7c32007ed8c2b0eff
res = indianEle.doSomething();
indianEle.doShout();
console.log(res);

<<<<<<< HEAD
let anotherclass = class {
  constructor(h, w) {
    this.height = h;
    this.weight = w;
  }

  doSomething() {
    return this.height + this.weight;
  }
};
=======

let anotherclass = class {
    constructor(h,w){
        this.height = h;
        this.weight = w;
    }

    doSomething(){
        return this.height + this.weight;
    }
}
>>>>>>> 7a2b5e1093478a025252f7a7c32007ed8c2b0eff
