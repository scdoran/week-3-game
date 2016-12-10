// Beginning of the game.

// Word choices.
var words = ["diane", "coffee", "lodge", "truman", "laura"];

// Object containing the game's properties for wins, losses and guesses left.
	var game = {
		wins: 0,
		losses: 0,
		guessesLeft: 7,
	}

// This is the function that will choose a random word out of the array.
	function wordChoice() {
		return words[Math.floor(Math.random() * words.length)];
	}
// Variable for the words chosen will be based off the function above.
// This will also make the words turn into dashes.
	var computerWord = wordChoice();
	var wordSplit = computerWord.split("");
	console.log(wordSplit);

	for (var i = 0; i < computerWord.length; i++) {
			var dashes = document.createElement("span");
			dashes.setAttribute("id", "letter-number" + i);
			dashes.textContent = "-";
			console.log(document.getElementById("hangmanWord").appendChild(dashes));
	}
//This is the empty array that will hold any guessed letters. 
	var guessedLetters = [];

// This function is supposed to keep track of whether or not the letters typed have already been guessed.
	function isInArray(a) {
    for (var i = 0;i < guessedLetters.length; i++) {
        if (guessedLetters[i] === a) {
          return true;
        }
    }
    return false;
	}

// // All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {

		//This will make the userGuess letters the event key and lower case. 
		var userGuess = (event.key);
		
		// var curElem = document.getElementsByClassName(userGuess);

		for (var i = 0; i < wordSplit.length; i++) {
			if (userGuess === wordSplit[i]) {
				document.getElementById("letter-number" + i).innerHTML = wordSplit[i];
			}
			
		}

		if (userGuess === this.dashes) {
			document.getElementById("guesses").textContent = " ";
			game.guessesLeft = 7;
			var computerWord = wordChoice();
			guessedLetters = [];
		}
				

		else {
			game.guessesLeft--;
			guessedLetters.push(userGuess);
			document.getElementById("guesses").textContent += event.key + " ";
			}
		// document.getElementById("word").innerHTML = computerWord;
		// document.getElementById("guesses").textContent += event.key + " ";
}
	
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

