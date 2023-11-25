function fetchData(url) {
    return new Promise(function (resolve, reject){
        console.log("Started downloading from", url); //second
        setTimeout(function processDownloading(){
            let data = "Dummy data";
             resolve(data);
            console.log("Download completed"); //forth
        
        }, 7000);
    });    
}

console.log("Start"); // first 
let promiseObj = fetchData("SKJFIEJIFJE");
promiseObj.then(function A (value){
    console.log("value is", value); //fifth
})
console.log("End"); //third