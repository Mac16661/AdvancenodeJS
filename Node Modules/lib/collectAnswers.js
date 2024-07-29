const readline = require("readline");
const {EventEmitter} = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

answers => {
    console.log("Thank you for your answer  ");
    console.log(answers);
    process.exit();
}


module.exports = (questions, done = answers => {
    //TODO: this thing in now handelling event emitter
    // console.log("Yours answers \n", answers);
    // process.exit();
}) => {

    const answers = [];
    const [firstQuestions] = questions;
    const emitter = new EventEmitter();
    
    const questionAnswered = answer => {

        emitter.emit("answer", answer)

        answers.push(answer);
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }else{
            emitter.emit("complete", answers);
            done(answers);
        }
    }

    rl.question(firstQuestions, questionAnswered);

    return emitter
}

