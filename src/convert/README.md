# Using convert.cpp
The purpose of convert.cpp is to convert an input CSV file(anime_flowchart_data.csv) 
with the proper format to a JavaScript format for the raw_data.js file. 
raw_data.js contains the paths between the nodes from the start to end.

## Usage:
```
make convert
./convert
```
It is recommended that you type```make clean``` afterwards.

## Customizing the CSV file
Each column has a specific purpose:
*importance: shows distance from root node (required)
*subject_str: should have the subject of array (required)
*q_prompt: should have follow-up question (if empty, that means there are no options to choose)
*opt_1: should be the first option to follow-up question (required unless subject_str is an anime)
*opt_2 to opt_8: the rest of the options. There is no need to create all eight options.

If an option entry is made, it should always have a corresponding subject_str. There should be no repeats in subject_strings or question prompts.
