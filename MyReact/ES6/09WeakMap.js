const wm1 = new WeakMap();

const obj1 = {
    name:'ragupathi',
    fname:'valiyapathi'
}

const obj2 = {
    name:'name1',
    fname:'name2'
}

const obj3 = {
    name:'name1',
    fname:'name2'
}

wm1.set(obj1,{name:"somename1"});
wm1.set(obj2,{name:"somename1"});

console.log(wm1.get(obj1));
console.log(wm1.has(obj3));