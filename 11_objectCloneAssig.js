console.log("-------------(Step 1): SBI Bnak--------------");
let sbiBank = {
    bankName: "SBI Bank",
    location: "Ram Nagar,Akola",
    ifscCode:"SBIIN0012712",
    interestRate:"7.10%",
}
console.log(sbiBank);
console.log("");

console.log("-------------(Step 2): Bnak Location--------------");
let bankLocation = {
    street:"Ram Nagar,Akola Maharashtra",
    city:"Akola",
    pincode:444601,
}
console.log(bankLocation);
console.log("");

console.log("-----------------(Step3): Clone the Step1 and Step2-----------------");

Object.assign(sbiBank, bankLocation);
console.table(sbiBank);
console.log("");

console.log("-----(Step4): SBI Bank Rate Of Interest----");

let rateOfInterest ={
    homeLoneInterest:"8.55%",
    personalLoneInterest:"9.60%",
    dueInterest:"3.5%"
}
console.log(rateOfInterest);
console.log("");


console.log("--------(Step5): Marge step1, step2 and step4-------");

const mergedObject = Object.assign({ },sbiBank ,bankLocation , rateOfInterest );
console.table(mergedObject);
console.log("");


console.log("--------(Step6):Traversing an Object-Stap5-------");
for (const key in mergedObject) { // key = "height"
    if (Object.hasOwnProperty.call(mergedObject, key)) {
        const value = mergedObject[key];
        console.log(`${key}: ${value}`);
    }
}