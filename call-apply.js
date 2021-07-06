const normalPerson = {
    firstName : "Ahnaf",
    lastName : "Arif",
    getFullName : function () {
        console.log(this.firstName, this.lastName)
    }
}
console.log(normalPerson.lastName);


const simplePerson = {
    salary : 15000,
    chargeBill : function (x) {
        this.salary = this.salary - x;
        return this.salary
    } 
}
simplePerson.chargeBill(5050);
console.log(simplePerson.salary);