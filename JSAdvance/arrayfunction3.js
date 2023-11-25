/*
*reduce is higher order function available for arrays
*reduce also takes a function f as an argument
*what reduce does is, it one by one goes to every element of the array
*say the current element is arr[i]
*reduce will pass this element to the function f, and accumulate the result of further function calls 
*with this particular result
*/

const arr = [1, 2, 3, 4, 5, 6];
function sum(preResult, currValue) {
    console.log(preResult, currValue)
    return preResult + currValue;
    
}
const result = arr.reduce(sum);
console.log(result)

//accumulates

/*
*cart -> [ {price: 100000, name:"Mobile"}, {price : 200, name: "phone cover"}]
*/
function addPrices(preResult, currValue) {
  
    let newPrice = preResult.price + currValue.price;
    return {price: newPrice}
    
}
let cart = [ {price: 100000, name:"Mobile"}, {price : 200, name: "phone cover"}];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice.price)