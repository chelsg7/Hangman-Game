var wordBank = ['lager', 'ipa', 'stout', 'porter', 'amber', 'pilsner', 'gose', 'ale', 'witbier', 'lambic', 'weissbier','saison', 'bock', 'kolsch', 'malt', 'hops', 'barley'];
var random = Math.floor(Math.random() * wordBank.length);
var wordChoice = wordBank[random];
var wordLength = wordChoice.length;
var lives = 10;
var wins = 0;
var losses = 0;
var userLetters = [];
var userGuess = "";

console.log(wordChoice);

var blanksArray = [];
for(var i = 0; i < wordChoice.length; i++){
    blanksArray[i]= ' _ ';
    };
    document.getElementById("word").innerHTML = blanksArray.join("");
    
var splitWordArray = [];
splitWordArray = wordChoice.split("");



var checkArray = function(){
    for (var i = 0; i < splitWordArray.length; i++) {
        if (userGuess === splitWordArray[i]) {
            blanksArray[i] = userGuess;
            document.getElementById("word").innerHTML = blanksArray.join(" ");
        };
    };
};

    var gameWin = false;
    var checkWin = function(){
        console.log("inside checkwin");
        if (splitWordArray.indexOf(userGuess) > -1){
            if(blanksArray.indexOf(" _ ") === -1){ 
                console.log("win");

                alert('You win! ' + wordChoice + " was the right word!");
                wins++;
                updateWins();
                return gameWin = true; 
            }
        } else if (lives === 0) {
            /*
            for (var i =0; i = blanksArray.length; i++){
                if(blanksArray.indexOf(" _ ") !== -1){ 
                    console.log('you lost');
                    return gameWin = false;
                }*/
                alert('you lost! ' + wordChoice + ' was the right word!');
                losses++;
            } 
        }
    
    
    // var win = true
    // if (splitWordArray === blanksArray){alert('win'); };

    // if win = true, then run winGame()

var updateUserGuess = function(){
    document.getElementById('userLetterGuess').innerHTML = userLetters;
};

var updateGuessNumber = function(){
    document.getElementById("guessLeft").innerHTML = lives;
};

var updateWins = function(){
    document.getElementById('userWins').innerHTML = wins;
};

var updateLosses = function(){
    document.getElementById('userLosses').innerHTML = losses;
};

//reset

var reset = function(){
    random = Math.floor(Math.random() * wordBank.length);
    wordChoice = wordBank[random];
    lives = 10;
    wins = 0;
    losses = 0;
    userLetters = [];
    userGuess = "";
    blanksArray = [];
    splitWordArray = [];
    gameWin = false;
    updateGuessNumber();
    updateUserGuess();
    updateLosses();
    updateWins();
}

console.log(blanksArray);
console.log(splitWordArray);

document.getElementById('start').addEventListener("click", function(){
    updateGuessNumber();
    updateWins();
    updateLosses();
});

document.getElementById('reset').addEventListener("click", function(){
    reset();
});


document.onkeyup = function(event){
    userGuess = event.key;
    checkArray();
    userLetters.push(" " + userGuess);
    updateUserGuess();
    lives--;
    updateGuessNumber();
    updateWins();
    updateLosses();

    if(lives === 0){
        losses++;
        updateLosses();
        console.log("before checkwin");
        checkWin();
    } else if (lives !== 0){
        checkWin();
    };
};
