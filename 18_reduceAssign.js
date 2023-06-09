

const array_Numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const sum = array_Numbers.reduce( (array, value) => {
    return array+value;
} );
console.log(sum);
console.log(' ');
console.log('2. Find the numbers multiple of 5 and then sum it');
const newArray1 =[];
array_Numbers.filter( (element) => {
    if (element%5==0) {
        return newArray1.push(element);   
    }
    

});
console.log(newArray1);
const sum1=newArray1.reduce((runningTotal, value)=>{
    return runningTotal + value;
});
console.log(sum1);