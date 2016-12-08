// Beginning of the game.

// Object containing the game's properties for wins, losses and guesses left.
	var game = {
		wins: 0,
		losses: 0,
		guessesLeft: 7,
	}

// Word choices.
var words = ["diane", "coffee", "lodge", "truman", "laura"];

// This will make the words turn into dashes.


// Not sure whether or not to put the dash code here or somewhere else (see below in the onkeyup function() code.)
	function wordChoice() {
		return words[Math.floor(Math.random() * words.length)];
	}
// Variable for the words chosen will be based off the function above.
	var computerWord = wordChoice().replace(/[A-Z]/g, "-");	
	console.log(computerWord);

//This is the empty array that will hold any guessed letters. 
	var guessedLetters = [];

// // All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {

		var userGuess = event.key;

		for (var i = 0; i < guessedLetters.length; i++) {
			guessedLetters.push(userGuess);
		}
			console.log(guessedLetters);

		document.getElementById("guesses").textContent += event.key + " ";
	}

// 		if (userGuess === indexOf(searchString: string, position?: int)) {
// 			document.getElementById("guesses").textContent = " ";
// 			game.guessesLeft = 7;
// 			var computerWord = wordChoice();
// 			guessedLetters = [];
// 		}

// 		else if (userGuess !== computerWord) {
// 			if (this.isInArray(userGuess)) {
//        		}

//        		else{
// 				game.guessesLeft--;
// 				guessedLetters.push(userGuess);
// 				document.getElementById("guesses").textContent += event.key + " ";
// 			}
// 		}
	
// 	// If the user runs out of guesses the following will happen...
// 		if (game.guessesLeft === 0) {
// 			game.losses++;
// 			document.getElementById("guesses").textContent=" ";
// 			console.log("You lost. The word was " + this.computerWord);
// 			document.getElementById("picture").src="../images/bob.gif"
// // Audio code that I found.
// 			var audio = new Audio('../sound/fwwmpoem.wav');
// 			audio.play();
// 			// Guesses left are reset, computer chooses a new word, and the guessedLetters array becomes empty again. 
// 			game.guessesLeft = 7;
// 			var computerWord = wordChoice();
// 			guessedLetters = [];
// 		}
// 	}

