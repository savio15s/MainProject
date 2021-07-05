console.log("=====================================")

var obj = new Object();

var objKey = {};
var objKey2 = {id:2};

obj[objKey] = 'object as key in object';

console.log(obj);
console.log(JSON.stringify(obj));

console.log(obj[objKey]);

obj[objKey2] = 'object 2 as key in object';

console.log(obj);

console.log("=====================================");

var k1 = {a: 1};
var k2 = {b: 2};

var map = new Map();
//var wm = new WeakMap();

map.set(k1, 'k1');
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
//wm.set(k2, 'k2');

console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.size ); // 3

k1 = null;
map.forEach(function (val, key) {
    console.log(key, val); // k1 {a: 1}
});

//console.log(wm.get(k2)); // undefined
//k2 = null;
//console.log(wm.get(k2)); // undefined