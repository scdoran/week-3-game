
// Word choices.
var words = ["diane", "coffee", "lodge", "truman", "laura"];

// Object containing the game's properties for wins, losses and guesses left.
	var game = {
		wins: 0,
		losses: 0,
		guessesLeft: 7,
		letterCounter: 0,
	}

//This is the empty array that will hold any guessed letters. 
	var guessedLetters = [];

// Variable for the words chosen will be chosen randomly out of the array above.
	var computerWord = words[Math.floor(Math.random() * words.length)];


// This variable was set so that each character within the string can be split into individual characters in an array. 
	var wordSplit = computerWord.split("");
	console.log(wordSplit);

function newWord() {
// The for loop below will make the letters from the chosen word turn into dashes. 
	for (var i = 0; i < computerWord.length; i++) {

		// A span was created within the HTML representing each chracter in the random word chosen.
			var dashes = document.createElement("span");

		// Within that span, an id was created and given the value of each characher from the chosen word. 
			dashes.setAttribute("id", "letter-number" + i);

		// These characters were turned into an index of an array by being labeled as "i".
			dashes.textContent = "_";

		// Each letter is replaced in the HTML with dashes, and lastly, appended to the HTML.
			console.log(document.getElementById("hangmanWord").appendChild(dashes));
	}
}

// newWord();

// This function will check if a letter has already been guessed.

	function isInArray(a) {
    for (var i = 0;i < guessedLetters.length; i++) {
        if (guessedLetters[i] === a) {
          return true;
        }
    }
    	return false;
	}

// This is the code for the reset button. *This is still in need of finishing.

	document.getElementById("restart").onclick = document.getElementById("picture").innerHTML= "<img src='assets/images/twinpeaks.png'>";

// All of the stuff below will happen when a key is released!
	document.onkeyup = function (event) {

		//This will make the userGuess letters the event key and lower case. 
		var userGuess = event.key.toLowerCase();

		// This loop will run when a user is trying to guess the hangman word. The word chosen was split into strings, so this became an array.
		// Because the split word turned into an array, we use the "i" to target the index of each letter within the split word array.
		// When the letter is guessed correctly, the user's guess is written within the split word array. 
		for (var i = 0; i < wordSplit.length; i++) {

			if (wordSplit[i] === userGuess) {
				document.getElementById("letter-number" + i).innerHTML = wordSplit[i];
				console.log(userGuess);
				game.letterCounter++;
			}
		}

		// If the letters guessed do not match the chosen word...
			if (userGuess !== wordSplit[i]) {
				if (isInArray(userGuess)) {
          			console.log("You already guessed that letter!");
       			}
				game.guessesLeft--;
				guessedLetters.push(userGuess);
				document.getElementById("guesses").textContent += event.key + " ";
			}

			// If you guess all of the letters from the chosen word...
			if (game.letterCounter === wordSplit.length) {
				alert("You win!");

			// Guesses left are reset, computer chooses a new word, and the guessedLetters array becomes empty again. 
				game.guessesLeft = 7;
				computerWord = newWord();
				guessedLetters = [];
				game.wins++;
				document.getElementById("hangmanWord").innerHTML = newWord();			
				document.getElementById("guesses").textContent = " ";
			}

	// If the user runs out of guesses the following will happen...

		if (game.guessesLeft === 0) {
			// Audio of the "Fire Walk With Me" poem will play.
			var audio = new Audio('assets/sound/fwwmpoem.wav');
			audio.play();

			// Guesses are cleared.
			document.getElementById("guesses").textContent=" ";

			// The word that was chosen is revealed.
			alert("You lost. The word was " + computerWord);

			// Bob gif is going to replace the Twin Peaks picture.
			document.getElementById("picture").innerHTML= "<img src='assets/images/bob.gif'>";

			//This will generate a new word. 
			document.getElementById("hangmanWord").innerHTML = newWord();			
			
			// Guesses left are reset, computer chooses a new word, and the guessedLetters array becomes empty again. 
			game.guessesLeft = 7;
			guessedLetters = [];
			game.losses++;
		}

		document.getElementById("wins").innerHTML = game.wins;
		document.getElementById("losses").innerHTML = game.losses;
		document.getElementById("guesses-left").innerHTML = game.guessesLeft;
	}
