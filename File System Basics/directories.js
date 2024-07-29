const fs = require("fs");

//TODO: async version of rename directory
// fs.rename("./storage-files", "./storage", err => {
//     if(err) {
//         throw err;
//     }
// });

//TODO: readdirSync is a syncrounous way of getting the array of files or a single file in a directory
fs.readdirSync("./storage").forEach(fileName => {
    // console.log(fileName)
    fs.unlinkSync(`./storage/${fileName}`); //it is used to remove files form a directory
})

//TODO: async way of removing dir (if the direcotry is empty)
fs.rmdir("./storage", err => {
    if(err) {
        throw err;
    }

    console.log("./storage dir removed")
})