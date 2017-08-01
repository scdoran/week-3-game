// Word choices.
var words = ["diane", "pie", "lodge", "truman", "dale", "owls"];
// Object containing the game's properties for wins, losses and guesses left.
	var game = {
		wins: 0,
		losses: 0,
		guessesLeft: 7,
		letterCounter: 0,
		gameOver: false,
		guessedLetters: [],
		computerWord: "",
		// Variable for the words chosen will be chosen randomly out of the array above.
		newWord: function() {
			return words[Math.floor(Math.random() * words.length)];
		},
		isInArray: function(array, a) {

			for (var i = 0; i < array.length; i++) {
				if (array[i] === a) {
		          return true;
		        } 
			}
		}
	}

// This function starts a new game.
function newGame() {

	game.guessesLeft = 7;
	game.letterCounter = 0;
	game.guessedLetters = [];
	game.gameOver = false;
	game.computerWord = game.newWord();
	console.log("The new word is " + game.computerWord);

//Previous word or dashes will be removed, guesses are cleared and picture reset.
	document.getElementById("hangmanWord").textContent=" ";  
	document.getElementById("guesses").textContent=" ";
	document.getElementById("picture").innerHTML= "<img src='assets/images/twinpeaks.png'>";

// The for loop below will make the letters from the chosen word turn into dashes. 
// A span was created within the HTML representing each character in the random word chosen.
// Within that span, an id was created and given the value of each characher from the chosen word. 
// These characters were turned into an index of an array by being labeled as "i".
// Each letter is replaced in the HTML with dashes, and lastly, appended to the HTML.
	for (var i = 0; i < game.computerWord.length; i++) {
		var dashes = document.createElement("span");
		dashes.setAttribute("id", i);
		dashes.textContent = "_";
		document.getElementById("hangmanWord").appendChild(dashes);
	}

	// All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {
		//This will make the userGuess letters the event key and lower case. 
		var userGuess = event.key.toLowerCase();
		var matchingSpans = game.isInArray(game.computerWord, userGuess);
		var duplicate = game.isInArray(game.guessedLetters, userGuess);
		var alphabet = /^[a-z]/;

		if (userGuess.match(alphabet)) {
			if (matchingSpans === true) {
				var letter = game.computerWord.indexOf(userGuess);
				document.getElementById(letter).textContent = game.computerWord[letter];
				game.letterCounter++;
			} else {
				document.getElementById("guesses").textContent += userGuess + ", ";
				game.guessedLetters.push(userGuess);
				game.guessesLeft--;
			}

		// If the user already guessed a letter.
			if (duplicate === true) {
      			alert("You already guessed that letter!");
   			}

   		// If you guess all of the letters from the chosen word...
			if (game.letterCounter === game.computerWord.length) {
				alert("You win!");
				game.wins++;
				game.gameOver = true;
				document.getElementById("guesses").textContent = " ";
				newGame();
			}
	 	// If the user runs out of guesses the following will happen...
		// Audio of the "Fire Walk With Me" poem will play.
		// The word that was chosen is revealed.
		// Bob gif is going to replace the Twin Peaks picture.
			if (game.guessesLeft === 0) {
				var audio = new Audio('assets/sound/fwwmpoem.wav');
				audio.play();
				alert("You lost. The word was " + game.computerWord);
				document.getElementById("picture").innerHTML= "<img src='assets/images/bob.gif'>";
				game.gameOver = true;
				game.losses++;
			}
		} else {
			alert("Please choose a letter!");
		}
		document.getElementById("wins").innerHTML = game.wins;
		document.getElementById("losses").innerHTML = game.losses;
		document.getElementById("guesses-left").innerHTML = game.guessesLeft;
	}
}

newGame();

// This is the code for the reset button.
	document.getElementById("restart").onclick = function() {
		// Guesses left are reset, computer chooses a new word and the guessedLetters array becomes empty again. 
		game.guessesLeft = 7;
		game.letterCounter = 0;
		game.guessedLetters = [];
		game.gameOver = false;
		document.getElementById("guesses-left").innerHTML = game.guessesLeft;
		newGame()
	};	