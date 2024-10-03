
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score");


const generatecump = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "game draw";
    msg.style.backgroundcolor  = "yellow";

}

const showwinner = (userwin) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = "you win";
        msg.style.backgroundcolor ="green";
          
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "you lose";
        msg.style.backgroundcolor = "red";
    }
}


const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = generatecump();
    console.log("comp choice =", compchoice);

    if(userchoice === compchoice){
        // draw game 
        drawgame();
    }  

    else{
        let userwin = true;
        // userscore++;
        if(userchoice=== "rock"){
            // scissor ,paper
           userwin = compchoice === "paper" ? false: true;
        }else if(userchoice=== "paper"){
            // rock,scissor
          userwin = compchoice==="scissor" ? false : true;
        } else{
            // rock , paper
            userwin= compchoice== "rock" ? false : true;
        }
        showwinner(userwin);
    }



}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked ", userchoice);
        playgame(userchoice);
    });
});
