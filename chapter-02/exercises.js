
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(input) { //function takes input number
  for (let line = "#"; line.length <= input; line += "#") //create loop that:
  //variable as #, how many loops determined with length, & new line created with +=
  console.log(line); // prints the loop

};


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
   for (i = start; i <= end; i++){ // create loop to go from start to end
    let output = ""; //create output string
    if (i % 3 === 0) output += "fizz"; // if iteration is divisible by 3, add 'fizz'
    if (i % 5 === 0) output += "buzz"; // if i is % by 5, add 'buzz'
    console.log (output || i); // print the output or i when looping
   };
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(number) {
  let board = ''; // create string for board
  for (let i = 0; i < number; i++){ //create loop for board rows
    for (let y = 0; y < number; y++){
    if ((number + i) % 2 === 0){ //creates 'every other' by dividing by 2
      board += ' '; // inserts space for 'every other'    
    } else { //otherwise creates 'every'
      board += "#"; // inserts # for 'every'
    } // closes 'every'
  } //closes 'every other'
    board += "\n"; //creates a new line break
  console.log(board); //prints board
  }
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}