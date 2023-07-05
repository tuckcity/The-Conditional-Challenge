/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank = '';

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const questionOne = prompt('What is the best NFL team?');
const questionTwo = prompt('What is the best color in the world?');
const questionThree = prompt('What programming language is the best?');
const questionFour = prompt('Dogs are better than cats. Agree?');
const questionFive = prompt('Which season is the best?');

if (questionOne.toUpperCase() === '49ERS') {
  correctAnswers += 1;
}
if (questionTwo.toUpperCase() === 'RED') {
  correctAnswers += 1;
}
if (questionThree.toUpperCase() === 'JAVASCRIPT') {
  correctAnswers += 1;
}
if (questionFour.toUpperCase() === 'YES') {
  correctAnswers += 1;
}
if (questionFive.toUpperCase() === 'SUMMER') {
  correctAnswers += 1;
}

console.log(correctAnswers);

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correctAnswers === 5) {
  playerRank = 'Gold';
} else if (correctAnswers === 4 || correctAnswers === 3) {
  playerRank = 'Silver'
} else if (correctAnswers === 1 || correctAnswers === 2) {
  playerRank = 'Bronze'
} else {
  playerRank = 'You are TRASH!';
}

console.log(playerRank);

// 6. Output results to the <main> element

main.innerHTML = `<h2>You got ${correctAnswers} out of 5 questions correct.</h2>
<p>Crown earned: <strong>${playerRank}</strong></p>`;
