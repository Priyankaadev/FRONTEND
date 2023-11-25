function blocking_for_loop(){
    for(let i = 0; i<10000000000; i++){
        //something
    }
} //second break                                             
console.log("Starting of the file"); //first
setTimeout(function timer1(){
    console.log("Timer 1 done"); //sixth
}, 0); //callback que
blocking_for_loop();
let x = Promise.resolve("Sanket's promise1");
x.then(function processPromise(value){
    console.log("Whose Promise? ", value); //que
    blocking_for_loop(); //break //forth

});
let y = Promise.resolve("Sanket's promise2");
y.then(function processPromise(value){
    console.log("Whose Promise? ", value); //queue
    setTimeout(function (){ //eighth
        console.log("ok done"); //callback que
    }, 0);
});
let z = Promise.resolve("Sanket's promise3");
z.then(function processPromise(value){
    console.log("Whose Promise? ", value); //queue //fifth
});
setTimeout(function timer2(){
    console.log("Timer 2 done");
}, 0); //callback  //seventh
console.log("End of the file"); //third