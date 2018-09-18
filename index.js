// Code your solutions in this file
function printBadges(array) {
  array.forEach(function(element, index){
    console.log(`Welcome ${element}! You are employee #${index+1}.`);
  });
  return array
};

//tailsNeverFails()
// invokes Math.random() to simulate coin flips ‣
// returns the number of "Tails" flips in a row ‣
// loops indefinitely until a flip results in "Heads"

function tailsNeverFails() {
  let tails = 0
  while (Math.random() >= 0.5) {
    tails += 1
  }
  return `You got ${tails} tails in a row!`
}
