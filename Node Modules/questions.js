const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "what is your name? ",
    "what do you live? ",
    "waht are you going to do with node js? ",
];


const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestions] = questions;
    
    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }else{
            done(answers);
        }
    }

    rl.question(firstQuestions, questionAnswered);
}


collectAnswers(questions, answers => {
    console.log("Thank you for your answer  ");
    console.log(answers);
    process.exit();
})