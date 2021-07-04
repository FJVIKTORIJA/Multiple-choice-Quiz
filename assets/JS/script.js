let start = document.querySelector ("#start1");



let instructions = document.querySelector ("#instructions");
let Leave = document.querySelector ("#Leave");
let ProceedButton = document.querySelector ("#Proceed");


let questions = document.querySelector ("#questions");
let Remainingtime = document.querySelector ("#Remainingtime");


let Q1 = document.querySelector ("#Q1");
let Q1T = document.querySelector ("#Q1T");


let choice1 = document.querySelector ("#choice1");
let choice2 = document.querySelector ("#choice2");
let choice3 = document.querySelector ("#choice3");



let NextQ = document.querySelector ("#NextQ");


let completed = document.querySelector ("#completed");
let result = document.querySelector ("#result");




let option = document.querySelector (".option");



let index = 0;
let time = 0;
let interval = 0;

//total points
let correct = 0;

//store Answer value
let UserAns = undefined;

//when Start button click
start.addEventListener("click" , ()=>{
    start.style.display = "none";
    instructions.style.display = "block";

})
