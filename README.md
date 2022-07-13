# Anime Flowchart
The Anime Flowchart website is a project that recommends shows and movies by connecting them in a tree-like manner.

---

## How it Works

The website asks a sequence of questions, allowing the user to select their choice by clicking on buttons. A particular sequence of answers will eventually lead to a particular show or movie recommendation.

---

## How to Configure the Questions and Results

A CSV file called [`anime_flowchart_data.csv`](src/convert/anime_flowchart_data.csv) is filled by the developer before making the website. This file has multiple question entries listed in the every row. Every question entry is assigned a subject string, a question prompt, and various questions. Every recommendation entry is only assigned a corresponding subject string.

After filling the CSV file, a Python script called [`convert.cpp`](src/convert/convert.cpp) has been made to help convert the CSV file into a desired Javascript file called [`raw_data.js`](src/js/raw_data.js). To aid with converting the CSV file, I used csvstream.h from [here](https://github.com/awdeorio/csvstream).



---

## Details
The website is live and can be found [here](https://tabiosg.github.io/anime-flowchart/). Most of my work was done in [`index.php`](index.php), [`about.php`](about.php), [`src/includes/`](src/includes/), [`src/convert/`](src/convert), [`src/js/`](src/js/), and [`style.css`](src/css/style.css).

---

## Documentation

One can read more on the convert system documentation in this [`README.md`](src/convert/README.md).
