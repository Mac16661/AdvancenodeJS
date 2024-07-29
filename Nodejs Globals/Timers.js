//TODO: SET INTERVAL : it will be call over an over again within an interval
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine(); //clears the line after printing without consuming spaces...
    process.stdout.cursorTo(0); //setting cursor position to 0 in terminal
    process.stdout.write(`waiting ... ${p}%`)
}

const interval = setInterval(incTime, waitInterval);

//TODO: SET TIMEOUT : it can create a delay 
const waitTime = 5000;

console.log(`setting a ${waitTime / 1000} sec delay `);

const timerFinished = () => {
    clearInterval(interval) //it helps to clear the iterval and exits the program can exits
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done")
};

setTimeout(timerFinished, waitTime);