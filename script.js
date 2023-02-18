// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // LENGTH
  let lengthStr;
  let lengthNum;

  // Ask length; repeat if user does not provide an int between 8 & 128
  do {
    lengthStr = prompt('How many characters do you want to include in your password?\nPlease enter an integer between 8 and 128.');
    // If they click cancel, exit the function
    if (lengthStr === null) {
      return;
    }
    lengthNum = Number(lengthStr);
  } while (isNaN(lengthNum) || !Number.isInteger(lengthNum) || lengthNum < 8 || lengthNum > 128);

  // CHARACTER TYPES
  const charTypes = ['lowercase', 'uppercase', 'numeric', 'special'];
  const selectedTypes = [];

  // Ask character type questions; repeat set if user answers "no" to all
  do {
    for (let i = 0; i < charTypes.length; i++) {
      let includeStr;
      let includeBool;

      // Ask each character type; repeat question if user does not respond "yes" or "no"
      do {
        includeStr = prompt(`Do you want to include ${ charTypes[i] } characters in your password?\nPlease enter "yes" or "no". You must choose at least one of four character type options.`);
        // If they click cancel, exit the function
        if (includeStr === null) {
          return;
        }
        includeStr = includeStr.toLowerCase();
      } while (includeStr !== "yes" && includeStr !== "no");

      // If they answer "yes", add the type to a new array
      if (includeStr === "yes") {
        selectedTypes.push(charTypes[i]);
      };
    }
  } while (selectedTypes.length === 0);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
