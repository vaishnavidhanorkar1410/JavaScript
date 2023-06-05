

console.log(`1. Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`"Good Morning, Today is Monday"`);
}
display();

console.log('----------------------------------------------------------------------------');
console.log(`2. Arrow function with 3 arguments and no return value`);
let multiply = (n1, n2, n3=1) => {
    console.log(`Multiplication is : ${n1*n2*n3}`);  
}
multiply(5, 5, 2);
multiply(10, 4);

console.log('----------------------------------------------------------------------------');
console.log(`3. Arrow function with 5 arguments and return value`);
let add = (m1, m2, m3, m4, m5) => {
    let result =m1+m2+m3+m4+m5;
    return result;

}
let result = add(100, 100, 200, 349,756);
console.log(`Addition is : ${result}`);
let str = add("i am ","learning ","ES6 ",'features ', "in depth ");
console.log(`${str}`);