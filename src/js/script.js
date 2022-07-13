import { map } from './raw_data.js';

/*Store commonly used variables*/

var backButton = document.getElementById("previous-question-button");


var choice_button_array = [
    document.getElementById("choice-one"),
    document.getElementById("choice-two"),
    document.getElementById("choice-three"),
    document.getElementById("choice-four"),
    document.getElementById("choice-five"),
    document.getElementById("choice-six"),
    document.getElementById("choice-seven"),
    document.getElementById("choice-eight")
]

var prompt = document.getElementById("prompt-square");

/*Refresh button*/

const reloadButton = document.querySelector("#restart-button");
function reload() {
    reload = location.reload();
}
reloadButton.addEventListener("click", reload, false);

/*Handle everything going back here*/

var history = [];

function go_back() {
    if (history.length == 0) {
        return;
    }
    var rewind_to_this_prompt = history.pop();
    prompt.innerHTML = rewind_to_this_prompt;
    SetUpButtons();
}

backButton.onclick = function () { go_back(); };

/*Handle all interactions when clicked*/

function SetUpButtons() {
    for (var i = 0; i < 8; ++i) {
        choice_button_array[i].style.display = "none";
    }
    var prompt_question = prompt.innerHTML;
    var the_array = map.get(prompt_question);

    if (the_array.length == 3) return;

    for (var i = 2; i < the_array.length; ++i) {
        var choice_i_array = the_array[i];
        var choice_i_string = choice_i_array[0];
        choice_button_array[i - 2].innerHTML = choice_i_string;
        choice_button_array[i - 2].style.display = "inline-block";
    }
}

// Done on start up
SetUpButtons();

/*Buttons*/
var change_button_array = Array.apply(null, Array(8)).map(function () {})

for (var i = 0; i < change_button_array.size(); ++i) {
    change_button_array[i] = function() {
        var button_component_pressed = choice_button_array[i];
        var answer_selected_string = button_component_pressed.innerHTML;
        var the_array_next = map.get(answer_selected_string);
        var change_prompt = the_array_next[1];
        history.push(prompt.innerHTML);
        prompt.innerHTML = the_array_next[0];
        SetUpButtons();
        prompt.innerHTML = change_prompt;
    }
}

for (var i = 0; i < choice_button_array.size(); ++i) {
    choice_button_array[i].onclick = function () { change_button_array[i](); };
}

