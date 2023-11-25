// var y= 40;
function fun(){
    var x = 10;
    function gun(){
        var y = 20;
        console.log(x); //error for let before the declaration is temporal dead zone
        let x = 30;
        console.log(y);
    }
    // gun();
    console.log(x);
    console.log(y); //one scope out
}
fun()