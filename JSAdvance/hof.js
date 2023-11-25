//higher order function
//there are functions which take another function as an argument
function f(x,fn){
//x- number, fn - functions
console.log(x);
fn();
}
f(10, function exec(){
    console.log("I am an expression passeed to a HOF");
})

//map function, It is a HOF available with arrays. It takes a function as an argument and returns a new array in which every value is actually populated by calling function with original arrau element as argument

function square(el) {
    return el*el;
    
}
const arr = [1,2,3,4,5];
const result = arr.map(square);
console.log(result)

/*Every element of the original array is passed one by one in the argument function f whatever 
* is the output for each individual Element, we populate that output in an Array
* map internally iterates/loops over every element of the given original array pass
* that element in the argument function f and then store the returned value inside an array  
*/

//the default implementation of arr.sort() is going to sort my array in lexicographical order
//dictionary type of alphabetically arrangement


//in any situation when we have to do an operation on every element of the array and store the result of each operation
//map can be a good option

//for example
//Array of Product object