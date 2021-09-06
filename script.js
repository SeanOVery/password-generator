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
  window.alert("Please answer these questions to we can create a password for you!");
  let passLowerCase = window.prompt("Would you like lower case letters in your password?", "Please type Yes or No").toLowerCase();
    if ((passLowerCase !== "yes") && (passLowerCase !== "no")) {
      console.log(passLowerCase)
      return window.alert("Please restart and enter Yes or No in the prompt!");
    }
  let passUpperCase = window.prompt("Would you like upper case letters in your password?", "Please type Yes or No").toLowerCase();
    if ((passUpperCase !== "yes") && (passUpperCase !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    }
  let passNumbers = window.prompt("Would you like numbers in your password?", "Please type Yes or No").toLowerCase();
    if ((passNumbers !== "yes") && (passNumbers !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    }
  let passSpecialChars = window.prompt("Would you like special characters(#, $, etc) in your password?", "Please type Yes or No").toLowerCase();
    if ((passSpecialChars !== "yes") && (passSpecialChars !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    }
  let passLength = window.prompt("Please set the length of the password you would like between 8-128 characters", "Please type a number between 8 and 128");
    if (passLength < 8 || passLength > 128){
      return window.alert("Please Restart and enter a number between 8 and 128!");
    }
  
  function generatePassword() {

  }
  
    passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
