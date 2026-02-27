const n=100;

const balance = new Number(100);
console.log(balance);

const d = new Date();
console.log(d.toString());

let a=[1,2,3,4,5,6,7,8,9];
let b = a.slice(2,5);
console.log(a);
console.log(b);


let c= a.splice(2,5);  // starting index, no of element to splice (not indiex)
console.log(a);
console.log(c);
