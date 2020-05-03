//Looping a Triangle

// My Solution:
let count = 0;
let hash = "";
while (count < 7) {
  hash = hash + "#";
  count = count + 1;
  console.log(hash);
}

/* Book solution:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
  */

//FizzBuzz

// //My solution:
for (number = 1; number <= 100; number++){
  if (number % 3 === 0 && number % 5 === 0){
    console.log("fizzbuzz")
  } else if (number % 3 === 0){
    console.log("fizz")
  } else if (number % 5 === 0){
    console.log("buzz");
  } else {
  console.log(number);
  }
}

/* Book solution:
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/

// Chessboard

//My solution:

// Struggled for about 30 minutes but didn't even come close.

/*Book solution:

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/
