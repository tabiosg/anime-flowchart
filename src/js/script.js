import { map } from './raw_data.js';

/*Store commonly used variables*/

var backButton = document.getElementById("previous-question-button");
var choiceButtonArray = [
    document.getElementById("choice-zero"),
    document.getElementById("choice-one"),
    document.getElementById("choice-two"),
    document.getElementById("choice-three"),
    document.getElementById("choice-four"),
    document.getElementById("choice-five"),
    document.getElementById("choice-six"),
    document.getElementById("choice-seven")
]
var prompt = document.getElementById("prompt-square");

/*Refresh button*/
const reloadButton = document.querySelector("#restart-button");
function reload() {
    reload = location.reload();
}
reloadButton.addEventListener("click", reload, false);

/*Handle everything going back here*/

var historyStack = [];

function go_back() {
    if (historyStack.length == 0) {
        return;
    }
    var rewind_to_this_prompt = historyStack.pop();
    prompt.innerHTML = rewind_to_this_prompt;
    SetUpButtons();
}

backButton.onclick = function () { go_back(); };

/*Handle all interactions when clicked*/

function SetUpButtons() {
    for (var i = 0; i < 8; ++i) {
        choiceButtonArray[i].style.display = "none";
    }
    var prompt_question = prompt.innerHTML;
    var theArray = map.get(prompt_question);

    if (theArray.length == 3) return;

    for (var i = 2; i < theArray.length; ++i) {
        var choiceArrayI = theArray[i];
        var choice_i_string = choiceArrayI[0];
        choiceButtonArray[i - 2].innerHTML = choice_i_string;
        choiceButtonArray[i - 2].style.display = "inline-block";
    }
}

// Done on start up
SetUpButtons();

/*Buttons*/
var changeButtonArray = Array.apply(null, Array(8)).map(function () {})

for (var i = 0; i < changeButtonArray.length(); ++i) {
    changeButtonArray[i] = function() {
        var button_component_pressed = choiceButtonArray[i];
        var answer_selected_string = button_component_pressed.innerHTML;
        var theArrayNext = map.get(answer_selected_string);
        var change_prompt = theArrayNext[1];
        historyStack.push(prompt.innerHTML);
        prompt.innerHTML = theArrayNext[0];
        SetUpButtons();
        prompt.innerHTML = change_prompt;
    }
}

for (var i = 0; i < choiceButtonArray.size(); ++i) {
    choiceButtonArray[i].onclick = function () { changeButtonArray[i](); };
}

