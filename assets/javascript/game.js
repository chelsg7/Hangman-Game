//original variables
var wins = 0;
var losses = 0;
var guesses = 10;
var guessRemain = 10;
var userGuessed = [];
var original = ['lager', 'ipa', 'stout', 'porter', 'amber', 'pilsner', 'gose', 'ale', 'witbier', 'lambic', 'weissbier','saison', 'bock', 'kolsch', 'malt'];
var originalChoice = original[Math.floor(Math.random() * original.length)];
console.log(originalChoice);

document.getElementById("start").addEventListener("click", function(){
  document.getElementById('remain').innerHTML = "Guesses Left Now : " + guessRemain;
  document.getElementById('won').innerHTML = "Current Win Streak : " + wins;
  document.getElementById('lost').innerHTML = "Current Loss Streak : " + losses;
  document.getElementById('userInput').innerHTML = "Letters You Already Guessed : " + userGuessed;

  var newChoice = original[Math.floor(Math.random() * original.length)];
  console.log(newChoice);
  var arrNewChoice = newChoice.split("");
  console.log(arrNewChoice);
  for (var i=0 ; i < newChoice.length; i++) {
    //create a space holder here and append it to the div with ID "word"
    var space = document.createElement('p');
    var space2 = space.innerText = ' _ ';
    document.getElementById('word').append(space2);
  };
  document.onkeyup = function(event){
    var userGuess = event.key;
    guessRemain--;
    userGuessed.push(userGuess);
    //set new variables equal to functions you need to run at key press
    var newRemain = function() {
      document.getElementById('remain').innerHTML = "Guesses Now Remaining: " + guessRemain;
    };
    var updateLetterGuess = function() {
      this.userGuess = this.originalChoice[Math.floor(Math.random() * this.originalChoice.length)];
    };
    var updateGuesses = function() {
      document.getElementById('userInput').innerHTML = "You Guessed: " + userGuessed.join(', ');
    };

    newRemain();
    updateLetterGuess();
    updateGuesses();

    //reset variable needs for game end
    var reset = function() {
      guesses = 10;
      guessRemain = 10;
      guessed = [];
      updateLetterGuess();
      updateGuesses();
      newGuess();
      };

  };
});