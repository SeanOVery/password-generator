// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = lowerLetters.map(letter => letter.toUpperCase());
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "@", "*"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  window.confirm("Please answer these questions to we can create a password for you!");
  let passLowerCase = window.prompt("Would you like lower case letters in your password?", "Please type Yes or No");
  let passUpperCase = window.prompt("Would you like upper case letters in your password?", "Please type Yes or No");
  let passNumbers = window.prompt("Would you like numbers in your password?", "Please type Yes or No");
  let passSpecialChars = window.prompt("Would you like special characters(#, $, etc) in your password?", "Please type Yes or No");
  let passLength = window.prompt("Please set the length of the password you would like between 8-128 characters", "Please type a number between 8 and 128");
  
  function generatePassword() {

    }
  
    passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
