// Assignment Code

// Initialize arrays of upper case alpha, lower case alpha, special characters, and numeric char.
// PasswordChar Array is empty and will be added to as user is prompted for types of characters to use
var alphaUpperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";","<",",",">",".","?","/","]"];
var numericCharArray = [0,1,2,3,4,5,6,7,8,9];
var passwordCharArray = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Password could be undefined if improper length or no character types were selected
  if (password == undefined){
    password = "";
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function expression to return a random character from the characters in the passwordCharArray
var randomChar = function(){
  var char = passwordCharArray[Math.floor(Math.random()*passwordCharArray.length)];
//  console.log("Random password char: " + char);
  return char;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword(){
  var password = "";
  // Get password length and validate. Return if invalid length
  var length = prompt("Please enter password length. Length must be at least 8 and no more than 128 characters");
  if (!(length >= 8 && length <= 128)){
    alert ("Invalid password length entered. Length must be at least 8 and no more than 128 characters ");
    return;
  }
  console.log("Length:" + length);

  // Reset passwordCharArray to empty Array
  passwordCharArray = [];

  // Get password rules
  var lowerCase = confirm("Include lower case characters?");
  console.log("Include lower case: " + lowerCase);
  var numeric = confirm("Include numeric characters?");
  console.log("Include numeric characters: " + numeric);
  var specialChar = confirm("Include special characters?");
  console.log("Include special characters: " + specialChar);
  var upperCase = confirm("Include upper case characters?");
  console.log("Include upper case: " + upperCase);
 

   
  // If no type of characters selected , display error message and return
  if (!lowerCase && !upperCase && !numeric && !specialChar){
    alert("You must select one type of character to use");
    // Return an empty string password
    return ;
  }

  // Add lower case array to passwordCharArray if selected
  if (lowerCase){
    passwordCharArray=passwordCharArray.concat(alphaLowerArray);
  }

  // Add upper case array to passwordCharArray if selected
  if (upperCase){
    passwordCharArray=passwordCharArray.concat(alphaUpperArray);
  }

  // Add special char array to passwordCharArray if selected
  if (specialChar){
    passwordCharArray=passwordCharArray.concat(specialCharArray);
  }

  // Add numeric array to passwordCharArray if selected
  if (numeric){
    passwordCharArray=passwordCharArray.concat(numericCharArray);
  }

  //console.log("Password Char Array: " + passwordCharArray);
  
  /* For the password length desired, get random characters from the password char array and append
     to password.  */
  for (var i=0;i<length;i++){
      var char = randomChar();
      //console.log("Random password char: " + char);
      password += char;
  }

  console.log("password: " + password);
  return password;
}
