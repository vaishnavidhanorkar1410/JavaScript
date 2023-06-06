

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("1. Add 10 into each element and log new array");
const arrayTrans = arrayNumbers.map( (element) => {
    return element+10;
} );
console.log(arrayTrans);

console.log('-------------------------------------------------------------');
console.log("2. Square the each array element ");
const arrayTran = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayTran);

console.log('-------------------------------------------------------------');
console.log("3. Add the index value into its corresponding each array element and log new array");
const arrayTransf = arrayNumbers.map( (element, index) => {
    return element+index;
} );
console.log(arrayTransf);

