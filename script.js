// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask user for length until they provide an integer between 8 & 128
  let lengthStr;
  let lengthNum;

  do {
    lengthStr = prompt('How many characters do you want to include in your password?\nPlease enter an integer between 8 and 128.');
    // If they click cancel, exit the function
    if (lengthStr === null) {
      return;
    }
    lengthNum = Number(lengthStr);
  } while (isNaN(lengthNum) || !Number.isInteger(lengthNum) || lengthNum < 8 || lengthNum > 128);

  console.log(lengthNum);

  // Ask user whether to include each character type; repeat if they don't answer "yes" or "no"
  const charTypes = ['lowercase', 'uppercase', 'numeric', 'special'];
  const charTypeObj = {};

  for (let i = 0; i < charTypes.length; i++) {
    let includeStr;
    let includeBool;

    do {
      includeStr = prompt(`Do you want to include ${ charTypes[i] } characters in your password?\nPlease enter "yes" or "no".`);
      // If they click cancel, exit the function
      if (includeStr === null) {
        return;
      }
      includeStr = includeStr.toLowerCase();
    } while (includeStr !== "yes" && includeStr !== "no");

    // Convert yes/no into boolean values
    if (includeStr === "yes") {
      includeBool = true;
    } else {
      includeBool = false;
    };

    // Map each type to the response
    charTypeObj[charTypes[i]] = includeBool;
  }

  console.log(charTypeObj);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
