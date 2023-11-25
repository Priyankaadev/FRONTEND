//WHILE LOOP

//Q1 Write a program to print the no's from 1 to 10
let i=1;  //initializing variable 
while(i<=10){
    console.log(i)
    i+=1
}
console.log("end")

//Q2 Print the numbers from 20 to 1 in decreasing order using while loop.
let j = 20;
while(j>=1){
    console.log(j);
   j-=1;
}

//FOR LOOP
// for(o=1; o<=10; o++){
//     console.log(o);
// }

let ans = 0;
for(let y=1; y<=10;y++){
    ans += y;
}
console.log(ans)

//write a program to print all the even numbers greater than 1 and less than 25 .

for(i=1; i<=25; i++){
    if(i%2==0){
        console.log(i)
    }
}
//second method
for(i=2; i<=25; i+=2){
    console.log(i)
}