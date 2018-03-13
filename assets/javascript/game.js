// original variables
var wordBank = ['lager', 'ipa', 'stout', 'porter', 'amber', 'pilsner', 'gose', 'ale', 'witbier', 'lambic', 'weissbier','saison', 'bock', 'kolsch', 'malt', 'hops', 'barley'];
var random = Math.floor(Math.random() * wordBank.length);
var wordChoice = wordBank[random];
var wordLength = wordChoice.length;
var guessStart = 10;
var guessRemain = 10;
var wins = 0;
var losses = 0;
var usedLetters = [];
var blankHang = [];
var openHang = "";
var userGuessList = [];
var userKey = "";
var arrNewChoice = "";

//original functions
function reset(){
    random = Math.floor(Math.random() * wordBank.length);
    wordChosen = wordBank[random];
    wordBank.splice(random, 1);
    guessStart = 10;
    blankHang = [];
    usedLetters = [];
};
var guessReset = function() {
    document.getElementById('guessLeft').innerHTML = guessRemain;
};
  var updateUserGuesses = function() {
    document.getElementById('userLetterGuess').innerHTML = userGuessList;
  };



  document.getElementById('start').addEventListener("click", function(){
      random = Math.floor(Math.random() * wordBank.length);
      var newChoice = wordBank[random];
      console.log(newChoice); 

      guessReset();
      document.getElementById('userWins').innerHTML = wins;
      document.getElementById('userLosses').innerHTML = losses;

      var arrNewChoice = newChoice.split("");
      console.log(arrNewChoice);
      for (var i=0 ; i < newChoice.length; i++) {
          var spaceCreate = document.createElement('p');
          var blankCreate = spaceCreate.innerText = ' _ ';
          document.getElementById('word').append(blankCreate);
        };

        document.onkeydown = function(event){
            var userKey = event.key;
            guessRemain--;
            userGuessList.push(userKey);
            guessReset();
            updateUserGuesses();
            for( var a = 0; a < arrNewChoice.length; a++){
                console.log(arrNewChoice[a]);
                
            }
        };

  }) 