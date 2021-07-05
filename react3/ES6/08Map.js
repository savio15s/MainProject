let mymap = new Map();

mymap.set("rsc","fullStack");
mymap.set("rsc1","JS");

console.log(mymap);

let anothermap = new Map([
    ["a","value1"],
    ["a2","value2"],
    ["a3","value9"],
]);

console.log(anothermap);

for(let ab of anothermap.entries()){
    console.log(`data is ${ab[0]}---${ab[1]}`);
}
