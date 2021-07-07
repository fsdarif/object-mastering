function doSomething (){
    console.log(33333);
}
console.log(22222);
console.log(44444);
console.log(44444);
console.log(doSomething, 5000);

setTimeout(function(){
    console.log("see you later");
}, 5000)

// setInterval(() => {
//     console.log("show me");
// }, 1000);
