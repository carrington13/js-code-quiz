
let startBtn = document.querySelector("#startquiz");
let questionEl = document.querySelector("#question");
let timerEl = document.querySelector("#timer");
let instructionsEl = document.querySelector("#instructions");
let btnContainer = document.querySelector("#button-container");
// initialize button array
let btnArr = [];

let questionCount = 0;

let answerArr = [
    answerOneArr = ["a. call thisFunction;", "b. thisFunction();", "c. var thisFunction();", "d. thisfunction;"],
    answerTwoArr = ["a", "b", "c", "d"],
    answerThreeArr = ["a.3", "b.3", "c.3", "d.3"],
    answerFourArr = ["a", "b", "c", "d"],
    answerFiveArr = ["a", "b", "c", "d"],
] 

let questionObjArr = [
    // question 1
    { question: "How do you call a function named 'thisFunction'?", answer: "b. thisFunction();", answerChoices: answerOneArr},
    // question 2
    { question: "test2", answer: "a", answerChoices: answerTwoArr},
    // question 3
    { question: "test3", answer: "a", answerChoices: answerThreeArr}, 
    // question 4
    { question: "test4", answer: "a", answerChoices: answerFourArr},
    // question 5
    { question: "test5", answer: "a", answerChoices: answerFiveArr},
//     { question: "test6", answer: "a", answerChoices: answerChoicesObjArr[5]},
//     { question: "test7", answer: "a", answerChoices: answerChoicesObjArr[6]},
//     { question: "test8", answer: "a", answerChoices: answerChoicesObjArr[7]},
//     { question: "test9", answer: "a", answerChoices: answerChoicesObjArr[8]},
//     { question: "test10", answer: "a", answerChoices: answerChoicesObjArr[9]},
// ]
]
// empty arr for high scores
let highScore = [];

//TODO

// function to check answer
let checkAnswer = function(event) {
    event.target
    console.log(event.target);
    // compare selected answer with array answer
    if (event.target.textContent !== questionObjArr[questionCount].answer) {
        console.log("wrong");
    } else {
        console.log("correct")
    }
    // add if else statement here
    // if wrong
        // make element to say Wrong! and
        // deduct time penalty
    // else (if correct)
        // make element to say Correct!
        // add 1 to score
    
}

// function to start timer countdown
function countdown(x) {
    let timeRemaining = x;

    let timeInterval = setInterval(function(){
        if (timeRemaining === 0) {
            clearInterval(timeInterval);
        } else {
            timerEl.textContent = `Time: ${timeRemaining}`;
            timeRemaining--;
        }
    }, 1000);
}
    
    // function to start quiz
function startQuiz() {
    
    // assign text to value of first question;
    questionEl.textContent = questionObjArr[0].question;
    //"How do you call a function named 'thisFunction'?";
    // hide <p> and startbutton
    instructionsEl.setAttribute("class", "quiz-start");
    startBtn.setAttribute("class", "quiz-start");
    // create answerBtnEl
    
    // for loop for answerBtn generation
    for (let i = 0; i < 4; i++) {
        // create answerBtn element
        answerBtnEl = document.createElement("button");
        // add class styling
        answerBtnEl.className = 'btn';
        // add text from answerChoices property
        answerBtnEl.textContent = questionObjArr[questionCount].answerChoices[i];
       
        // push to empty array for call and content sync
        answerBtnEl.setAttribute("id", `button${i}`);
        // append answerBtnEl to its parent container
    
        btnArr.push(answerBtnEl);
        // append answerBtnEl to its parent container
    
        btnContainer.appendChild(btnArr[i]);
        // add one value to btnId per interation of loop
    } 

    btnContainer.addEventListener("click", function(event) {    
        // check answer BEFORE adding value to question count
        checkAnswer(event);
        // add value to questionCount for quizProgression
        questionCount++;
        quizProgression();
    });
}
// function for quizProgression
// end of first question -> last question
let quizProgression = function (){
    // question and answer progression
    questionEl.textContent = questionObjArr[questionCount].question;
    // for loop to change btn text to new answer choices
    for (let i = 0; i < 4; i++) {
        btnArr[i].textContent = questionObjArr[questionCount].answerChoices[i];
    };
}


// When I click on "Start Quiz"
startBtn.addEventListener("click", function() {
    // begin timer
    countdown(75);
    // call function startQuiz with start button event.
    startQuiz();
})
