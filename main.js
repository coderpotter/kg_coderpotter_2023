/* Created by coderpotter
Started on 04/29/2021 12:16:56
Ended on 04/29/2021 13:30:23
*/

// dictionary to convert digits to string equivalent
var dict = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  0: "Zero",
};

answer = ""; // initialized as empty string

// function to take a number (converted to string) and get the phonetic equivalent of that number using the dict. The function also updates the variable answer.
function phonetics(item) {
  var ret = "";
  for (var i = 0; i < item.length; i++) {
    // parse the string
    ret += dict[item.charAt(i)];
  }
  answer += ret + ","; // update answer as a comma separated string of phonetic equivalents
}

var inputs = process.argv.slice(2).map(function (e) {
  // reading inputs from command line and converting them to strings
  return e.toString();
});

inputs.forEach(phonetics); // call the function for each element in the input list
console.log(answer.slice(0, -1)); // print the answer after removing the trailing comma
