

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log( arrayNumbers);
console.log('1. Find out the numbers which are greater than 50 and log on console');
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);

console.log('2. Find all even number and log on console');
const arrayEven = arrayNumbers.filter( (element)=> {
    return element%2==0;
} );
console.log(arrayEven);
console.log('3. Find all odd number and log on console');
const arrayOdd = arrayNumbers.filter( (element)=> {
    return element%2;
} );
console.log(arrayOdd);
console.log('4. Find all number multiple of 5 and log on console');
const arrayMultiple = arrayNumbers.filter( (element)=> {
    return element%5==0;
} );
console.log(arrayMultiple);
console.log('5. Find number between 20-50 and log on console');

const arrayNum = arrayNumbers.filter( (element)=> {
    return element>=20 && element<=50;
} );
console.log(arrayNum);


