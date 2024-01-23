let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const mesg=document.querySelector("#mesg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
 
 mesg.innerText="Game Was Draw,Play Again.";
 mesg.style.backgroundColor="#081b31";
 
 
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore ++;
        userScorepara.innerText=userScore;

        mesg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        mesg.style.backgroundColor="green";
    }else{
         compScore++;
        compScorepara.innerText=compScore;
        console.log("You Lose");
        mesg.innerText=`You Lose.${compChoice} beats Your ${userChoice}`;
        mesg.style.backgroundColor="red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice  =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else  {
        let userWin = true;
        if(userChoice === "rock"){
            //scissore / papaer
            userWin=compChoice === "paper" ? false : true ;
        } else if ( userChoice === "paper"){
            // rock / scissore 
            userWin = compChoice === "scissore" ? false : true ;
        }else  {
            // rock / papaer
            userWin=compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{

       const userChoice = choice.getAttribute("id");
         
       playGame(userChoice);
         
    });
});
