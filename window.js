// global scope
function add (num1, num2) {
    const result = num1 + num2;
    console.log("result inside", result);
    return result
}
const sum = add(10, 20);
console.log("result outside", result);

