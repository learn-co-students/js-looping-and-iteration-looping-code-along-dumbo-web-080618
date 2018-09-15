const names = ["Ada", "Brendan", "Ali"]
function printBadges(names) {
  for (let idx = 0; idx < names.length; idx++) {
    console.log(`Welcome ${names[idx]}! You are employee #${idx+1}.`)
  }
  return names
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let idx = 0
  while (maybeTrue()) {
    idx += 1
  }
  return `You got ${idx} tails in a row!`
}
