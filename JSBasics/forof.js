let arr = [, 5, 6, 5]
for(const value of arr){
    console.log(value)
}


//Q 
let str = "javascript";
let freqMap ={};  //empty
for(const char of str){
    if(freqMap[char]){
        freqMap[char] +=1;
    }else {
        freqMap[char] = 1;
    }
}

console.log(freqMap);
