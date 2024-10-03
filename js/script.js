
const btn = document.getElementById("guessSubmit");
const input = document.getElementById("guessInput");
const text = document.getElementById("result");
btn.addEventListener("click", teste);

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));
let attemps = 1;
let guess;

function teste() {
  guess = parseInt(input.value);
  if (isNaN(guess)) {
    text.innerHTML = "Use only numbers ";
    input.value = "";
    // this is for having the numbers between 1 to 100
  } else if (guess < minNum || guess > maxNum) {
    text.innerHTML = "Chose between 1 to 100";
    input.value = "";
    // if you are 5 less than correct one
  } else if (guess < answer) {
    if (answer - guess <= 5) {
      attemps++;
      text.innerHTML = "Too low but almost there!";
    } else {
      text.innerHTML = "Too low";
    }
    // if you are 5 numbers above the correct one
  } else if (guess > answer) {
    if (guess - answer <= 5) {
      text.innerHTML = "Too much but close!";
    } else {
      text.innerHTML = "Too much";
    }
    // this is for knowing how many attempts it took 
  } else {
    text.innerHTML =`Correct! The answer was ${guess}, It took ${attemps} attemps.`;
  }
}
console.log(answer);