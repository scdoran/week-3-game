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

	wordChoice ();
// Variable for the words chosen will be based off the function above.
// This will also make the words turn into dashes.
	var computerWord = wordChoice();

	for (var i = 0; i < computerWord.length; i++) {
			var dashes = document.createElement("span");
			dashes.setAttribute("class", computerWord.charAt(i));
			dashes.textContent = "-";
			console.log(document.getElementById("hangmanWord").appendChild(dashes));
	}
// var x = 
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

// This is an empty array that will hold all correct letters for the computerWord characters.
	var correct = [];

	// for (var i = 0; i < guessedLetters.length; i++) {
	// 		guessedLetters.push(userGuess);
	// 	}

	// 	for (var i = 0; i < correct.length; i++) {
	// 		correct.push(userGuess);
	// 		// document.getElementsByTagName("span").classname = "computerWord.charAt(i)";
	// 	}

// // All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {

		var userGuess = event.key;

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess ===  "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

		if (userGuess === this.dashes) {
			correct.push(userGuess);
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
			console.log(guessedLetters);
			console.log(correct);
		
		// document.getElementById("word").innerHTML = computerWord;
		// document.getElementById("guesses").textContent += event.key + " ";
	}
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

