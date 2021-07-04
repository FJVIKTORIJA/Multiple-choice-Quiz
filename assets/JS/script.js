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




let option = document.querySelectorAll (".option");



let index = 0;
let timer = 0;
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
//when Exit button clecked 
Leave.addEventListener("click" , ()=>{
    start.style.display = "block";
    instructions.style.display = "none";

})

//Timer
let countDown = ()=>{
    if(timer === 15)
    {
        clearInterval(interval);
        NextQ.click();
    }
    else
    {
        timer++;
        time.innerText = timer;

    }
}

setInterval(countDown,1000);

let loadData = ()=>{
    Q1.innerText = index + 1 + "1.";
    Q1T.innerText = MCQS[index].questions;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;

    timer = 0;
}

loadData();



ProceedButton.addEventListener("click" , ()=>{
  questions.style.display = "block";
    instructions.style.display = "none";

    interval = setInterval(countDown, 1000);
    loadData();
});


option.forEach( (_options,_optionNo) =>{
    choices.addEventListener("click",()=>{
        choices.classList.add("active");

        if(_optionNo === MCQS[index].answer)
        {
            correct++;
        }
        else
        
        {
            correct += 0;
        }
        clearInterval(interval);
        for (i =0; i <= 3; i++)
        {
            option.classList.add("disabled");
        }
        
    })

    
});