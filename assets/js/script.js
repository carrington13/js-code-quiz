
let startBtn = document.querySelector("#startquiz");
let questionEl = document.querySelector("#question");
let timerEl = document.querySelector("#timer");
let instructionsEl = document.querySelector("#instructions");
let answerChoicesObjArr = [
    one = ["a", "b", "c", "d"],
    two = ["a", "b", "c", "d"],
    three = ["a", "b", "c", "d"],
    four = ["a", "b", "c", "d"],
    five = ["a", "b", "c", "d"],
    six = ["a", "b", "c", "d"],
    seven = ["a", "b", "c", "d"],
    eight = ["a", "b", "c", "d"],
    nine = ["a", "b", "c", "d"],
    ten = ["a", "b", "c", "d"],
] 

let questionObjArr = [
    { question: "test", answer: "a", answerChoices: answerChoicesObjArr[0]},
    { question: "test2", answer: "a", answerChoices: answerChoicesObjArr[1]},
    { question: "test3", answer: "a", answerChoices: answerChoicesObjArr[2]}, 
    { question: "test4", answer: "a", answerChoices: answerChoicesObjArr[3]},
    { question: "test5", answer: "a", answerChoices: answerChoicesObjArr[4]},
    { question: "test6", answer: "a", answerChoices: answerChoicesObjArr[5]},
    { question: "test7", answer: "a", answerChoices: answerChoicesObjArr[6]},
    { question: "test8", answer: "a", answerChoices: answerChoicesObjArr[7]},
    { question: "test9", answer: "a", answerChoices: answerChoicesObjArr[8]},
    { question: "test10", answer: "a", answerChoices: answerChoicesObjArr[9]},
]

// empty arr for high scores
let highScore = [];
//TODO

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
        // initialize button array
        let btnArr = [];
        // question one answer array
        let answerArr = [
            // answer one [0]
            "a. call thisFunction;",
            // two [1]
            "b. thisFunction();",
            // three [2]
            "c. var thisFunction();",
            // four [3]
            "d. thisfunction;"
        ]
        // change header to display question
        questionEl.textContent = "How do you call a function named 'thisFunction'?";
        // hide <p> and startbutton
        instructionsEl.setAttribute("class", "quiz-start");
        startBtn.setAttribute("class", "quiz-start");
        // create answerBtnEl 
        // create btnContainer div 
        let btnContainer = document.querySelector("#button-container");
        // for loop for answerBtn generation
        for (let i = 0; i < 4; i++) {
            debugger;
            // create answerBtn element
            answerBtnEl = document.createElement("button");
            // add class styling
            answerBtnEl.className = 'btn';
            // push to empty array for call and content sync
            btnArr.push(answerBtnEl);
            // add text from preset answer array
            btnArr[i].textContent = answerArr[i];

            // append answerBtnEl to its parent container
            btnContainer.appendChild(btnArr[i]);
        } 

    }
// When I click on "Start Quiz"
startBtn.addEventListener("click", function() {
    // begin timer
    countdown(75);
    // call function startQuiz with start button event.
    startQuiz();
})
