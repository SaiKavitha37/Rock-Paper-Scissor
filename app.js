document.addEventListener("DOMContentLoaded", function(){
let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const compcore=document.querySelector("#computer-score");
const newGame=document.querySelector("#newgame");

const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

newGame.addEventListener("click",()=>{
    userScore=0;
    computerScore=0;
    uscore.innerText="0";
    compcore.innerText="0";
    msg.innerText="Play your move";
});

const draw=()=>{
    msg.innerText="Game was Draw..Play again.";
    msg.style.backgroundColor="#c64981";
};


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        uscore.innerText=userScore;
        msg.innerText=`You Win!!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compcore.innerText=computerScore;
        msg.innerText=`You Lose...${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice==compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

});