

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1 : Find all employee from 'Wipro' company`);
arrayEmps.filter((element)=>{
    if(element.emp_company=="Wipro"){
        console.log(`Employee Name: ${element.emp_name}, Employee Company: ${element.emp_company}`);
    }
});
console.log('--------------------------------------------------------------');
console.log(`2 : Find all employee from 'IT' OR 'HR' dept`);
arrayEmps.filter((element)=>{
    if(element.emp_dept=="IT" || element.emp_dept=="HR" ){
        console.log(`${element.emp_id}, ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
    }
});
console.log('--------------------------------------------------------------');
console.log(`3 : Find all employee whose emp id's are greater than 50`);
arrayEmps.filter((element)=>{
    if(element.emp_id>50 ){
        console.log(`${element.emp_id}, ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
    }
});
console.log('--------------------------------------------------------------');
console.log(`4 : Find all employee whose name start with letter 'A' OR 'V' OR 'M'`);
arrayEmps.filter((element)=>{
    if(element.emp_name.startsWith("A")||element.emp_name.startsWith("V")||element.emp_name.startsWith("M") ){
        console.log(`${element.emp_id}, ${element.emp_name}, ${element.emp_dept}, ${element.emp_salary}, ${element.emp_company}`);
    }
});
console.log('--------------------------------------------------------------');
console.log(`5 : Find average salary of the employee for all the department using filter() & reduse()`);
const newArray =[];
arrayEmps.filter( (employee) => {
    return newArray.push(employee.emp_salary);

});
console.log(newArray);
const sum=newArray.reduce((runningTotal, value)=>{
    return runningTotal + value;
});
let average=sum/newArray.length;
console.log(average);
console.log('--------------------------------------------------------------');


console.log(`6 : Find average salary for 'IT' department`);
const newArray1 =[];
arrayEmps.filter( (employee) => {
    if (employee.emp_dept=="IT") {
        return newArray1.push(employee.emp_salary);   
    }
    

});
console.log(newArray1);
const sum1=newArray1.reduce((runningTotal, value)=>{
    return runningTotal + value;
});
let average1=sum1/newArray1.length;
console.log(average1);



