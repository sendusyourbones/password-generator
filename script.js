// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // LENGTH
  let lengthStr;
  let lengthNum;

  // Ask length; repeat if user does not provide an int between 8 & 128
  do {
    lengthStr = prompt('How many characters do you want to include in your password?\nPlease enter an integer between 8 and 128.');
    // If they click cancel, exit the function and return empty string so placeholder text remains
    if (lengthStr === null) {
      return '';
    }
    lengthNum = Number(lengthStr);
  } while (isNaN(lengthNum) || !Number.isInteger(lengthNum) || lengthNum < 8 || lengthNum > 128);

  // CHARACTER TYPES
  const charTypes = ['lowercase', 'uppercase', 'numeric', 'special'];
  const selectedTypes = [];

  // Ask character type questions; repeat set if user answers "no" to all
  do {
    for (let i = 0; i < charTypes.length; i++) {
      let includeType;

      // Ask each character type; repeat question if user does not respond "yes" or "no"
      do {
        includeType = prompt(`Character Type ${ i + 1 } of 4\nDo you want to include ${ charTypes[i] } characters in your password?\nPlease enter "yes" or "no". You must choose at least one character type option.`);
        // If they click cancel, exit the function and return empty string so placeholder text remains
        if (includeType === null) {
          return '';
        }
        includeType = includeType.toLowerCase();
      } while (includeType !== "yes" && includeType !== "no");

      // If they answer "yes", add the type to a new array
      if (includeType === "yes") {
        selectedTypes.push(charTypes[i]);
      };
    }
  } while (selectedTypes.length === 0);

  // PASSWORD CREATION
  // Arrays for each character type and all of their options
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const special = [' ','!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  // Create object with all types the user selected and their options
  const typesCount = selectedTypes.length;
  const charObj = {};

  for (let i = 0; i < typesCount; i++) {
    switch(selectedTypes[i]) {
      case 'lowercase':
        charObj['lowercase'] = lowercase;
        break;
      case 'uppercase':
        charObj['uppercase'] = uppercase;
        break;
      case 'numeric':
        charObj['numeric'] = numeric;
        break;
      case 'special':
        charObj['special'] = special;
        break;
    }
  }

  // Build password character by character
  let newPassword = '';

  for (let i = 0; i < lengthNum; i++) {
    // Create array of options for this character
    let thisCharOptions = [];
    
    // Ensure all types are used by first going through the selected types in order, then choose type randomly
    if (i < typesCount) {
      thisCharOptions = charObj[selectedTypes[i]];
    } else {
      let typeIndex = Math.floor(Math.random() * typesCount);
      thisCharOptions = charObj[selectedTypes[typeIndex]];
    }

    // Choose this character via randomly chosen index
    let charOptionsCount = thisCharOptions.length;
    let charIndex = Math.floor(Math.random() * charOptionsCount);
    let thisChar = thisCharOptions[charIndex];

    // Add this character to the password
    newPassword = newPassword + thisChar;
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
