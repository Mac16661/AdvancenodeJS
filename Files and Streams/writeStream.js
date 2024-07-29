const fs = require("fs");


//TODO: this is a write stream
// process.stdout.write("hello");
// process.stdout.write("world \n")

//TODO: writing a file using a stream if file is not available the it gonna create it first;
const writeStram = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

// writeStram.write("hello"); //writing hello to the myFile.txt

//TODO:We are listing to the terminal and waiting for the data event and write it to "myFile.txt"
// process.stdin.on("data", data => {
//     writeStram.write(data);
// })

//TODO: we use stream a lot so there are many methods to do simplify our work ->(exactly what we have done above in just one line of code)
process.stdin.pipe(writeStram);


//TODO: no creating a readStream and reading it then sending the data to the writeStream
const readStream = fs.createReadStream("./assets/lorum-ipsm.md", "utf-8");

// readStream.on("data", data => {
//     writeStram.write(data);
// })

//TODO: exactly as above but effortlessly
readStream.pipe(writeStram);