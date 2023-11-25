// // let obj = {};
// // console.log(obj.toString());
// // let obj = {
// //    toString(){
// //     return "true"
// //    }

// // };
// //subtraction
// let obj = {};
// console.log(obj - obj); //obj.valueOf -> object, toString -> [object Object]
// let obj1 ={x:9, y: 8};
// console.log(100-obj1);
// let obj2 = {x:7, valueOf() {return 99}};
// console.log(100-obj2);
// let obj3 = {x:8, toString(){return "88"}};
// console.log(90-obj3);
// let obj4 = {
//     x:7, toString() {return {}}
// };
// console.log(100-obj4) //typeError

//addition operator
//unary + operator
//unary + operator converts its operand to Number type.


// //cornercasecoercion
// console.log("" + 0); //0 -> "0"
// console.log("" + (-0)); //0 -> "0"
// console.log(typeof NaN)

function sign(x) {
    console.log(x);
    if (x <0) {
        return -1
    }
    else if(x>0){
return 1
    } else if(x==0){
        return 0
    } else {
        return -0
    }
}

















































console.log(sign(-0))
// console.log(Math.sign(-0));

