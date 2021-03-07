
let startBtn = document.querySelector("#startquiz");
let questionEl = document.querySelector("#question");
let timerEl = document.querySelector("#timer");
let questionObjArr = [
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
    { question: "", answer: ""},
]
// empty arr for high scores
let highScore = [];
//TODO
// When I click on "Start Quiz"
startBtn.addEventListener("click", function() {
    console.log("clicked!")
    // Then first question appears and timer begins to countdown
function countdown() {
    let timeRemaining = 75;
    debugger;
    let timeInterval = setInterval(function(){
        if (timeRemaining > 0) {
            timerEl.textContent = `Time: ${timeRemaining}`;
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

countdown();
//TODO
// When I answer the question... 

// Then the next question appears

// Then if I answer incorrectly
    // Then the timer gets deducted as penalty

//TODO
// When timer hits 0 or all questions have been answered
    // Then I am shown my final score and ...
    // Then I am able to save my initials and score to high score.

} // end of event listener function
) // end of event listener
//TODO
// When I click on "view high scores"
    // I am presented with list of high scores
