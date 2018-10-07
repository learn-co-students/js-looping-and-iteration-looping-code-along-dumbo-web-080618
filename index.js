function printBadges(element) {
  for (let i = 0; i < element.length; i++) {
    console.log(`Welcome ${element[i]}! You are employee #${i + 1}.`)
  }
  return element
}

function tailsNeverFails() {
  let tails = 0
  while (Math.random() >= 0.5) {
    tails++;
  }
  console.log(`You got ${tails} tails in a row!`)
  return (`You got ${tails} tails in a row!`)
}
