// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";","<",",",">",".","?","/","]"];
var numericChar = [0,1,2,3,4,5,6,7,8,9];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var rau = function randomAlphaUpper(){
  var char = alphaUpper[Math.floor(Math.random()*alphaUpper.length)];
  console.log("Random alpha upper: " + char);
  return char;
}

var ral = function randomAlphaLower(){
  var char = alphaLower[Math.floor(Math.random()*alphaLower.length)];
  console.log("Random alpha lower: " + char);
  return char;
}

var rsc = function randomSpecialChar(){
  var char = specialChar[Math.floor(Math.random()*specialChar.length)];
  console.log("Random special char: " + char);
  return char;
}

var rnc = function randomNumericChar(){
  var char = numericChar[Math.floor(Math.random()*numericChar.length)];
  console.log("Random numeric char: " + char);
  return char;
}

var functionArray = [rau,ral,rsc,rnc];

function randomCharFunction(){
  var randomFunction = functionArray[Math.floor(Math.random()*functionArray.length)];
  console.log("Random function: " + randomFunction.name);
  return randomFunction();
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

  var useLowerCase = confirm("Include lower case characters?");
  console.log("Include lower case: " + useLowerCase);
  var useUpperCase = confirm("Include upper case characters?");
  console.log("Include upper case: " + useUpperCase);
  var useNumeric = confirm("Include numeric characters?");
  console.log("Include numeric characters: " + useNumeric);
  var useSpecialChar = confirm("Include special characters?");
  console.log("Include special characters: " + useSpecialChar);

  // init password object 
  var passwordRules = {

    // Since their are 4 boolean values we can have 2^4 combinations which is 16, but
    // no selections is not allowed so only 15 combinations 
    //  useLowerCase  useUpperCase useNumeric useSpecialChar
    //  useLowerCase  useUpperCase useNumeric !useSpecialChar
    //  useLowerCase  useUpperCase !useNumeric useSpecialChar
    //  useLowerCase  useUpperCase !useNumeric !useSpecialChar
    //  useLowerCase  !useUpperCase useNumeric useSpecialChar
    //  useLowerCase  !useUpperCase useNumeric !useSpecialChar
    //  useLowerCase  !useUpperCase !useNumeric useSpecialChar
    //  useLowerCase  !useUpperCase !useNumeric !useSpecialChar
    //  !useLowerCase  useUpperCase useNumeric useSpecialChar
    //  !useLowerCase  useUpperCase useNumeric !useSpecialChar
    //  !useLowerCase  useUpperCase !useNumeric useSpecialChar
    //  !useLowerCase  useUpperCase !useNumeric !useSpecialChar
    //  !useLowerCase  !useUpperCase useNumeric useSpecialChar
    //  !useLowerCase  !useUpperCase useNumeric !useSpecialChar
    //  !useLowerCase  !useUpperCase !useNumeric useSpecialChar
    //  !useLowerCase  !useUpperCase !useNumeric !useSpecialChar (not allowed and causes error)
    
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useNumeric: useNumeric,
    useSpecialChar: useSpecialChar,

    lowerCaseOnly: function(){
      if (useLowerCase && (!useUpperCase && !useNumeric && !useSpecialChar)){
        return true;
      }
      return false;
    },
    upperCaseOnly: function(){
      if (useUpperCase && (!useLowerCase && !useNumeric && !useSpecialChar)){
        return true;
      }
      return false;
    },
    numericOnly: function(){
      if (useNumeric && (!useLowerCase && !useUpperCase && !useSpecialChar)){
        return true;
      }
      return false;
    },
    specialOnly: function(){
      if (useSpecialChar && (!useLowerCase && !useUpperCase && !useNumeric)){
        return true;
      }
      return false;
    }
  }

  //If no type of characters selected , display error message and return
  if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecialChar){
    alert("You must select one type of character to use");
    return;
  }


  var password = "";
  //initialize lowerCaseUsed used to false if  required, else set to true
  var lowerCaseUsed =  useLowerCase == true?false:true;
  var upperCaseUsed =  useUpperCase == true?false:true;
  var specialCharUsed = useSpecialChar == true?false:true;
  var numericUsed = useNumeric == true?false:true;
  

  // This doesn't work unless we select all types
  for (var i=0;i<length;i++){

    if (useLowerCase && !lowerCaseUsed){
      password += ral();
      lowerCaseUsed = true;
    }
    else if (useUpperCase && !upperCaseUsed){
      password += rau();
      upperCaseUsed = true;
    }
    else if (useNumeric && !numericUsed){
      password += rnc();
      numericUsed = true;
    }
    else if (useSpecialChar && !specialCharUsed){
      password += rsc();
      specialCharUsed = true;
    }
    else{
      password += randomCharFunction();
    }
    console.log("password: " + password);
  }

  // select types of characters
  return password;
}
