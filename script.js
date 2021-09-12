let generateBtn = document.querySelector("#generate");
    
function writePassword() {
  let   password = '',
        passLowerCase = '',
        passUpperCase = '',
        passNumbers = '',
        passSpecialChars = '',
        passLength = '',
        passwordText = document.querySelector("#password"),
        charArray = [];
  const lowerLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        upperLettersArray = lowerLettersArray.map(letter => letter.toUpperCase()),
        numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        specialCharsArray = ["!", "#", "$", "%", "&", "@", "*"];
  const inputObject = {
        passLowerCaseKey: '',
        passUpperCaseKey: '',
        passNumbersKey: '',
        passSpecialCharsKey: ''
  }
        // local variable and object setup for writePassword
  
  function userInput() {
    window.alert("Please answer these questions so we can create a password for you! You must select at least 1 type of character to use in the password.");
    
    passLowerCase = window.prompt("Would you like lower case letters in your password?", "Please type Yes or No");
    if (passLowerCase === null) {
      return;
    } else {
      passLowerCase.toLowerCase();
    }
    if ((passLowerCase !== "yes") && (passLowerCase !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    } else if (passLowerCase === "yes") {
      inputObject.passLowerCaseKey = true;
    } else {
      inputObject.passLowerCaseKey = false;
    }
    
    passUpperCase = window.prompt("Would you like upper case letters in your password?", "Please type Yes or No");
    if (passUpperCase === null) {
      return;
    } else {
      passUpperCase.toLowerCase();
    }
    if ((passUpperCase !== "yes") && (passUpperCase !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    } else if (passUpperCase === "yes") {
      inputObject.passUpperCaseKey = true;
    } else {
      inputObject.passUpperCaseKey = false;
    }
    
    passNumbers = window.prompt("Would you like numbers in your password?", "Please type Yes or No");
    if (passNumbers === null) {
      return;
    } else {
      passNumbers.toLowerCase();
    }
    if ((passNumbers !== "yes") && (passNumbers !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    } else if (passNumbers === "yes") {
      inputObject.passNumbersKey = true;
    } else {
      inputObject.passNumbersKey = false;
    }
    
    passSpecialChars = window.prompt("Would you like special characters(#, $, etc) in your password?", "Please type Yes or No");
    if (passSpecialChars === null) {
      return;
    } else {
      passSpecialChars.toLowerCase();
    }
    if ((passLowerCase === "no") && (passUpperCase === "no") && (passNumbers === "no") &&  (passSpecialChars === "no")) {
      return window.alert("Please select at least 1 type of character to use in the password!");
    } else if ((passSpecialChars !== "yes") && (passSpecialChars !== "no")) {
      return window.alert("Please restart and enter Yes or No in the prompt!");
    } else if (passSpecialChars === "yes") {
      inputObject.passSpecialCharsKey = true;
    } else {
      inputObject.passSpecialCharsKey = false;
    }
    
    passLength = window.prompt("Please set the length of the password you would like between 8-128 characters", "Please type a number between 8 and 128");
    if (passLength === null) {
      return;
    } else {
      passLength = Number(passLength);
    }
    if ((passLength < 8 || passLength > 128)){
      passLength = '';
      return window.alert("Please Restart and enter a number between 8 and 128!");
    } else if (Number.isNaN(passLength)) {
      return window.alert("Please restart and enter a number between 8 and 128!");
    }
  } // function using alerts and prompts to take the user input that sets up the password criteria including error handling of improper inputs
  userInput();
  
  function charArrayFunc() {
    if (inputObject.passLowerCaseKey) {charArray = charArray.concat(lowerLettersArray);} 
    if (inputObject.passUpperCaseKey) {charArray = charArray.concat(upperLettersArray);}
    if (inputObject.passNumbersKey) {charArray = charArray.concat(numbersArray);}
    if (inputObject.passSpecialCharsKey) {charArray = charArray.concat(specialCharsArray);}
  } // function to create an array containing all characters the user chooses
  charArrayFunc();

  function generatePassword() {
    let charArrayJoined = charArray.join("");
    for (var i = 1; i <= passLength; i++) {
      password += charArrayJoined.charAt(Math.floor(Math.random()* charArray.length));
    }
    return password;
  } // function to actually generate the password
  generatePassword();
  passwordText.value = password;
} // function to handle setting up and generating the password

generateBtn.addEventListener("click", writePassword);