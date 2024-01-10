// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaUpperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";","<",",",">",".","?","/","]"];
var numericCharArray = [0,1,2,3,4,5,6,7,8,9];
var passwordCharArray;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var randomChar = function(){
  var char = passwordCharArray[Math.floor(Math.random()*passwordCharArray.length)];
  console.log("Random password char: " + char);
  return char;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //get password length and validate
  var length = prompt("Please enter password length. Length must be at least 8 and no more than 128 characters");
  if (!(length >= 8 && length <= 128)){
    alert ("Invalid password length selected");
    return;
  }
  console.log("Length:" + length);

  //reset passwordCharArray to empty Array
  passwordCharArray = [];


  var lowerCase = confirm("Include lower case characters?");
  console.log("Include lower case: " + lowerCase);
  var upperCase = confirm("Include upper case characters?");
  console.log("Include upper case: " + upperCase);
  var numeric = confirm("Include numeric characters?");
  console.log("Include numeric characters: " + numeric);
  var specialChar = confirm("Include special characters?");
  console.log("Include special characters: " + specialChar);

   
  //If no type of characters selected , display error message and return
  if (!lowerCase && !upperCase && !numeric && !specialChar){
    alert("You must select one type of character to use");
    return;
  }

  if (lowerCase){
    passwordCharArray=passwordCharArray.concat(alphaLowerArray);
  }

  if (upperCase){
    passwordCharArray=passwordCharArray.concat(alphaUpperArray);
  }

  if (specialChar){
    passwordCharArray=passwordCharArray.concat(specialCharArray);
  }

  if (numeric){
    passwordCharArray=passwordCharArray.concat(numericCharArray);
  }

  console.log("Password Char Array: " + passwordCharArray);


  var password = "";
  

  for (var i=0;i<length;i++){
      var char = randomChar();
      console.log("Random password char: " + char);
      password += char;
  }
    console.log("password: " + password);

  // return password
  return password;
}
