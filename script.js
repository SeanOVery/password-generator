let generateBtn = document.querySelector("#generate");
    
function writePassword() {
  let   password = '',
        passLength = '',
        passwordText = document.querySelector("#password"),
        valid = '',
        charArray = [];
  const lowerLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        upperLettersArray = lowerLettersArray.map(letter => letter.toUpperCase()),
        numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        specialCharsArray = ["!", "#", "$", "%", "&", "@", "*"],
        inputObject = {
        passLowerCaseKey: [],
        passUpperCaseKey: [],
        passNumbersKey: [],
        passSpecialCharsKey: []
        }; // local variable and object setup for writePassword
  
  function inputConverterAndErrorHandler(x) {
    if (x[0] === null) {
      return valid = false;
    } else {
      x[0] = x[0].toLowerCase();
    }
    if ((x[0] !== "yes") && (x[0] !== "no")) {
      valid = false
      return window.alert("Please restart and enter Yes or No in the prompt!");
    } else if (x[0] === "yes") {
      x[0] = true;
    } else {
      x[0] = false;
    }
  } // function for error handling and conversion of user choice to false/true
  
  function userInput() {
    window.alert("Please answer these questions so we can create a password for you! You must select at least 1 type of character to use in the password.");
    
    inputObject.passLowerCaseKey[0] = window.prompt("Would you like lower case letters in your password?", "Please type Yes or No");
    inputConverterAndErrorHandler(inputObject.passLowerCaseKey);
    if (valid === false) {return}
    
    inputObject.passUpperCaseKey[0] = window.prompt("Would you like upper case letters in your password?", "Please type Yes or No");
    inputConverterAndErrorHandler(inputObject.passUpperCaseKey);
    if (valid === false) {return}
    
    inputObject.passNumbersKey[0] = window.prompt("Would you like numbers in your password?", "Please type Yes or No");
    inputConverterAndErrorHandler(inputObject.passNumbersKey);
    if (valid === false) {return}
    
    inputObject.passSpecialCharsKey[0] = window.prompt("Would you like special characters(#, $, etc) in your password?", "Please type Yes or No");
    inputConverterAndErrorHandler(inputObject.passSpecialCharsKey);
    if (valid === false) {return}
    if ((!inputObject.passLowerCaseKey[0]) && (!inputObject.passUpperCaseKey[0]) && (!inputObject.passNumbersKey[0]) && (!inputObject.passSpecialCharsKey[0])) { 
      return window.alert("Please select at least 1 type of character to use in the password!"); 
    }
    
    passLength = window.prompt("Please set the length of the password you would like between 8-128 characters", "Please type a number between 8 and 128");
    if (passLength === null) {
      return;
    } else {
      passLength = Number(passLength);
    }
    if (passLength < 8 || passLength > 128 || Number.isNaN(passLength)){ 
      passLength = ''; 
      return window.alert("Please Restart and enter a number between 8 and 128!"); 
    }
  } // function using alerts and prompts to take the user input that sets up the password criteria including error handling of improper inputs
  userInput();
  
  function charArrayFunc() {
    if (inputObject.passLowerCaseKey[0]) {charArray = charArray.concat(lowerLettersArray);}
    if (inputObject.passUpperCaseKey[0]) {charArray = charArray.concat(upperLettersArray);}
    if (inputObject.passNumbersKey[0]) {charArray = charArray.concat(numbersArray);}
    if (inputObject.passSpecialCharsKey[0]) {charArray = charArray.concat(specialCharsArray);}
  } // function to create an array containing all characters the user chooses
  charArrayFunc();

  function generatePassword() {
    let charArrayJoined = charArray.join("");
    for (var i = 1; i <= passLength; i++) {
      password += charArrayJoined.charAt(Math.floor(Math.random()* charArrayJoined.length));
    }
  } // function to actually generate the password from the created array
  generatePassword();
  passwordText.value = password;
} // function to handle setting up and generating the password

generateBtn.addEventListener("click", writePassword);