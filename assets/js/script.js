var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_-+=<>?/";
var numbers = "0123456789";

function getRandomCharacter(characters){
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

function generatePassword(){
  var password = "";
  
  var length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));
  
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return ""; 
  }
  
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useSpecialCharacters = confirm("Include special characters?");
  var useNumbers = confirm("Include numbers?");
  
  if (!useLowercase && !useUppercase && !useSpecialCharacters && !useNumbers) {
    alert("You must select at least one character type.");
    return ""; 
  }
  
  var availableCharacters = "";
  
  if (useLowercase) {
    availableCharacters += lowercase;
  }
  
  if (useUppercase) {
    availableCharacters += uppercase;
  }
  
  if (useSpecialCharacters) {
    availableCharacters += specialCharacters;
  }
  
  if (useNumbers) {
    availableCharacters += numbers;
  }
  
  for (var i = 0; i < length; i++) {
    password += getRandomCharacter(availableCharacters);
  }
  
  return password;
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
