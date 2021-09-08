var generateBtn = document.querySelector("#generate"),
    lowerLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperLettersArray = lowerLettersArray.map(letter => letter.toUpperCase()),
    numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialCharsArray = ["!", "#", "$", "%", "&", "@", "*"],
    charArray = [];
// variable and array setup

function writePassword() {
  var password = '',
      passwordText = document.querySelector("#password");

  window.alert("Please answer these questions so we can create a password for you! You must select at least 1 type of character to use in the password.");

  var passLowerCase = window.prompt("Would you like lower case letters in your password?", "Please type Yes or No").toLowerCase();
    if ((passLowerCase !== "yes") && (passLowerCase !== "no")) {
      console.log(passLowerCase)
      return window.alert("Please restart and enter Yes or No in the prompt!");
    }

  var passUpperCase = window.prompt("Would you like upper case letters in your password?", "Please type Yes or No").toLowerCase();
    if ((passUpperCase !== "yes") && (passUpperCase !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    }

  var passNumbers = window.prompt("Would you like numbers in your password?", "Please type Yes or No").toLowerCase();
    if ((passNumbers !== "yes") && (passNumbers !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    }
  
  var passSpecialChars = window.prompt("Would you like special characters(#, $, etc) in your password?", "Please type Yes or No").toLowerCase();
    if ((passLowerCase === "no") && (passUpperCase === "no") && (passNumbers === "no") &&  (passSpecialChars === "no")) {
      return window.alert("Please select at least 1 type of character to use in the password!");
    } else if ((passSpecialChars !== "yes") && (passSpecialChars !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    } 

  var passLength = window.prompt("Please set the length of the password you would like between 8-128 characters", "Please type a number between 8 and 128");
    if ((passLength < 8 || passLength > 128) && typeof passLength === "number"){
      return window.alert("Please Restart and enter a number between 8 and 128!");
    }
    // alerts and prompts dealing with the user input that sets up the password criteria including error handling of improper inputs

  function charArrayFunc() {
    
    if (passLowerCase === "yes" && passUpperCase === "no" && passNumbers === "no" && passSpecialChars === "no") {
      return charArray = lowerLettersArray;
    } else if (passLowerCase === "no" && passUpperCase === "yes" && passNumbers === "no" && passSpecialChars === "no") {
      return charArray = upperLettersArray;
    } else if (passLowerCase === "no" && passUpperCase === "no" && passNumbers === "yes" && passSpecialChars === "no") {
      return charArray = numbersArray;
    } else if (passLowerCase === "no" && passUpperCase === "no" && passNumbers === "no" && passSpecialChars === "yes") {
      return charArray = specialCharsArray;
    } // handles cases where user selects 1 character type
      
      else if (passLowerCase === "yes" && passUpperCase === "yes" && passNumbers === "no" && passSpecialChars === "no") {
      return charArray = lowerLettersArray.concat(upperLettersArray);
    } else if (passLowerCase === "yes" && passUpperCase === "no" && passNumbers === "yes" && passSpecialChars === "no") {
      return charArray = lowerLettersArray.concat(numbersArray);
    } else if (passLowerCase === "yes" && passUpperCase === "no" && passNumbers === "no" && passSpecialChars === "yes") {
      return charArray = lowerLettersArray.concat(specialCharsArray);
    } else if (passLowerCase === "no" && passUpperCase === "yes" && passNumbers === "yes" && passSpecialChars === "no") {
      return charArray = upperLettersArray.concat(numbersArray);
    } else if (passLowerCase === "no" && passUpperCase === "yes" && passNumbers === "no" && passSpecialChars === "yes") {
      return charArray = upperLettersArray.concat(specialCharsArray);
    } else if (passLowerCase === "no" && passUpperCase === "no" && passNumbers === "yes" && passSpecialChars === "yes") {
      return charArray = numbersArray.concat(specialCharsArray);
    } // handles cases where user selects 2 character types
      
      else if (passLowerCase === "yes" && passUpperCase === "yes" && passNumbers === "yes" && passSpecialChars === "no") {
      return charArray = lowerLettersArray.concat(upperLettersArray, numbersArray);
    } else if (passLowerCase === "yes" && passUpperCase === "yes" && passNumbers === "no" && passSpecialChars === "yes") {
      return charArray = lowerLettersArray.concat(upperLettersArray, specialCharsArray);
    } else if (passLowerCase === "yes" && passUpperCase === "no" && passNumbers === "yes" && passSpecialChars === "yes") {
      return charArray = lowerLettersArray.concat(numbersArray, specialCharsArray);
    } else if (passLowerCase === "no" && passUpperCase === "yes" && passNumbers === "yes" && passSpecialChars === "yes") {
      return charArray = upperLettersArray.concat(numbersArray, specialCharsArray);
    } // handles cases where user selects 3 character types
      
      else {
      return charArray = lowerLettersArray.concat(upperLettersArray, numbersArray, specialCharsArray);
    }  // handles final case where user selects all 4 character types.
    // creates an array containing all characters the user chooses
  }
  charArrayFunc();

  function generatePassword() {
    var charArrayJoined = charArray.join("");
    for (var i = 1; i <= passLength; i++) {
      password += charArrayJoined.charAt(Math.floor(Math.random()* charArray.length));
    }
    return password;
  } // funciton to actually generate the password
  generatePassword();
  passwordText.value = password;
} // function to handle setting up and generating the password

generateBtn.addEventListener("click", writePassword);