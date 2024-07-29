const fs = require("fs");

//TODO: reading a file with the help of stream ("location", "data-type(utf-8/binary)")
const readStreams = fs.createReadStream("./assets/lorum-ipsm.md", "utf-8");

let fileText = "";

readStreams.on("data", data => {
    // console.log(data);
    console.log(`I read ${data.length - 1} charecters of text`);
    fileText += data;
})

readStreams.once("data", data => {
    // console.log(data);
})

readStreams.on("end", () => {
    console.log("finish reading file");
    console.log(`Total length of the file ${fileText.length - 1} char`)
})

//TODO: reading stream form the terminal and printing out the no of text
// console.log("type something...");
// process.stdin.on("data", data => {
//     console.log(`I read ${data.length - 1} char of text`);
// })