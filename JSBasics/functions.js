// Create a function to check if the number is even or odd.
function isEven(num){
    if(num%2==0){
         return true 
    }else{
        return false
    }
  
}
// let x=101;
// if (isEven(x)){
//     console.log(true)
// }
// //or 2nd method

// let result = isEven(x)
// if(result == true){
//     console.log("even")
// }else{
//     console.log("odd");
// }

for(i=1; i<=20; i++){
    let result = isEven(i);
    if (result == true){
    //     console.log(i, "even")
    // }else {
    //     console.log(i, "odd")
    }
}


function isEvenOrOdd(num){
    if(num%2==0){
        return "Even"
    }else{
        return"Odd"
    }
}

let h=20;
let y=0;
let f=3;
// if(isEvenOrOdd(h)){
//     console.log("h is",isEvenOrOdd(h))
// }
// if(isEvenOrOdd(y)){
//     console.log("y is",isEvenOrOdd(y))
// }
// if(isEvenOrOdd(f)){
//     console.log("f is",isEvenOrOdd(f))}


// Check which number are odd and which are even in between 1 - 50

for (i=1; i<=50; i++){
    // console.log(i, "is", isEvenOrOdd(i))
}

let x= console.log("priya")
console.log(x)

function welcome(name){
    console.log("Hello", name, "welcome to js")
}
let result = welcome("priya")
// console.log(result)

function add(x,y){
    let c=x+y;
    return c
}
let a=5;
let b=7;
let answer= add(a,b)
console.log(answer)