const fs = require("fs");

//Syncronously reading ./assets directory
// const files = fs.readdirSync("./assets");


//Async directory reading
fs.readdir("./assets", (err, files) => {
    if(err) {
        throw err;
    }
    console.log(files);
});
