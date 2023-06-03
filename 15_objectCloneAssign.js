console.log(`Step 1:This is a Shallow Clone..`);
const arrayNums = [20,3,4,56,90,400,49];
// const arrayNumsCopy = arrayNums; //shallow clone
const cloneArray =  arrayNums 
console.log(cloneArray);
cloneArray.push(55,56);
console.log(cloneArray);

console.log(`Step 2:Deep Clone using Spred Operator..`);
console.log(arrayNums);
cloneArray.push(10,25);
console.log(cloneArray);

console.log(`Step 3:Merge and Concat Array..`);
console.log(arrayNums);
const arrayEven = [2,30,14,8];
const newArrayEven = arrayNums.concat(arrayEven);
console.log(newArrayEven);
const arrayMerage = [arrayNums,...arrayEven];


const employee_info = {
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    adress:{
        locality:{
            colony:"Om Vrindavan Society",
            street:"Kanch Poli,431202",
        },
        city:"Mumbai",
        state:"Maharashtara",
        country:"India",
    },
    mobiles:["+01 8600 3456 88","1800- 4567 32","91-9096 5678 77"]
}

console.log(`Step 5: Create the employee..`);
console.log(`A)`);
console.log(employee_info.adress);
console.log(`B)`);
console.log(employee_info.mobiles);
// cloneArray

console.log(`Step 6:Deep Clone Using JSON.stringfy()`);

const deepClonedemployee_info = JSON.parse(JSON.stringify(employee_info));
console.log(`A)`);
console.log(employee_info.salary);
employee_info. salary= "80,0000INR";
console.log(`Update Salary:${employee_info .salary}`);
console.log(`B)`);
console.log(employee_info.adress);
employee_info.country = "United Kingdom";
console.log(`Update Country:${employee_info.country}`);
console.log(`C)`);
console.log(` Orignal to Update Values:${employee_info .salary},${employee_info.country}`);