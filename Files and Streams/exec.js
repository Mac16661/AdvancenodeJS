const cp = require("child_process")
//TODO: to use child_process perfectly you need to know system specific code. "cp.exec" will create a child process and execute and code in terminal ("IN WINDOWS NODE WILL RUN EVERY COMMAND IN CMD SO WE NEED TO KNOW CMD COMMANDS");

//TODO: this will create a child process and later on it will open default browser and open google.com.
// cp.exec("start http://www.google.com");

//it will open up another instance of terminal this will only work in mac (dont know the window compatable command)
// cp.exec("open -a Terminal .")

//TODO: if we have any command which returns any data than we have to use this way to get the data ->
//cp.exec("command", ("err(nodejs err)", "data", "stderr(err from the terminal)"))

//TODO: printing directories available in the current folder
// cp.exec("dir", (err, data, stderr) => {
//     if(err){
//         //This will give err throw by node js
//         throw err
//     }

//     //TODO: it will give err throw by terminal
//     // console.log(stderr);
//     console.log(data)
// });

//Running another node js file using this program
cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
});