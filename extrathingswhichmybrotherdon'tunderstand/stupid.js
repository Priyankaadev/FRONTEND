function Hello() {
    let i = 0;
    setTimeout( ( )=> console.log( i),1)
}
Hello()

function Hello2() {
    let i = 0;
   function bye2() {
    i+=1;
    console.log(i)
   }
   bye2()
}
Hello2()