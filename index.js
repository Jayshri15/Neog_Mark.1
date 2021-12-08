function play(question,answer){
  var userAnswer =readlinesync.question(question);

  if (userAnswer===answer){ 
    console.log("you are right")
    score = score+1;

  }else{
    console.log("you are wrong")
  }

  console.log("current score",score)
  console.log("---------")
}
// arry of opbject
var question=[{
  question:"where do you want to do job?......",
answer:"Pune"},

{question:"What is my favorite food?......",
  answer:"Noodles"},


{question:"Where are you from?.......",
  answer:"Maharashtra"},

{question:"What is navgurukul?.......",
  answer:"NGO"},

{question:"What you like to do?.......",
  answer:"Speech"},

{question:"Neha which village you want go......",  answer:"Rampur"},
];

// loop
for (var i=0; i<question.length;i++){
  var currentQuestion=question[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("yah! your score",score);