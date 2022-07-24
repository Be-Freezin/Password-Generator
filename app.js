// Character Arrays
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
  

];
const numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];
// Character Arrays Joined
const lettersSymbols = letters.concat(symbols);

const lettersNumbers = letters.concat(numbers);
const allCharacters = letters.concat(numbers, symbols)

// DOM Elements
const passwordOneEl = document.getElementById("passwordEl-1");
const passwordTwoEl = document.getElementById("passwordEl-2");
const passwordThreeEl = document.getElementById("passwordEl-3");
const passwordFourEl = document.getElementById("passwordEl-4");

const symbolsEl = document.getElementById("symbolsEl");
const numbersEl = document.getElementById("numberEl");

const generateBtn = document.getElementById("generateBtn");



generateBtn.addEventListener("click", function randomGenerate() {
  // Reset The text field
  passwordOneEl.value = "";
  passwordTwoEl.value = "";
  passwordThreeEl.value = "";
  passwordFourEl.value = "";

  // Password 1 
  // Using a for loop to determined how  javascript will "count" out our generated password. In this case a hard coded number of 15 characters.
for (let i = 0; i < 15; i++) {
    
  // Using an if statement to implement some logic for our passwords and teh toggle switches. Letting us choose from only letters, letters + symbols, letters + numbers, or all three.
    if (numbersEl.checked === true && symbolsEl.checked === true){
      let randomLetterIndexOne = Math.floor(Math.random() * (allCharacters.length - 1)) + 1;
     
      passwordOneEl.value += allCharacters[randomLetterIndexOne];
      
    } else if(numbersEl.checked === false && symbolsEl.checked === false){
      let randomLetterIndexOne = Math.floor(Math.random() * (letters.length - 1)) + 1;
      passwordOneEl.value += letters[randomLetterIndexOne];
    }else if (numbersEl.checked === true || symbolsEl.checked === false){
      let randomLetterIndexOne = Math.floor(Math.random() * (lettersNumbers.length - 1)) + 1;
      
      passwordOneEl.value += lettersNumbers[randomLetterIndexOne];
      
    } else if( symbolsEl.checked === true || numbersEl.checked === false){
      let randomLetterIndexOne = Math.floor(Math.random() * (lettersSymbols.length - 1)) + 1;
      
      passwordOneEl.value += lettersSymbols[randomLetterIndexOne];
    } else;
}
  // Password 2 
for (let i = 0; i < 15; i++) {
  // if symbols is checked, add symbols, if not checked just letters.

  if (numbersEl.checked === true && symbolsEl.checked === true){
    let randomLetterIndexOne = Math.floor(Math.random() * (allCharacters.length - 1)) + 1;
   
    passwordTwoEl.value += allCharacters[randomLetterIndexOne];
    
  } else if(numbersEl.checked === false && symbolsEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (letters.length - 1)) + 1;
    passwordTwoEl.value += letters[randomLetterIndexOne];
  }else if (numbersEl.checked === true || symbolsEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (lettersNumbers.length - 1)) + 1;
    
    passwordTwoEl.value += lettersNumbers[randomLetterIndexOne];
    
  } else if( symbolsEl.checked === true || numbersEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (lettersSymbols.length - 1)) + 1;
    
    passwordTwoEl.value += lettersSymbols[randomLetterIndexOne];
  } else;
}

  // Password 3
for (let i = 0; i < 15; i++) {
  // if symbols is checked, add symbols, if not checked just letters.

  if (numbersEl.checked === true && symbolsEl.checked === true){
    let randomLetterIndexOne = Math.floor(Math.random() * (allCharacters.length - 1)) + 1;
   
    passwordThreeEl.value += allCharacters[randomLetterIndexOne];
    
  } else if(numbersEl.checked === false && symbolsEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (letters.length - 1)) + 1;
    passwordThreeEl.value += letters[randomLetterIndexOne];
  }else if (numbersEl.checked === true || symbolsEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (lettersNumbers.length - 1)) + 1;
    
    passwordThreeEl.value += lettersNumbers[randomLetterIndexOne];
    
  } else if( symbolsEl.checked === true || numbersEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (lettersSymbols.length - 1)) + 1;
    
    passwordThreeEl.value += lettersSymbols[randomLetterIndexOne];
  } else;
}

  // Password 4
for (let i = 0; i < 15; i++) {
  // if symbols is checked, add symbols, if not checked just letters.

  if (numbersEl.checked === true && symbolsEl.checked === true){
    let randomLetterIndexOne = Math.floor(Math.random() * (allCharacters.length - 1)) + 1;
   
    passwordFourEl.value += allCharacters[randomLetterIndexOne];
    
  } else if(numbersEl.checked === false && symbolsEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (letters.length - 1)) + 1;
    passwordFourEl.value += letters[randomLetterIndexOne];
  }else if (numbersEl.checked === true || symbolsEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (lettersNumbers.length - 1)) + 1;
    
    passwordFourEl.value += lettersNumbers[randomLetterIndexOne];
    
  } else if( symbolsEl.checked === true || numbersEl.checked === false){
    let randomLetterIndexOne = Math.floor(Math.random() * (lettersSymbols.length - 1)) + 1;
    
    passwordFourEl.value += lettersSymbols[randomLetterIndexOne];
  } else;
}

});
