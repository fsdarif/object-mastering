class Person {
    constructor ( firstname, lastName, salary) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person ("Ahnaf", "Arif", 100000);
console.log(heroPerson);
const brother = new Person ("Sharif", "Ahmed", 200000);
console.log(brother);