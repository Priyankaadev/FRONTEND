function download(url){
    return new Promise (function exec(resolve, reject){
        console.log("Starting to download data from", url); //first
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF"; //assume dummy download content
            resolve(content);
        }, 6000); //break 1
    });
}
 function writeFile(data){
    return new Promise(function exec(resolve, reject){
        console.log("Started writing a file with", data); // second
        setTimeout(function write(){
            console.log("Completed writing the data in a file");
            const filename = "file.txt"
            resolve(filename)
        }, 5000); //break 2
    })
 }

 function uploadData(file, url){
    return new Promise (function exec(resolve, reject){
        console.log("Started uploading", file, "on", url); //third
        setTimeout(function up(){
            console.log( "upload completed");
            const response = "SUCCESS";
            resolve(response);
        },2000 ); //break 3
    })
 }
 download("www.xyz.com")
 .then(function processDownload(value){
    console.log("downloading done with following value ", value);
    return writeFile(value);
 })
 .then(function processWrite(value){
    console.log("data written in the file with name", value);
    return uploadData(value, "www.upload.com");
 });
 .then(function processUpload(value){
    console.log("we have uploaded with", value);
 });