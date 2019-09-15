var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var rsButton = document.getElementById("resetButton");
var exButton = document.getElementById("exitButton");
var stButton = document.getElementById("buttonStart");

var p1Display = document.getElementById("p1ScoreText");
var p2Display = document.getElementById("p2ScoreText");
var winText = document.getElementById("winningScoreText");
var winInUser = document.getElementById("inputUserRounds");

var contCounter = document.querySelector(".containerCounter");
var contInput = document.querySelector(".containerInput");

var winningScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

startGame();

function startGame(){
    reset();
    winningScore = 5;
    winInUser.value = winningScore;
    winText.textContent = winningScore;
    contCounter.classList.add("d-none");
    contInput.classList.remove("d-none");
};

winInUser.addEventListener("change", function(){
    winningScore = parseInt(winInUser.value);
    winText.textContent = winningScore; 
});

winInUser.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        startCounting();  
    }
});

document.addEventListener("keyup", function(e){
    if(e.keyCode === 37){
        p1ButtonCounter();  
    }
    if(e.keyCode === 39){
        p2ButtonCounter(); 
    }
    if(e.keyCode === 38){
        reset();  
    }
    if(e.keyCode === 40){
        startGame(); 
    }
});

stButton.addEventListener("click", function(){
    startCounting();
});

function startCounting(){
    contCounter.classList.remove("d-none");
    contInput.classList.add("d-none");
    if(winningScore == null){
        contInput = 1;
    };
};

p1Button.addEventListener("click", function(){
    p1ButtonCounter();
});
function p1ButtonCounter(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winnerText");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
}

p2Button.addEventListener("click", function(){
    p2ButtonCounter();
});
function p2ButtonCounter(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winnerText");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
}

rsButton.addEventListener("click", function(){
    reset();
});

exButton.addEventListener("click", function(){
    startGame();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winnerText");
    p2Display.classList.remove("winnerText");
    gameOver = false;
};