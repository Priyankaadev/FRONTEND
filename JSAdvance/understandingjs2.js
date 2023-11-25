function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i=0; i<1000000000
        ; i++){
        //some task
    } //blocked here (native to js) and not move  

    console.log("loop ends") //done
}

function timeConsumingByRuntimeFeature0(){
    console.log("Starting timer");
    setTimeout(timeConsumingByLoop, 5000);
}
function timeConsumingByRuntimeFeature1(){
    console.log("Starting timer");
    setTimeout(function exec(){  //time starts for 5 sec
        console.log("Completed the timer1"); 
    }, 0);
}
function timeConsumingByRuntimeFeature2(){
    console.log("Starting timer");
    setTimeout(function exec(){  //time starts for 5 sec
        console.log("Completed the timer2"); 
    }, 200); //200ms timer
}
console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();

timeConsumingByRuntimeFeature1();

timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("by");