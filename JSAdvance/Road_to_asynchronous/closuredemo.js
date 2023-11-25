function Do(task){
setTimeout(function exec(){
   
    console.log(task);
}, 2000)
}

Do();
console.log("end");