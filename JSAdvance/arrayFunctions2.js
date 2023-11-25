/*
*filter function
*filter is also a HOF
*there is one special thing about filter. i.e. the argument function f which we have to pass inside filter
* should always return a boolean, eitherwise output will be converted to a boolean

*filter loops over every element,passes that element in the argument function and then if the output 
*of the this function call is true, then it stores the original element in a new array otherwise
*doesn't add this element to the array
*/

function OddOrEven(x){
//returning a boolean
    return (x%2==0);
}
let arr =[1, 2, 3,4,5,6,7,8]
const result = arr.filter(OddOrEven);
console.log(result)