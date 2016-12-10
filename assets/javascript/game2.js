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

	for (var i = 0; i < computerWord.length; i++) {
		var dashes = document.createElement("span");
		dashes.setAttribute("class", computerWord.charAt(i));
		dashes.textContent= "_";
		var dom = document.getElementById("word");
		dom.appendChild(dashes);
	}

//This is the empty array that will hold any guessed letters. 
	var guessedLetters = [];

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

		var userGuess = event.key;

		for (var i = 0; i < guessedLetters.length; i++) {
			guessedLetters.push(userGuess);
		}
			console.log(guessedLetters);
		
		// document.getElementById("word").innerHTML = computerWord;
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



