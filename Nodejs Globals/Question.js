//TODO: STANDARD OUTPUT 

// process.standard output is a writeble stream and it implements a write method
// process.stdout.write("hello ")
// process.stdout.write("World \n\n")

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is ypu preffer to do?"
]

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(' > ');
}

ask();

//above code is working syncronously thats why it just gonna print index[o] and then exits the progaram

//TODO: STANDARD INPUT

//.on is listing for data events on terminal

// process.stdin.on('data', data => {
//     process.stdout.write(`\n\n ${data.toString().trim()}`) //data might be sent to the terminal in  different formate so we converted it into string
//     process.exit(); //it stops the program
// })


const ans = []
process.stdin.on("data", data => {
    ans.push(data.toString().trim()); //pushing geathered data from the terminal

    if(ans.length < questions.length) {
        ask(ans.length);
    }else{
        process.exit();
    }

});

//on is a listner which listents to exit event
process.on('exit' , () => {
    const [name, act, lang] = ans;

    console.log(`
    
ThankYou ...

Go ${act} ${name} you can code ${lang} later!!
    
    `)
})