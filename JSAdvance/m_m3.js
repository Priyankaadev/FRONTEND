function blocking_for_loop(){
    for(let i=0; i< 10000000000; i++){
    //something
    }
} //second break

console.log("Start of the file"); //first
setTimeout(function timer1(){
    console.log("Timer 1 done"); //seventh
}, 0);
blocking_for_loop(); 

let x = Promise.resolve("Sanket's promise1");
x.then(function processPromise(value){
    console.log("Whose promise?", value); //third
    blocking_for_loop(); //forth break
});

let y = Promise.resolve("Sanket's promise2");
y.then(function processPromise(value){
    console.log("Whose promise?", value);
    setTimeout(function () {
        console.log("Ok done"); //ninth
    }, 0);
});

let z = Promise.resolve("Sanket's promise3");
z.then(function processPromise(value){
    console.log("Whose promise?", value);  // fifth
});
setTimeout(function timer2() {
        console.log("timer 2 done"); //eighth
    }, 0);
console.log("END"); //sixth
