function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url); //first
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; //assume dummy download content
            resolve(content);
        }, 6000); //break 1
    });
}
function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with", data); // second
        setTimeout(function write() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt"
            resolve(filename)
        }, 5000); //break 2
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url); //third
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000); //break 3
    })
}

// function doAfterReceiving(value) {
// iter.next(value);
// } //
//changed the generator function with async await

async function steps() {
    const downloadedData = await download("www.xyz.com");
    console.log("data download is ", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("file written is", fileWritten);
    const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload response is", uploadResponse);
    return uploadResponse;
}

// const iter = steps();
// const future = iter.next();
// future.value.then(doAfterReceiving);

//new lines below

steps().then ((value)=> console.log("we have completed steps with", value));
console.log("outside");
for(let i = 0; i<100000000; i++){

}

setTimeout(function f(){
    console.log("timer done");
}, 4000);
console.log("for loop done");