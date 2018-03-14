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
var userGuessList = [];
var userKey = "";
var arrNewChoice = "";

//original functions
function reset(){
    random = Math.floor(Math.random() * wordBank.length);
    wordChosen = wordBank[random];
    wordBank.splice(random, 1);
    guessStart = 10;
    blankHang = [" "];
    usedLetters = [];
};
var guessReset = function() {
    document.getElementById('guessLeft').innerHTML = guessRemain;
};
  var updateUserGuesses = function() {
    document.getElementById('userLetterGuess').innerHTML = userGuessList;
  };
  var wordPush = function(){
      if ( 
          userKey === "a" || userKey === "b" || userKey === "c" || userKey === "d" || userKey === "e" || userKey === "f" || userKey === "g" || userKey === "h" || userKey === "i" || userKey === "j" || userKey === "k" || userKey === "l" || userKey === "m" || userKey === "n" || userKey === "o" || userKey === "p" || userKey === "q" || userKey === "r" || userKey === "s" || userKey === "t" || userKey === "u" || userKey === "v" || userKey === "w" || userKey === "x" || userKey === "y" || userKey === "z"
      ){
          for (i = 0; i < arrNewChoice.length; i++){
              if (keyPress === blankHang[i]) {
                  blankHang[i] = keyPress;
              }
            }
        }
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
          blankHang[i] = ' _ '
      };

      document.getElementById("word").innerHTML = blankHang;

/*      for (i = 0; i< newChoice.length ; i++) {
            pushChar = newChoice[i];
            console.log (pushChar);
            blankHang.push(pushChar);
        };
        
    */


        document.onkeydown = function(event){
            var userKey = event.key;
            guessRemain--;
            userGuessList.push(" " +userKey);
            guessReset();
            updateUserGuesses();
            wordPush();
            for( var a = 0; a < arrNewChoice.length; a++){
                console.log(arrNewChoice[a]);
               
            }
        }
    })
