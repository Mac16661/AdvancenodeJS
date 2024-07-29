const events = require("events");

const emitter = new events.EventEmitter();

//TODO: handeling the custom event
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

//TODO: emiting the customEvent ("event_name", "data", "data");
// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That's pretty cool huh?", "alex");

// handelling an input event from terminal
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input === "exit") {
        emitter.emit("customEvent", "Goodbye", "process");
        process.exit();
    }
    //TODO: emiting event 
    emitter.emit("customEvent", input, "terminal");

})