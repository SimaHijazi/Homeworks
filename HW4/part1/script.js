const ranNum = Math.floor(Math.random() * 10) + 1;
const guess = prompt("Guess a number between 1 and 10:");

if (parseInt(guess) === ranNum) {
    console.log("Good Work");
    alert("Good Work");
} else {
    console.log("Not matched. The number was " + ranNum);
    alert("Not matched");
}