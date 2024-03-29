import { map } from './raw_data.js';

/*Store commonly used variables*/

let choiceButtonArray = [
    document.getElementById("choice-zero"),
    document.getElementById("choice-one"),
    document.getElementById("choice-two"),
    document.getElementById("choice-three"),
    document.getElementById("choice-four"),
    document.getElementById("choice-five"),
    document.getElementById("choice-six"),
    document.getElementById("choice-seven")
]
let promptSquare = document.getElementById("prompt-square");
const reloadButton = document.querySelector("#restart-button");
reloadButton.addEventListener("click", function(){location.reload()}, false);

/*Handle everything going back here*/

let historyStack = [];


let goBackButton = document.getElementById("previous-question-button");
goBackButton.onclick = function () { 
    if (historyStack.length == 0) {
        return;
    }
    let previousPrompt = historyStack.pop();
    promptSquare.innerHTML = previousPrompt;
    SetUpButtons();
};

/*Handle all interactions when clicked*/

function SetUpButtons() {
    for (let i = 0; i < 8; ++i) {
        choiceButtonArray[i].style.display = "none";
    }
    let promptQuestion = promptSquare.innerHTML;
    const theArray = map.get(promptQuestion);

    if (theArray.length == 3) return;

    for (let i = 2; i < theArray.length; ++i) {
        const choiceArray = theArray[i];
        const choiceString = choiceArray[0];
        choiceButtonArray[i - 2].innerHTML = choiceString;
        choiceButtonArray[i - 2].style.display = "inline-block";
    }
}

// Done on start up
SetUpButtons();

/*Buttons*/

var changeButtonArray = Array.apply(null, Array(8)).map(function () {})

for (let i = 0; i < changeButtonArray.length; ++i) {
    changeButtonArray[i] = function() {
        const buttonComponentPressed = choiceButtonArray[i];
        const selectedAnswer = buttonComponentPressed.innerHTML;
        const theArrayNext = map.get(selectedAnswer);
        const newPrompt = theArrayNext[1];
        historyStack.push(promptSquare.innerHTML);
        promptSquare.innerHTML = theArrayNext[0];
        SetUpButtons();
        promptSquare.innerHTML = newPrompt;
    }
}

for (let i = 0; i < choiceButtonArray.length; ++i) {
    choiceButtonArray[i].onclick = changeButtonArray[i];
}
