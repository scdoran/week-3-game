
// Word choices.
var words = ["diane", "coffee", "lodge", "truman", "laura"];

// Beginning of the game.
var game = {
	wins: 0,
	losses: 0,
	guessesLeft: 10,

	gameBegin: function() {
		// Not sure whether or not to put the dash code here or somewhere else (see below in the onkeyup function() code.)
		function wordChoice() {
		return words[Math.floor(Math.random() * words.length)];
		this.computerWord = this.computerWord.toLowerCase();
		}
		// Variable for the words chosen will be based off the function above.
		var computerWord = wordChoice();

		var guessedLetters = [];

		function isInArray(a) {
    	for (var i = 0;i < guessedLetters.length; i++) {
        	if (guessedLetters[i] === a) {
          	return true;
        	}
    	}
    	return false;
		}

		document.getElementById("hangman-words").innerHTML = this.computerWord;
		document.getElementById("guesses-left").innerHTML = game.guessesLeft;	
	}	

}

// All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {

		var userGuess = event.key;

// Still figuring out the conditionals here, so not much has changed from the psychic game.
		if (userGuess === computerWord) {
			document.getElementById("guesses").textContent = " ";
			game.guessesLeft = 10;
			var computerWord = wordChoice();
			guessedLetters = [];
		}

		else if (userGuess !== computerWord) {
			if (this.isInArray(userGuess)) {
          		alert("You already guessed that letter!");
       		}

       		else{
				game.guessesLeft--;
				guessedLetters.push(userGuess);
				document.getElementById("guesses").textContent += event.key + " ";
			}
		}
	
	// If the user runs out of guesses the following will happen...
		if (game.guessesLeft === 0) {
			game.losses++;
			document.getElementById("guesses").textContent=" ";
			console.log("You lost. The word was " + this.computerWord);
			document.getElementById("picture").src="../images/bob.gif"
// Audio code that I found.
			var audio = new Audio('../sound/fwwmpoem.wav');
			audio.play();
			// Guesses left are reset, computer chooses a new word, and the guessedLetters array becomes empty again. 
			game.guessesLeft = 10;
			var computerWord = wordChoice();
			guessedLetters = [];
		}
	}

