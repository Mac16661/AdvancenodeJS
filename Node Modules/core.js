const path = require("path");
// const util = require("util");
const {log} = require("util");  //destructuring it you can use traditional way as well
const v8 = require("v8");

//TODO: print heap size with the hepl of v8 engine
log(v8.getHeapStatistics());

//TODO: it will make the log with data and time
// util.log(" The name of the currrent file");
// util.log(path.basename(__filename));


//TODO: __dirname: willl provide the path of the current directory and then join the path with www->files->uploads and return the fill path
// const dirUploads = path.join(__dirname, "www", "files", "uploads");
// console.log(dirUploads);