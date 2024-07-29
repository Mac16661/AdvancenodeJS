const fs = require("fs");

//TODO: syncronous way of renaming a file (not working at this time dont know why)
// fs.renameSync("./assets/colors.json", "./assets/colorData/json");

//TODO: this is anync version of renameSync and here we are demonstarating how we can move file using rename method it can also be done by renameSync
// fs.rename("./assets/notes.md", "./storage-files/notes.md", err=>{
//     if(err) {
//         throw err;
//     }
// });

// setTimeout(() => {
    //TODO: it syncronously delete the file
    // fs.unlinkSync("./assets/car.jpg");
// }, 4000)