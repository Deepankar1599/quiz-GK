
var readQuestion = require("readline-sync")

// console.log(chalk.blue("Hello world !"))
var score = 0;

var userName = readQuestion.question("What is your Name ? : ")
var checkAnswer = function(questionArray) {
  for (var i = 0; i < questionArray.length; i++) {

    var askUser = readQuestion.question(questionArray[i].question);
    var userAnswer = questionArray[i].answer;
    if (askUser.toUpperCase() == userAnswer.toUpperCase()) {
      score = score + 1;
    }
    else
      continue;


  }

  // Giving output to the system

  console.log("---------------------------")
  console.log(userName + " you have scored : " + score + " points !")
  console.log("---------------------------")

}



//List of question and Answers -----------------------------
var questions = [{
  question: "What is the Marvels first movie ? ",
  answer: "Iron Man"
}, {
  question: "Most populous country in World ? ",
  answer: "India"
}, {
  question: "Which movie won Golden Globe Award ? ",
  answer: "RRR"
}, {
  question: "Which sports world cup is currently held in India ? ",
  answer: "Hockey"
}, {
  question: "Which musical K-POP band of south korea is most Famous ?",
  answer: "BTS"
}
  , {
  question: "Which party won election in Pujnab ? ",
  answer: "AAP"
}, {
  question: "Which country started battle with Ukrain ? ",
  answer: "Russia"
}, {
  question: "Who own Mumbai Indians IPL team ? ",
  answer: "Neeta Amabani"
}, {
  question: "Which movie has the Beshram Rang ? ",
  answer: "Pathan"
}, {
  question: "which web series has the dialogue 'Dekh rahe ho Binod' ? ",
  answer: "Panchayat"
}]
// -----------------------------------------------------------
checkAnswer(questions)

// score data base


var scoreList = [{
  name: "Akash",
  score: 8,
}, {
  name: "Urjit",
  score: 9
}, {
  name: "Arjit",
  score: 2
}]

// checking highest scores
var count = 0;
for (var i = 0; i < scoreList.length; i++) {
  var listscore = scoreList[i].score;
  if (score > listscore || score == listscore) {
    count = count + 1;

  }

}
// console.log(score)
if (count == scoreList.length) {
  console.log(" You have scored the highest, Congratulations...!")
  console.log(" Please send the screenshot, to appear on the wall !")

}
else if (count > 0 || count < scoreList.length) {
  console.log(" you are among the top scorers, CONGRATULATIONS...!")
  console.log(" Please send the screen shot to be on the wall !")
}