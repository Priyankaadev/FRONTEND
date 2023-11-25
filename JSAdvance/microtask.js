function createPromise(){
    return new Promise(function exec(resolve, reject){
        console.log("Resolving the promise"); //first execution
        setTimeout(function () {
            console.log("rejecting the promise");
       reject("Done"); //pending to reject state
     }, 1000);
        
    });

}
// setTimeout(function process(){
//     console.log("Timer completed");
// },0); //global
let p = createPromise();
p.then(function fulfillHandler(value){
    console.log("we fulfilled1 with a value", value);
}, function rejectHandler(value){
    console.log("we reject1 with a value", value);
});
p.then(function fulfillHandler(value){
    console.log("we fulfilled2 with a value", value);
}, function rejectHandler(value){
    console.log("we reject2 with a value", value);
});


for(let i = 0; i<10000000000; i++){};
console.log("ending");

//at any point of time if event loop has a choice to pick
// from microtask queue or call back  queue namely macrotask queue
// then it always give preference to microtask queue