/*
* Inversion of control
* Callback hell
*/
// let arr= [1, 10, 10, 9, 2, 3, 11];
// arr.sort(function cmp(a,b)){
//     return a-b;
// }
// console.log(arr);

function doTask(fn,x){
    //whole implementation is done by team A

    fn(x*x); //calling my callback with square of x
    fn(x*x); //calling my callback with square of x
} //team A

//here team b tries to use it
doTask(function exec(num){ //due to callbacks, I am passing control of how exec should be called to doTask
   //Inversion of control, this implementation is problematic
    console.log("woah num is", num);
},9);