import { map } from './raw_data.js';

/*Store commonly used variables*/

var backButton = document.getElementById("previous-question-button");

//var final_part_one = document.getElementById("final-anime-recommendation");
//var final_part_two = document.getElementById("final-details");

var choice_button_one = document.getElementById("choice-one");
var choice_button_two = document.getElementById("choice-two");
var choice_button_three = document.getElementById("choice-three");
var choice_button_four = document.getElementById("choice-four");
var choice_button_five = document.getElementById("choice-five");
var choice_button_six = document.getElementById("choice-six");
var choice_button_seven = document.getElementById("choice-seven");
var choice_button_eight = document.getElementById("choice-eight");

var choice_button_array = [
    choice_button_one,
    choice_button_two,
    choice_button_three,
    choice_button_four,
    choice_button_five,
    choice_button_six,
    choice_button_seven,
    choice_button_eight
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
function change_first_button() {
    var button_component_pressed = choice_button_one;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_one.onclick = function () { change_first_button(); };

function change_second_button() {
    var button_component_pressed = choice_button_two;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_two.onclick = function () { change_second_button(); };

function change_third_button() {
    var button_component_pressed = choice_button_three;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_three.onclick = function () { change_third_button(); };

function change_four_button() {
    var button_component_pressed = choice_button_four;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_four.onclick = function () { change_four_button(); };

function change_fifth_button() {
    var button_component_pressed = choice_button_five;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_five.onclick = function () { change_fifth_button(); };

function change_sixth_button() {
    var button_component_pressed = choice_button_six;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_six.onclick = function () { change_sixth_button(); };

function change_seventh_button() {
    var button_component_pressed = choice_button_seven;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_seven.onclick = function () { change_seventh_button(); };

function change_eight_button() {
    var button_component_pressed = choice_button_eight;
    var answer_selected_string = button_component_pressed.innerHTML;
    var the_array_next = map.get(answer_selected_string);
    var change_prompt = the_array_next[1];
    history.push(prompt.innerHTML);
    prompt.innerHTML = the_array_next[0];
    SetUpButtons();
    prompt.innerHTML = change_prompt;
}

choice_button_eight.onclick = function () { change_eight_button(); };

