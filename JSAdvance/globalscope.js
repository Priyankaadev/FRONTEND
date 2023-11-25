// let name = "Priyanka";
// console.log(name);

// console.log(y);
// function fun(){
//     const name = "Priyanka";
//     let x = "k";
//     var y = "u";
//     console.log(name);
// }
// fun();


// console.log(x);
// console.log(y);

// var teacher= "priya"; //global
// function fun() {    //global
//     var teacher = "pulkit"; //scope of fun
//     console.log(teacher);
// }
// function gun() { //global
//     var student = "sarthak"; //scope of gun
//     console.log(student);
// }
// fun();
// gun();
// console.log(teacher);

//again

var teacher= "priya"; //global
function fun() {    //global
    var teacher = "pulkit"; //scope of fun
    content = "JS"
    console.log(teacher);
}
function gun() { //global
    content="Jp"
    var student = "sarthak"; //scope of gun
    console.log(student);
    console.log(content);
}
fun();
console.log(content); //one scope out, global scope after fun is called. This is the example of autoglobals.
gun();

console.log(content);