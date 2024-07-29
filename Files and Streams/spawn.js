//TODO: spawn is async in nature unlike exec so it is used for long running task

const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Tahoe \n");
questionApp.stdin.write("Change the world \n");

//TODO: it will listen to the terminal and provide data to the questiona program
// process.stdin.on("data" , data => {
//     questionApp.stdin.write(data);
// })

questionApp.stdout.on("data", data => {
    console.log(`form spawn: ${data}`);
})

questionApp.on("close", () => {
    console.log("EXITING FORM TERMINAL");
    // process.exit();
})