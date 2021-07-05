function add(x,y){
    return x+y;
}

let result = add(5,3);

const addx  = (x,y) => x+y;

//console.log(addx(6,7));

const addxy  = () => "123";

const addxyz  = x => x+"123";

const addx1  = (x,y) => {
    console.log("the i/p is" + x + "," + y);
    return x+y;
}

console.log(addx1(6,7));

//Higher Order Function
const hoc = (x,cb)=> {
    console.log("Hfn.." + x);
    let ab = cb(x);
    console.log(ab)
}

hoc(10,(x)=>x+100);