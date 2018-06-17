var alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win= 0;
var lose= 0;
var attempt= 10;
var guess= [ ];

var reset = function(){
    attempt = 10;
    guess = [];
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeypress = function(event) {

    var playerGuess= event.key;
    guess.push(playerGuess);

    
    console.log(playerGuess);


      if (playerGuess === randomLetter) {
          win++;
          alert("YOU WIN");
          reset();
      }
      else {
          attempt--;
      }

      if (attempt === 0) {
          lose++;
          alert("YOU LOSE")
          reset();
          
      }

    

      document.getElementById("wins").innerHTML = "Winner: " + win;
      document.getElementById("loses").innerHTML = "Loser: " + lose;
      document.getElementById("attempts").innerHTML = "Attempts left: " + attempt;
      document.getElementById("guesses").innerHTML = "Letters guessed: [ " + guess + " ]";

    
};