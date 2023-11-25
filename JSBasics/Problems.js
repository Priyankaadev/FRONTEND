// Q1 Given a number x, check if the number is even or odd??
let a = 5;
if (a % 2 == 0) {
    console.log("It is an even number")
} else {
    console.log("It is a odd number");
}
//Q2 Consider three integer values, and find the minimum value among the given input values.
let d = 11;
let b = 12;
let c = 13;
// if(d<b){
//     if(d<c){
//         console.log("d is the minimum value");
//     } else{
// console.log("c is minimum")
//     }
// }else{
//     if(b<c){
//         console.log("b is minimum")
//     }else{
//         console.log("c is minimum")
//     }
// }

if(d<b && d<c){
    console.log("d is smallest");
}else if(b<d && b<c){
    console.log("b is smallest");
}else{
console.log("c is smallest")
}

// Q3 Given 3 integers a,b,c check if we can form a triangle with the sides of  the triangle naming length a, b and c
let x = 10;
let y = 11;
let z = 5;

if (x+y>z && y+z>x && z+x>y){
    console.log("yes")
}else{
    console.log("no")
}

//Q4 Given the side length of a triangle in the form of 3 integers. Check if the given triangle is equilateral or scalar or isosceles.
let p = 5;
let o = 9;
let i = 6;
if( p!=o && i!=o && p!=i ){
    console.log("scalene triangle")
}else if(p==o && p == i && i==o){
    console.log("equileteral triangle")
}else{
    console.log("isosceles triangle")
}

// quadratic

function solve(a, b, c){
    let sqrtValue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqrtValue) / (2*a);
    let root2 = (-b - sqrtValue) / (2*a);
    console.log(root1, root2)
}
solve(2, 5, 3)

