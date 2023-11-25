//Given a number x, write a function to determine whether the number is a prime number or not??
function IsPrime(num) {
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            return "false"
        }
    } return "true"
}

let result = IsPrime(7);
// console.log(result)

//given an array which only contains 0 & 1. The data is shuffled randomly. Write a function that can rearrange the data such that all the 0's are present before 1.
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function separate(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (arr[i] == 1) {
            swap(arr, i, j);
            j--;
        }else{
            i++;
        }
    }
}

let arr = [1,0,1,1,0,1,1,1,0];
separate(arr);
console.log(arr)