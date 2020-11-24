// This project will output a random message when prompted by a user

const you = {
    verb: ['will', 'are', 'can'],
    adjective: [['fall in love', 'die', 'succeed'], ['happy', 'sad', 'optimistic'], ['do it', 'be who you are', 'be successful']]
} 

const randomNumber = Math.floor(Math.random() * 3);
const randomNumber2 = Math.floor(Math.random() * 3);

console.log(`You ${you.verb[randomNumber]} ${you.adjective[randomNumber][randomNumber2]}`);