// let x = [];
// let y= [1, 2, 3, false, "abc"];
// var z = ["abc", "cdv"]
// const arr = [1, 2, 3, 4, 5, 6, 7,8]

// console.log(x)
// console.log(y[1])
// console.log(z)
// console.log(arr)

let str = "priyanka"
console.log(str.length)

for(idx=0; idx<=str.length-1; idx++){
    console.log(idx, str[idx])
}

function checkPalendrome(num){
    let str = "" + num;
    let i = 0;
    let j = str.length -1;
    while(i<=j){
        if (str[i] == str[j]){
            i++;
            j--;

        }else{
            return false;
        }
    }return true;
}

console.log(checkPalendrome(1226))

let arry=[1,2,3];
arry[2] = 111;
console.log(arry) // mutable

let strng = "2244"
strng[3] =9
console.log(strng) //immutable