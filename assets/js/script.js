let answerArr = [
    answerOneArr = ["a. call thisFunction;", "b. thisFunction();", "c. var thisFunction();", "d. thisfunction;"],
    answerTwoArr = ["a. <link>", "b. <a> ", "c. <source>", "d. <script>"],
    answerThreeArr = ["a. A type of conditional for the function", "b. Names list in the function definition", "c. Real values passed to the function", "d. Conflicting code within a function"],
    answerFourArr = ["a. A var declared anywhere in a scipt file", "b. A var delcared inside of a function", "c. A var declared anywhere in a webpage's file(s) ", "d. A var declared near other functions in a script file"],
    answerFiveArr = ["a. object", "b. boolean", "c. undefined", "d. string"],
] 

const questionObjArr = [
    // question 1
    { question: "How do you call a function named 'thisFunction'?", answer: "b. thisFunction();", answerChoices: answerOneArr},
    // question 2
    { question: "How do you link an external JS file to an html file? ", answer: "d. <script>", answerChoices: answerTwoArr},
    // question 3
    { question: "What are function arguments?" , answer: "c. Real values passed to the function", answerChoices: answerThreeArr}, 
    // question 4
    { question: "What is a local scope variable?", answer: "b. A var delcared inside of a function", answerChoices: answerFourArr},
    // question 5
    { question: "Which of the following is NOT an example of primitive data", answer: "a. object", answerChoices: answerFiveArr},
]

// Global DOM var
let startBtn = document.querySelector("#start-quiz");
let questionEl = document.querySelector("#question");
let timerEl = document.querySelector("#timer");
let instructionsEl = document.querySelector("#instructions");
let btnContainer = document.querySelector("#button-container");

// Global Var
let btnArr = [];
let questionCount = 0;
let highScore = [];
let score = 0;
let time = 75;

// function to check answer
let checkAnswer = function(event) {

    let answerCheckEL = document.createElement("h1");
    document.getElementById("quiz-container").appendChild(answerCheckEL);
    // compare selected answer with array answer
    if (event.target.textContent !== questionObjArr[questionCount].answer) {
        //Time penalty
        time -= 10;
        answerCheckEL.setAttribute("class", "answer-check");
        answerCheckEL.textContent = "Wrong!";    
        setTimeout(function(){
        answerCheckEL.setAttribute("class", "quiz-start");
        }, 1000);
    }

     else {
        answerCheckEL.setAttribute("class", "answer-check");
        answerCheckEL.textContent = "Correct!";    
        setTimeout(function(){
        answerCheckEL.setAttribute("class", "quiz-start");
    }, 1000);    
}
}

// // function to start timer countdown
let countdown =  function(){
    
    let timeInterval = setInterval(function(){
        let timeRemaining = time;

        if (timeRemaining <= 0 || questionCount === 5) {
            clearInterval(timeInterval);
            score = timeRemaining;
            console.log(score);
            quizEnd();
            
        } else {
            timerEl.textContent = `Time: ${timeRemaining}`;
            timeRemaining--;
            
            time = timeRemaining;        
        }
    }, 1000);
}

    
    // function to start quiz
let startQuiz = function() {
    
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
    if (questionCount < 5) {
        // question and answer progression
        questionEl.textContent = questionObjArr[questionCount].question;
        // for loop to change btn text to new answer choices
        for (let i = 0; i < 4; i++) {
            btnArr[i].textContent = questionObjArr[questionCount].answerChoices[i];
        };
    }
}

let quizEnd = function() {
    console.log(score);
    questionEl.textContent = "All done!"
    // display final score
    btnContainer.setAttribute("class", "quiz-start");
    startBtn.setAttribute("class", "quiz-start");
    instructionsEl.removeAttribute("class", "quiz-start");
    let endText = document.getElementById("text");
    endText.textContent = `Your final score is ${score}.`;
    endText.setAttribute("class", "end-quiz");
    // form for high score submission
    let endFormEl = document.getElementById("end-form");
    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", "initials");
    labelEl.setAttribute("class", "end-quiz")
    labelEl.textContent = "Enter initials:"
    let inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "initials");
    inputEl.setAttribute("id", "initials");
    inputEl.setAttribute("class", "end-form");
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "btn");
    submitBtn.textContent = "Submit";

    endFormEl.appendChild(labelEl);
    endFormEl.appendChild(inputEl);
    endFormEl.appendChild(submitBtn);

    // initialize user object to push to highscore
    let user = {finalScore: score};
    // capture input and saveInitials
    submitBtn.addEventListener("click", function() {
        user.name = inputEl.value;
        if (user.name.length > 3 || user.name.length === 0) {
           alert("Invalid input. Please put at least one and at most three characters.");
        } else { 
            highScore.push(user);
            saveScore();
            setTimeout(function(){
                location.reload();
                return false;
            }, 1500);
        }
    });
}

const saveScore = function() {
    localStorage.setItem("highScoreObj", JSON.stringify(highScore));
    }

const loadScore = function() {
    let savedScores = localStorage.getItem("highScoreObj");

    if (!savedScores) {
        return false;
    }

    highScore = JSON.parse(savedScores);
}



loadScore();


// When I click on "Start Quiz"
const start = () => {
    startBtn.addEventListener("click", function() {
        // begin timer
        countdown();
    // call function startQuiz with start button event.
         startQuiz();
    });
}

window.onload = start;