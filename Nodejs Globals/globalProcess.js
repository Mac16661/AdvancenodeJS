//TODO: GLOBAL PROCESS VARIABLE 

// console.log(process.pid) //print the process id of process
// console.log(process.versions.node) //print the varsion of node which is handling the process

// console.log(process.argv) //prints every thing get typed before this command executes (it gives returns an array)

// const[,, firstName, lastName] = process.argv; //we are destructuring it and extracting out the last 2 string typed in the terminal

// console.log(`your name is ${firstName}  ${lastName}`);

//TODO: we can use flags to do it in better way

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab('--user');

console.log(`${greeting}  ${user}`);

//process.argv is used to pass argument to the node js code before executing it from the terminal.