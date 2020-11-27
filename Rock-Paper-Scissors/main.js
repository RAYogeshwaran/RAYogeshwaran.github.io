const computer_choice = {
    0 : {
        name : "rock",
        imageUrl : "./Rock.png"
    },
    1 : {
        name : "paper",
        imageUrl : "./Paper.png"
    },
    2 : {
        name : "scissors",
        imageUrl : "./Scissors.png"
    }
};
var myScore = 0;  
var comScore = 0;   
document.getElementById("rock").addEventListener("click", afterClick);
document.getElementById("paper").addEventListener("click", afterClick);
document.getElementById("scissors").addEventListener("click", afterClick);
 function afterClick (e)  {
     
    const randomNumber = generateRandomNum();
    const computerImg = document.getElementById("computer_choice").querySelector("img");
    computerImg.src = computer_choice[randomNumber].imageUrl;
    const myChoice = e.currentTarget.id;
    const comChoice = computer_choice[randomNumber].name;
    const message = document.getElementById("message").querySelector("h2");
    

    if(myChoice == "rock" && comChoice == "rock"){
        message.innerHTML = "Match Tied!!";
    }
    else if (myChoice == "paper" && comChoice == "paper"){
        message.innerHTML = "Match Tied!!";
    }
    else if (myChoice == "scissors" && comChoice == "scissors"){
        message.innerHTML = "Match Tied!!";
    }
    else if (myChoice == "paper" && comChoice == "rock"){
        message.innerHTML = "You Won!!";
        myScore+=1;
    }
    else if (myChoice == "paper" && comChoice == "scissors"){
        message.innerHTML = "Computer Won!!";
        comScore+=1;
    }
    else if (myChoice == "rock" && comChoice == "paper"){
        message.innerHTML = "Computer Won!!";
        comScore+=1;
    }
    else if (myChoice == "rock" && comChoice == "scissors"){
        message.innerHTML = "You Won!!";
        myScore+=1;
    }
    else if (myChoice == "scissors" && comChoice == "paper"){
        message.innerHTML = "You Won!!";
        myScore+=1;
    }
    else if (myChoice == "scissors" && comChoice == "rock"){
        message.innerHTML = "Computer Won!!";
        comScore+=1;
    }
    else {
        message.innerHTML = "Error";
    }
    showScore(myScore,comScore);
};
const generateRandomNum = () => {
    return Math.floor(Math.random()*3);
};

document.getElementById("reset").onclick = function () {
    const message = document.getElementById("message").querySelector("h2");
    message.innerHTML = "Let's Start!!";
    myScore = 0;
    comScore = 0;
    showScore(myScore,comScore);
    const computerImg = document.getElementById("computer_choice").querySelector("img");
    computerImg.src = "./question-mark.png";
};

const showScore = (myScore,comScore) => {
    const playerScore = document.getElementById("playerScore");
    const computerScore = document.getElementById("computerScore");

    playerScore.innerHTML = myScore.toString();
    computerScore.innerHTML = comScore.toString();

};