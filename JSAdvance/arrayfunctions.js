const newArr = [9, 8, 7, 6, 5]

function print(element, idx){
    return `Element at index ${idx} is ${element}`;
    
}
const result2=newArr.map(print)
console.log(result2);
//here map is looping over every element
//then first argument will be accessign the actual value
//second argument will be accessing index of that value

/*
*here map is looping over every element
*and then passing element, index in the function print
*/
function customMapper(arr, func) {
    let result = []
    for (
        let i = 0; i < arr.length; i++) {
        result.push(func(arr[i],i));
        
    }
    return result;
}
const value = customMapper(newArr, print);
console.log(value)