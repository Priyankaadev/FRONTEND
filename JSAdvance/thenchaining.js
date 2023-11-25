function download(url){
    console.log("Started downloading content form", url);
    return new Promise (function exec(res, rej){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            const content = "ABCDEF";
            res(content);
                    }, 5000);

    })
}
x=download("www.xyz.com");
y= x.then(function fulfillHandler1(value){
    console.log("Content downloading is1". value);
    return "New promise string";
}, 
function rejectHandler1(value){
    console.log("rejected with", value);
});

//the .then function returns a new promise object It immediately returns a new promise object


