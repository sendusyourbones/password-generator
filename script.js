// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask user for length until they provide an integer between 8 & 128
  let lengthStr;
  let lengthNum;

  do {
    lengthStr = prompt('How many characters do you want to include in your password?');
    // If they click cancel, stop asking
    if (lengthStr === null) {
      break;
    }
    lengthNum = Number(lengthStr);
  } while (isNaN(lengthNum) || !Number.isInteger(lengthNum) || lengthNum < 8 || lengthNum > 128);

  

  // Prompt user for each character type
  // const charTypes = ['lowercase', 'uppercase', 'numeric', 'special'];
  // for (let i = 0; i < charTypes.length; i++) {
  //   let includeType = prompt(`Do you want to include ${ charTypes[i] } characters in your password?`);
  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
