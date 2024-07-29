const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "what is your name? ",
    "what do you live? ",
    "waht are you going to do with node js? ",
];



const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer => {console.log(`-> ${answer}`)})

answerEvents.on("complete", answers => {
    console.log(answers);
})

answerEvents.on("complete", () => process.exit());
