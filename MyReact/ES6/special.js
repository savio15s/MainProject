import prods from './data.js';


let prd = {
    products : prods
}

//console.log(prods);

let { products: abcd } = prd;
console.log(abcd);

