
function Quiz(listofQuestions){
    this.score=0; //intial score
    this.questions=listofQuestions;//questions passed
    this.questionIndex=0;//progress whether its a first or 2nd qstn.
}

function Question(text,choices,answer){ 
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

let questionslist=[
    new Question("JavaScript supports",["Functions","XHTML","CSS","HTML"],"Functions"),
    new Question("Which language used for styling web pages",["HTML","JQuery","CSS","XML"],"CSS"),
    new Question("Which is not a JS Framework",["Angular","JQuery","Django","NodeJS"],"Django"),
    new Question("Which is used to connect to DB",["PHP","HTML","JS","ALL"],"PHP"),
    new Question("Javascript is a",["Language","Programming Language","Development","ALL"],"Programming Language")
]

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length
    }
    
Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
    
Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex]
}
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function showScores() {
    let heading = document.querySelector("h1")
    heading.innerHTML = "Result:"
    let quizElem = document.getElementById("quiz")
    quizElem.innerHTML = `<h2 id='score'>Your scores : ${quiz.score}. and percentage is ${quiz.score/quiz.questions.length*100}%</h2>`
}
function handleBtnClick(id, choice) {
let btn = document.getElementById(id)
btn.onclick = function() {
    quiz.checkOptionWithAnswer(choice);
    loadQuestions();
}
}
let quiz=new Quiz(questionslist)


function loadQuestions() {
    if(quiz.isEnded()) {
        showScores()
    }else {
        let elem = document.getElementById("question")
        elem.innerHTML = quiz.getQuestionByIndex().text;
    
        let choices = quiz.getQuestionByIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let elem = document.getElementById("btn" + i);
            elem.innerHTML = choices[i];
            handleBtnClick("btn"+i, choices[i]);
        }
        showProgress();
    }
}

function showProgress() {
    let elem = document.getElementById("progress")
    let questionNum = quiz.questionIndex + 1;
    elem.innerHTML = "Question " + questionNum + " of "+ quiz.questions.length
}

loadQuestions();