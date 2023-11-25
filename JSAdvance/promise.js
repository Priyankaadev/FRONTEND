// A promise is an object that is used as a placeholder for the eventual result of a deferred possibly
// asynchronous computation
// creation of promise object is sync in nature


//this code will behave differently because in node x is an object, and in chrome browser x will contain a 
// unique time id

/*function createPromise(){
    return new Promise (function execute(resolve, reject){
        let x=setTimeout(function giveValue(){
            return 2;
        }, 3000);
        if(x%2==0){
            resolve("successfull")
        }else{
            resolve("rejected")
        }
    })
} */


/*

*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        },10000);
        console.log("Exiting the executor callback in the promise constructor");
    })
}
console.log("Starting....");
const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like...", p);

p.then(   function fulfillHandler(value){
        console.log("Inside fulfill handler with value", value);
        console.log("Promise after fulfillment is", p);
    },
    function rejectHandler(value){
        console.log("Inside rejection handler with value", value);
        console.log("Promise after rejection is", p);


})