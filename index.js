// Code your solutions in this file
function countDown(startingNumber) {
    let currentNumber = startingNumber;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  // Example usage:
  countDown(10);
  // index.js
  function writeCards(names, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }

  // Example of how to use them:
const names = ['Ronnie', 'Ian', 'Nonzie'];
const eventName = 'birthday';
const messages = writeCards(names, eventName);
console.log(messages);