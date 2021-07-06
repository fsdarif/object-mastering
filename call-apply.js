const normalPerson = {
    firstName : "Ahnaf",
    lastName : "Arif",
    getFullName : function () {
        console.log(this.firstName, this.lastName)
    }
}
console.log(normalPerson.lastName);


// const simplePerson = {
//     salary : 15000,
//     chargeBill : function (x) {
//         this.salary = this.salary - x;
//         return this.salary
//     } 
// }
// simplePerson.chargeBill(5050);
// console.log(simplePerson.salary);

// usage of bind
// const heroPerson = {
//     salary : 30000,
// }
//bind

// const heroBillCharge = simplePerson.chargeBill.bind(heroPerson);
// heroBillCharge(1000);
// console.log(heroPerson.salary);

//call
// simplePerson.chargeBill.call(heroPerson, 500);
// simplePerson.chargeBill.call(heroPerson, 1500);
// console.log(heroPerson.salary);

// for multiple perameter

const simplePerson = {
    salary : 15000,
    chargeBill : function (amount, tax, tips) {
        this.salary = this.salary - amount - tax - tips ;
        return this.salary
    } 
}
const heroPerson = {
    salary : 30000,
}
// simplePerson.chargeBill.call(heroPerson, 1000, 500, 500);
// console.log(heroPerson.salary);

simplePerson.chargeBill.apply(heroPerson,[1000, 2000, 3000 ]);
console.log(heroPerson.salary);

