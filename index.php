<?php
    define ("TITLE", "Anime Flowchart");
    define ("HEADER_ONE", "Home");
    define ("HEADER_TWO", "Find your new favorite anime!");
    include('src/includes/header.php');
?>

<div class="list-group list-group-horizontal" style="margin-top: 250px">
    <button id="restart-button" class="list-group-item list-group-item-action list-group-item-secondary">Restart</button>
    <button id="previous-question-button" class="list-group-item list-group-item-action list-group-item-secondary">Go back</button>
    <hr class="my-3">
</div>

<div class="empty-space">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-3 text-center font-weight-bold" id="prompt-square">Are you looking at shows or movies?</h1>
    </div>
</div>

<div class="list-group list-group-horizontal">
    <button id="choice-one" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
    <button id="choice-two" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
    <button id="choice-three" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
    <button id="choice-four" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
</div>
<div class="list-group list-group-horizontal">
    <button id="choice-five" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
    <button id="choice-six" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
    <button id="choice-seven" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
    <button id="choice-eight" type="button" class="list-group-item list-group-item-action list-group-item-primary"></button>
</div>


<div id="flowchart-container" class="custom-container" style="margin-top: 400px">
</div>

<?php
    include('src/includes/footer.php');
?>