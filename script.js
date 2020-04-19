// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var characters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJLKMNOPQRSTUVWXYZ0123456789!@#$%^&*()_"
];
var pass = "";
for(var i = 0; pass.length;  i++) {
    pass + chars.charAt(mathFloor(math.random() + chars.length)); {
console.log()
    }

var passLength = 0;
var uppercase = false;
var numeric = false;
var specialChars = false;
var lowercase = false;
var specialChars = false;
var alertBanner = false;

while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt( "Enter a length for the password (8-128): ");
}
while (lowerCase && upperCase && numeric && specialChars) {
    if(alertbanner) {alert("Choose one character type.")};
    lowerCase = confirm ("Please choose lowercase characters.");
    upperCase = confirm("Please choose uppercase characters.");
    specialChars = confirm ("Please choose special characters.");
    numeric = confirm ("Please choose numeric characters");
    if(lowerCase && upperCase && numeric && specialChars){alertbanner = true};

    }
}

// Generate function
generatePassword
//return pass;

//function getRandomLower()  {
//return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}

//function getRandomUpper() {
//return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}

//function getRandomNumber() {
   // return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

 //   function getRandomSymbol() {
 //       const symbols = "!@#$%^&*()_]";
//    return symbols = [Math.floor(Math.random() * symbols.length)];
//    }

 //   console.log(getRandomNumber())

// var characters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJLKMNOPQRSTUVWXYZ1234567890!@#$%^&*()_"];

//var passChar = "";
//var uppercase = false;
//var numeric = false;
//var specialChar = false;
//var lowercase = false;
//var lowercase = false;

  //  let complexity = document.getElementById("button").value;

  //  let password = "";

 //   for(var i = 0; i <= complexity; i++){
//password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
 //   }
// }
    // Do some code
 //document.getElementById("placeholder").value = password;

    // return password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}
