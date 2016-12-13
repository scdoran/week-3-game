
// Word choices.
var words = ["diane", "coffee", "lodge", "truman", "laura"];

// Object containing the game's properties for wins, losses and guesses left.
	var game = {
		wins: 0,
		losses: 0,
		guessesLeft: 7,
		letterCounter: 0,
		gameOver: false,
	}

//This is the empty array that will hold any guessed letters. 
	var guessedLetters = [];

	var wordSplit;

	var computerWord;

// This function starts a new game.
function newGame() {

	// Guesses left are reset, computer chooses a new word and the guessedLetters array becomes empty again. 
	game.guessesLeft = 7;
	game.letterCounter = 0;
	guessedLetters = [];
	game.gameOver = false;
	computerWord = newWord();

	function newWord() {
// Variable for the words chosen will be chosen randomly out of the array above.
	return words[Math.floor(Math.random() * words.length)];
	}

//Previous word or dashes will be removed.
	document.getElementById("hangmanWord").textContent=" ";  

// Guesses are cleared.
	document.getElementById("guesses").textContent=" ";

// Picture is reset.
	document.getElementById("picture").innerHTML= "<img src='assets/images/twinpeaks.png'>";

// This variable was set so that each character within the string can be split into individual characters in an array. 
	wordSplit = computerWord.split("");
	console.log(wordSplit);

// The for loop below will make the letters from the chosen word turn into dashes. 
	for (var i = 0; i < computerWord.length; i++) {

		// A span was created within the HTML representing each chracter in the random word chosen.
			var dashes = document.createElement("span");

		// Within that span, an id was created and given the value of each characher from the chosen word. 
			dashes.setAttribute("id", "letter-number" + i);

		// These characters were turned into an index of an array by being labeled as "i".
			dashes.textContent = "_";

		// Each letter is replaced in the HTML with dashes, and lastly, appended to the HTML.
			document.getElementById("hangmanWord").appendChild(dashes);
	}
}

newGame();
// This function will check if a letter has already been guessed.

	function isInArray(a) {
    for (var i = 0;i < guessedLetters.length; i++) {
        if (guessedLetters[i] === a) {
          return true;
        }
    }
    	return false;
	}

	// This function will check if a letter is a part of the chosen word.
	function isIncorrect(b) {
		var check = [], i;
    	for (var i = 0;i < wordSplit.length; i++) {
        	if (wordSplit[i] !== b) {
        		check.push(i)
   				guessedLetters.push(i);
			}
    	}
    	// return check;
    	document.getElementById("guesses").textContent += event.key + " ";
    	game.guessesLeft--;
	}

// This function will push the correct letter to an array and will therefore, push it to the page.

		function getAllIndexes(val) {
   		var checker = [], i;
// This loop will run when a user is trying to guess the hangman word. The word chosen was split into strings, so this became an array.
   		for (i = 0; i < wordSplit.length; i++)  {
       		if (wordSplit[i] === val) {
       			checker.push(i);
       			guessedLetters.push(i);
// Because the split word turned into an array, we use the "i" to target the index of each letter within the split word array.
// When the letter is guessed correctly, the user's guess is written within the split word array.
				document.getElementById("letter-number" + i).innerHTML = wordSplit[i];
				game.letterCounter++;
   			} 
   		}
   		return checker;

		}

// This is the code for the reset button. *This is still in need of finishing.

	document.getElementById("restart").onclick = function() {newGame()};

// All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {
		
			//This will make the userGuess letters the event key and lower case. 
			var userGuess = event.key.toLowerCase();

			var matchingSpans = getAllIndexes(userGuess); 

			var incorrectLetters = isIncorrect(userGuess);

			// These are the possible user guesses.
			if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
 

			// If you guess all of the letters from the chosen word...
				if (game.letterCounter === wordSplit.length) {
					alert("You win!");
					game.wins++;
					game.gameOver = true;
					document.getElementById("guesses").textContent = " ";
				}

				// If the user already guessed a letter.
				if (isInArray(userGuess)) {
          			console.log("You already guessed that letter!");
       			}

				// If the user runs out of guesses the following will happen...

				if (game.guessesLeft === 0) {
					// Audio of the "Fire Walk With Me" poem will play.
					var audio = new Audio('assets/sound/fwwmpoem.wav');
					audio.play();

					// The word that was chosen is revealed.
					alert("You lost. The word was " + computerWord);

					// Bob gif is going to replace the Twin Peaks picture.
					document.getElementById("picture").innerHTML= "<img src='assets/images/bob.gif'>";
					
					game.gameOver = true;
					game.losses++;
				}
			}

	document.getElementById("wins").innerHTML = game.wins;
	document.getElementById("losses").innerHTML = game.losses;
	document.getElementById("guesses-left").innerHTML = game.guessesLeft;

	}
	
