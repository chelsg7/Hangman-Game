var wins = 0;
var losses = 0;
var guesses = 5;
var guessRemain = 5;
var userG = [];
var words = ['the', 'quick', 'brown', 'fox', 'jumps', 'over','lazy', 'dog'];
var choice = words[Math.floor(Math.random() * words.length)];
var spaceNeed = [];

document.getElementById("start").addEventListener("click", function(){
    var newChoice = words[Math.floor(Math.random() * words.length)];
    document.getElementById('won').innerHTML = "Current Wins : " + wins;
    document.getElementById('lost').innerHTML = "Current Losses : " + losses;
    console.log(newChoice);
    var letter = newChoice.split("");
    console.log(letter);



    document.onkeyup = function(event) {
      //Define user key guess function, subtract from remaining and add to array
      var userGuess = event.key;
      guessRemain--;
      userG.push(userGuess);

      
    };
});




  