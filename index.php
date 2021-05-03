<?php
    define ("TITLE", "Anime Flowchart");
    include('includes/header.php');
?>

<div class="below-top-bar">
    Discover new anime to watch!
</div>

<header>
    <h1>The Ultimate Anime Recommendation Flowchart 2021</h1>
    <h2>Meant for beginners and veterans alike!</h2>
</header>

<div id="flowchart-container" class="custom-container">
    <div id="state" class="state-square"><p>Please select an answer!</p></div>
    <div id="prompt-square" class="prompt-square-shape"><p>Are you looking at shows or movies?</p></div>
    <button id="restart-button" class="rewind-button">Restart</button>
    <button id="previous-question-button" class="rewind-button">Go back</button>

    <button id="choice-one" class="choice-button"></button>
    <button id="choice-two" class="choice-button"></button>
    <button id="choice-three" class="choice-button"></button>
    <button id="choice-four" class="choice-button"></button>
    <button id="choice-five" class="choice-button"></button>
    <button id="choice-six" class="choice-button"></button>
    <button id="choice-seven" class="choice-button"></button>
    <button id="choice-eight" class="choice-button"></button>

</div>

<div id="final-anime-recommendation">
    <div id="final-intro">
        The anime we recommend for you is: <br />
        <div id="final-anime-title">Erased</div>
    </div>
</div>

<div id="final-details">
    <img src="images/characters/erased.png" id="final-main-character" class="dot" />
    <img src="images/posters/erased.jpg" id="final-poster" />
    <div id="final-description">
        <p id="final-description-p">Description</p>
    </div>

    <div id="final-genres">Genres</div>

    <div id="final-mal-page"><a href="">MAL Page</a></div>

    <div id="final-restart">Click to restart.</div>
</div>

<?php
    include('includes/footer.php');
?>