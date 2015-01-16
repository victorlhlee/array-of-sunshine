/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
 return str.split('').reverse().join('');
}
reverseString("cat");



/**
  Write a function that takes two parameters as input in the order
  of string, character. With the first string parameter use Array
  functionality remove the last character and put it at the beginning
  of the array. Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/
// function spliceString(str, char) {
//   // split the string
//   var word = str.split("");
//   //remove the last letter in word
//   var lastLetter = word.pop();
//   //last letter to front
//   word.unshift(lastLetter);
//  }

// spliceString("dog", "x");


function spliceString(str, char) {

//var charAt = str.length - 1;
  //splitting string into an array
  var strArray = str.split("");
  //remove last letter in string
  var lastLetter = strArray.pop(); //output "t"
  //putting last letter to front of array
  var newArray = strArray.unshift(lastLetter);
  //adding character to second to last position in the newArray
  newArray = strArray.splice(-1, 0, char);
  //converting newArray into a string
  var combineArray = strArray.join("");


// console.log(combineArray);

return  combineArray;

} spliceString("pumpkin", "q");

/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
function speakPigLatin(strArray) {
  // console.log(strArray);
  //var oldArr = ["she", "sells", "seashells", "by", "the", "seashore"];
  
  var newArr = strArray.map(function (str){
    //removing first letter in string and concating "ay" to end of string
    var concate = str.slice(1, str.length) + str[0] + "ay"; 
    return concate;
  });
  return newArr;
 }