//Data
var wordsByCategory = {
  Animals: [
    "lion",
    "tiger",
    "zebra",
    "horse",
    "sheep",
    "goose",
    "eagle",
    "shark",
    "whale",
    "panda",
    "camel",
    "koala",
    "otter",
    "snake",
    "spider",
    "rabbit",
    "monkey",
    "donkey",
    "falcon",
    "lizard",
  ],

  Jobs: [
    "actor",
    "pilot",
    "nurse",
    "guard",
    "baker",
    "driver",
    "doctor",
    "farmer",
    "tailor",
    "clerk",
    "lawyer",
    "editor",
    "painter",
    "chef",
    "seller",
    "writer",
    "artist",
    "barber",
    "miner",
    "porter",
  ],

  Personal: [
    "belt",
    "wallet",
    "phone",
    "watch",
    "ring",
    "chain",
    "brush",
    "comb",
    "spray",
    "cream",
    "lotion",
    "towel",
    "razor",
    "dryer",
    "cable",
    "mouse",
    "glass",
    "shaver",
    "purse",
    "badge",
    "token",
    "flash",
    "drive",
    "cover",
  ],

  Transport: [
    "train",
    "truck",
    "plane",
    "ship",
    "metro",
    "taxi",
    "car",
    "bus",
    "cycle",
    "scoot",
    "ferry",
    "tram",
    "jeep",
    "canoe",
    "van",
    "boat",
    "rocket",
    "trolley",
    "subway",
    "bike",
  ],

  Food: [
    "apple",
    "bread",
    "cheese",
    "pizza",
    "pasta",
    "salad",
    "burger",
    "steak",
    "grape",
    "lemon",
    "orange",
    "peach",
    "tomato",
    "potato",
    "onion",
    "carrot",
    "cookie",
    "donut",
    "butter",
    "chili",
  ],

  Clothes: [
    "shirt",
    "pants",
    "dress",
    "jacket",
    "coat",
    "jeans",
    "socks",
    "shoes",
    "boots",
    "scarf",
    "skirt",
    "blouse",
    "sweater",
    "hoodie",
    "cap",
    "belt",
    "gloves",
    "shorts",
    "vest",
    "tshirt",
  ],
};

var hangmanImgList = [
  "../assets/hangman-graphic/hangman0.jpg",
  "../assets/hangman-graphic/hangman1.jpg",
  "../assets/hangman-graphic/hangman2.jpg",
  "../assets/hangman-graphic/hangman3.jpg",
  "../assets/hangman-graphic/hangman4.jpg",
  "../assets/hangman-graphic/hangman5.jpg",
  "../assets/hangman-graphic/hangman6.jpg",
  "../assets/hangman-graphic/hangman7.jpg",
];

/******************************************************************************************/

//Functions
function randomWord(category) {
  var index = Math.floor(Math.random() * wordsByCategory[category].length);
  return wordsByCategory[category][index];
}

function displayDashes(length) {
  var dashes = "";
  for (var i = 0; i < length; i++) {
    dashes += "_";
  }
  return dashes;
}

function wordSearch(word, letter, partialWord) {
  var searchedWord = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      searchedWord += letter;
    } else {
      if (partialWord[i] == "_") searchedWord += "_";
      else searchedWord += partialWord[i];
    }
  }

  return searchedWord.length ? searchedWord : false;
}

function gameWon() {
  wordPrev.classList.add("correct");
  setTimeout(function () {
    modalImage.setAttribute("src", "./assets/modal pics/win.jpeg");
    gameResult.textContent = "You Won";
    gameResult.classList.add("correct");
    modalWord.textContent = word;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }, 1500);
}

function gameLost() {
  wordPrev.classList.add("wrong");
  setTimeout(function () {
    modalImage.setAttribute("src", "./assets/modal pics/lost.png");
    gameResult.textContent = "You Lost";
    gameResult.classList.add("wrong");
    modalWord.textContent = word;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }, 1500);
}
/******************************************************************************************/

//DOM Elements
var wordPrev = document.querySelector(".word-prev");
var lettersGrid = document.querySelector(".letters-grid");
var vowelsRow = document.querySelector(".vowels-row");
var hangImage = document.querySelector(".hangman-image");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var modalImage = document.querySelector(".modal-image");
var gameResult = document.querySelector(".game-result");
var modalWord = document.querySelector(".modal-word");

//Variables
var category;
var word;
var partialWord;
var strikes;

/******************************************************************************************/

//Initializing the game
category = sessionStorage.getItem("category");
word = randomWord(category);
wordPrev.textContent = displayDashes(word.length);
partialWord = displayDashes(word.length);
strikes = 0;

/*****************************************************************************************/

//Letters
lettersGrid.addEventListener("click", function (event) {
  var selectedLetter = event.target.closest(".letter-button");
  if (!selectedLetter) return;
  selectedLetter.classList.add("removed");
  var searchedWord = wordSearch(
    word,
    selectedLetter.textContent.toLowerCase(),
    partialWord,
  );
  if (searchedWord === partialWord) {
    strikes++;
    hangImage.setAttribute("src", hangmanImgList[strikes - 1]);
    if (strikes == 8) {
      gameLost();
    }
  } else {
    wordPrev.textContent = searchedWord;
    partialWord = searchedWord;
    if (partialWord === word) {
      gameWon();
    }
  }
});

//Vowels: strikes are not counted
vowelsRow.addEventListener("click", function (event) {
  var selectedLetter = event.target.closest(".vowel-button");
  if (!selectedLetter) return;
  selectedLetter.classList.add("removed");
  var searchedWord = wordSearch(
    word,
    selectedLetter.textContent.toLowerCase(),
    partialWord,
  );
  if (searchedWord === partialWord) {
  } else {
    wordPrev.textContent = searchedWord;
    partialWord = searchedWord;
    if (partialWord === word) {
      gameWon();
    }
  }
});
