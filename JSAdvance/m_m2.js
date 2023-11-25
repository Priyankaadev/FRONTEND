console.log("Start of the file"); //first
 
setTimeout(function timer(){
    console.log("Timer 1 done");
    
}, 0); //sixth

for (let i = 0; i < 1000000000; i++) {
//something
} //second break
// function f(){
//     return new Promise (function exec(res, rej){
//         res("sanket's promise") //fifth
//     })

// }
 let x = Promise.resolve("sanket's promise");
 x.then(function processPromise(value){
    console.log("Whose promise?", value); //forth
 });
 setTimeout(function timer2(){
    console.log("Timer 2 done");
 }, 0); //seventh
  console.log("End") //third
