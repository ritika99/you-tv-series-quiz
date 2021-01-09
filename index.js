var readlineSync = require("readline-sync");

var highscore = { 
  name: "Psyborgie",
  topScore: 7
};
var score = 0;

var quizList = [{
    question: "What Is The Name Of Joe's Ex-Girlfriend? \na. Caddisy \nb. Nicole \nc. Candace",
    answer: "c"
  }, 
  {
    question: "What Is The Name Of The Boy Who Lives Next Door To Joe? \na. Paco \nb. Antonio \nc. Pedro",
    answer: "a"
  },
  {
    question: "What hobby is Love very good at? \na. Gymnastics \nb. Baking \nc. Song Writing",
    answer: "b" 
  },
  {
    question: "What Book Did Joe Take From Peach's House? \na. The Wonderful Wizard Of Oz \nb. Ozma Of Oz \nc. Glinda Of Oz",
    answer: "b"
  },
  {
    question: "What is the name Joe uses on his fake Identity? \na. Will \nb. Jasper \nc. Jack",
    answer: "a" 
}];

function welcomeMessage() {
 var userName = readlineSync.question("Enter your name: ");

  console.log("Welcome "+ userName + "! Let's see how well do you know about TV series 'YOU'. \nReady? Get set go!!\n");
  playGame();
}

function checkAnswer(n, question, answer) {
  var userAnswer = readlineSync.question(n + ". " + question + "\n");
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("Correct (✿◠‿◠) ");
    score++;
  } else {
    console.log("Incorrect (˘︹˘)");
  }
  console.log("Score: " + score + "\n");

}

function playGame() {
  for (var i=0; i<quizList.length; i++) {
    checkAnswer(i+1, quizList[i].question, quizList[i].answer);
  }
  displayScores();
}

function displayScores() {
  console.log("Kudos! Your total score is ", score);

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("\nWell done! You have beaten the highscore.");
  }
  console.log("\nThanks for playing. Don't forget to share the screenshot!");
}

welcomeMessage();
