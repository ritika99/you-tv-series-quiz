var readlineSync = require("readline-sync");
const chalk = require('chalk');

var highscore = { 
  name: "Psyborgie",
  topScore: 7
};
var score = 0;

var quizList = [{
    question: "What Is The Name Of Joe's Ex-Girlfriend?",
    options: "\na. Caddisy \nb. Nicole \nc. Candace",
    answer: "c"
  }, 
  {
    question: "What Is The Name Of The Boy Who Lives Next Door To Joe?",
    options: "\na. Paco \nb. Antonio \nc. Pedro",
    answer: "a"
  },
  {
    question: "What hobby is Love very good at?", 
    options: " \na. Gymnastics \nb. Baking \nc. Song Writing",
    answer: "b" 
  },
  {
    question: "What Book Did Joe Take From Peach's House?", 
    options: " \na. The Wonderful Wizard Of Oz \nb. Ozma Of Oz \nc. Glinda Of Oz",
    answer: "b"
  },
  {
    question: "What is the name Joe uses on his fake Identity?", options: "\na. Will \nb. Jasper \nc. Jack",
    answer: "a" 
}];

function welcomeMessage() {
  console.log(chalk.yellowBright("██╗░░░██╗░█████╗░██╗░░░██╗\n╚██╗░██╔╝██╔══██╗██║░░░██║\n░╚████╔╝░██║░░██║██║░░░██║\n░░╚██╔╝░░██║░░██║██║░░░██║\n░░░██║░░░╚█████╔╝╚██████╔╝\n░░░╚═╝░░░░╚════╝░░╚═════╝░"))
  var userName = readlineSync.question("\nEnter your name: ");

  console.log(chalk.greenBright("Welcome ") + chalk.magentaBright.bold(userName + ",") + chalk.greenBright(" Let's see how well do you know about TV series ") + chalk.cyanBright('🆈 🅾 🆄') + " . \n" + chalk.underline("Ready? Get set go!!\n"));
  playGame();
}

function checkAnswer(n, question, options, answer) {
  var userAnswer = readlineSync.question(chalk.bold.blueBright(n + ". " + question) + chalk.yellow(options + "\n"));
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.bgCyan(" Correct (✿◠‿◠) "));
    score++;
  } else {
    console.log(chalk.bgRed(" Incorrect (˘︹˘) "));
  }
  console.log(chalk.yellowBright.underline("Score: " + score + "\n"));

}

function playGame() {
  for (var i=0; i<quizList.length; i++) {
    checkAnswer(i+1, quizList[i].question, quizList[i].options, quizList[i].answer);
  }
  displayScores();
}

function displayScores() {
  console.log(chalk.blackBright.bgGreenBright(" Kudos! Your total score is " + score + ". " ));

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("\nWell done! You have beaten the highscore.");
  }
  console.log("\nThanks for playing. " + chalk.underline("Don't forget to share the screenshot!"));
}

welcomeMessage();
