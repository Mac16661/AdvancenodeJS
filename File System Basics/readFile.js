const fs = require("fs");

//Syncronous way of reading files
// const text = fs.readFileSync("./assets/Readme.md", "utf-8");

//Async way of reading text
// fs.readFile("./assets/Readme.md", "utf-8", (err, text) => {
//     console.log(text);
// });

//TODO: we can even read a binary file like image file (we dont need to specify type like "utf-8" here because it a binary file not a string) (NOTE: readFileSync not gonna work here properly)
fs.readFile("./assets/car.jpg", (err, img) => {
    if(err) {
        console.log(err.message);
        process.exit();
    }

    console.log("file read complete ");
    console.log(img);
})

