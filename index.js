// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts){
//   for(let i = 0; i < gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts
// };
//
// for(let age = 30; age < 40; age++){
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// };

function printBadges(arrayOfNames){
  for(let i = 0; i < arrayOfNames.length; i++){
    console.log(`Welcome ${arrayOfNames[i]}! You are employee #${i + 1}.`);
  }
  return arrayOfNames;
};

function tailsNeverFails(){
  let streakCount = 0;

  let coinFlip = Math.round(Math.random());


  while(coinFlip){
    streakCount ++;
    coinFlip = Math.round(Math.random());
  }
  return `You got ${streakCount} tails in a row!`;
};
