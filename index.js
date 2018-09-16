// Code your solutions in this file
function printBadges(badges){
  for (let i = 0; i < badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`)
  }
  return badges;
}

function maybeTails(){
  return Math.random() >= 0.5;
}
function tailsNeverFails(){
  let count = 0;
  while(maybeTails()){
    count++;
  }
  return `You got ${count} tails in a row!`
}
