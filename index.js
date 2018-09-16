// Code your solutions in this file
function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  }
  return arr
}

function maybeTrue() {
  return  Math.round(Math.random());
}

function tailsNeverFails() {
  let i = 0;
  while (maybeTrue()) {
    i++;
  }
  return `You got ${i} tails in a row!`;
}
