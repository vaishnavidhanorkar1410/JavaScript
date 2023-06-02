class Vehicle {
    constructor(model, color,price,engine){
        this.model = model;
        this. color =  color;
        this.price =price;
        this.engine = engine;
    }
    showDetails(){
        console.log(` Vehicles Details is: ${this.model}, ${this.color}, ${this.price}, ${this.engine} `);

    }
}
const splinder = new Vehicle ("splinder", "black", "90 thousand", "Honda Cub C100EX");
const spShine = new Vehicle ("spShine", "sliver", "1.50 lakh", "SI Engine");
const ktmduck = new Vehicle (" ktmduck", "orange", "1.90 lakh", "LC8");
const bullet = new Vehicle ("bullet", "sliver", "2.20 lakh", "Single Cylinder Cast_Iron");
// splinder.showDetails(); 
// spShine .showDetails(); 
// ktmduck .showDetails(); 
// bullet.showDetails(); 
// const arrayOnVehicles = [splinder, spShine,  ktmduck,  bullet];
// for(const element of arrayOnVehicles){
//     element.showDetails();
// }

 console.log(`------------ Step.1: Travrse the Vehicle class objects-----------`);
 const arrayOfVehicles = [splinder, spShine,  ktmduck,  bullet];
// const arrayOfVehicle = [toyotaFortuner,mahindraThar,tataTigor,jaguar,mahindraScorpio];
for (const element of arrayOfVehicles) {
  element.showDetails();
}

console.log(" ");

class College {
  constructor(collegeName, department, city) {
    this.collegeName = collegeName;
    this.department = department;
    this.city = city;
  }
}
const hvpm = new College("Degree College of Physical Education,Amravati","Computer Science","Amravati");
const hvpmE = new College("HVPM College of Engineering and Technology","Engineering and Technology","Amravati");
const pote = new College("P.R.Pote,Patil,Group,Of Edutional,Institudes","Engineering","Amravati");
const bijrala = new College("Bijrala Biyani College","Science","Amravati");
console.log(`----------------------------Step.3: Traverse object of College-----------------------`);

travrse(hvpm);
console.log(`-------------------------------------------------------`);
travrse(hvpmE);
console.log(`-------------------------------------------------------`);
travrse(pote);
console.log(`-------------------------------------------------------`);
travrse( bijrala );

// console.log(`----------------------------Step.2,3: Traverse object of College-----------------------`);
function travrse(collegeObject) {
  for (const key in collegeObject) {
    if (Object.hasOwnProperty.call(collegeObject, key)) {
      const element = collegeObject[key];
      console.log(`${key} : ${element}`);
    }
  }
}