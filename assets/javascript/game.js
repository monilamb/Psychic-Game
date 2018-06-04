
    
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"
                            , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w"
                                ,"x", "y", "z"];

    var userGuesses = [];
    var wins = 0;
    var losses = 0;
    var counter = 9;
    // This function will return a string so that its easier to print out
    //the user guesses on the page
   function writeGuesses(){
       
       var guessString = " ";
       if (userGuesses.length!= 0)
       {
       for (var i = 0; i < userGuesses.length; i++)
       {
           guessString = guessString + userGuesses[i] + ",";
       }
        }
       else{
           guessString= " ";
       }
       return guessString;
        }
        

        //this function writes the score everytime it changes
    function writescore(){
    var html =
    "<h1>The Psychic Game</h1><br>Guess what letter im thinking of<br>" +
    
     "<p>wins: " + wins + "</p>" +
     "<p>Losses: " + losses + "</p>" +
     "<p>Guess Left: " + counter + "</p>" +
     "<p>Your Guesses so far:" + writeGuesses() + "</p>";
  document.querySelector("#game").innerHTML = html;
   }
    
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      //if our counter variable is greater than 1 it will perform the following if/else
      if(counter > 1){
          //if the user guesses the same as the computer the wins score goes up
          //and the guesses reset
      if (userGuess == computerGuess) {
          wins++;
          counter=9;
          userGuesses = [];
      }
      else{
        //if the user didnt guess the same as the computer their guesses are substracted by one
        //and the guess is pushed into the userGuesses array
          counter--;
          userGuesses.push(event.key);
          
      }
             writescore();
    }
    //the else here is to treat the game differently when it is the user's last try
    else {
        //if they guess on their last try they add up a win
        if (userGuess == computerGuess) {
            wins++;
            counter=9;
            userGuesses = [];
        }
        //if they guess incorrectly they add up a loss
        else{
            counter--;
            counter = 9;
            losses++;
             userGuesses=[];
            
        }

            writescore();
    }
       

      
    };
