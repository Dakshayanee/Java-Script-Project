let userScore =0;
let compScore =0;

//to access the choices
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options=["rock" ,"paper" ,"scissors"]
    const randomIdx=Math.floor( Math.random() * 3);   //which generate random no till 2
     return options[randomIdx]

    }

//when u click on the choices
choices.forEach((choice) => {
   choice.addEventListener("click" , () =>{
       const userChoice=choice.getAttribute("id")
        // console.log("choice was clicked",userChoice)
        playGame(userChoice)

   })
})

const drawGame = () =>{
    console.log("Game was draw")
    msg.innerText="Game was draw"
    msg.style.backgroundColor=" #081b31"
}

const showWinner = (userWin , userChoice ,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       // console.log("You win!!")
        msg.innerText=`You win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    } else{
        compScore++
        compScorePara.innerText=compScore
       // console.log("You loose")
        msg.innerText=`You lost!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red"
    }
     
}

const playGame =(userChoice) =>{
    console.log("user choice =",userChoice)
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
      drawGame()
    } else {
        let userWin= true;
        if(userChoice === "rock"){
            //scissors,paper
           userWin= compChoice === "paper" ? false : true;
        } 
          else if(userChoice === "paper"){
            //rock,scissors
            userWin= compChoice === "scissors" ? false : true;
          }
          else {
            //user-scissors
            //rock,paper
           userWin = compChoice === 'rock' ? false : true;
          }
          showWinner(userWin ,userChoice ,compChoice);
    }

}