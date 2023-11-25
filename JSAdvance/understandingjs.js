function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i=0; i<1000000000
        ; i++){
        //some task
    } //blocked here (native to js) and not move  

    console.log("loop ends") //done
}

function timeConsumingByRuntimeFeature(){
    console.log("Starting timer");
    setTimeout(function exec(){  //time starts for 5 sec
        console.log("Completed the timer");
    }, 5000);
}
console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log("by");

//event loop - It is like an infinite loop, it keeps on checking whether the callstack is empty or not and no global code is left.
// whatever callbacks in event que don't print quickly. It is going to pick
/* from the event que then it prints 
*/