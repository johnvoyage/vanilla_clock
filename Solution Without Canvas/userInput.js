let boardDiv;
let minDivk;
let fiveMinDivtrack;
let hourDivck;
let queueDivack;
let timeHeader;
let daysHeader;
let minPassedHeadered;
let minRemainingHeaderin;
const initialQueue = [];

document.addEventListener("DOMContentLoaded", () => {
  boardDiv = document.getElementById("board");
  minDiv = document.getElementById("mintrack");
  fiveMinDiv = document.getElementById("fivemintrack");
  hourDiv = document.getElementById("hourtrack");
  queueDiv = document.getElementById("queuetrack");
  timeHeader = document.getElementById("time");
  daysHeader = document.getElementById("days");
  minPassedHeader = document.getElementById("minpassed");
  minRemainingHeader = document.getElementById("minremain");

  const ballForm = document.createElement("form");
  ballForm.innerHTML = `
    <label>Number of balls (27 - 127)</label>
    <input id='ballInput' required type='number' min='27' max='127'>
    <br>
    <label>Number of minutes (optional)</label>
    <input id='minuteInput' min='1', step='1' type='number'>
    <br>
    <label>Speed in FPS (1-1,000)</label>
    <input type="range" min="1" max="1000" value="1000">
    <br>
    <input type='submit'>
  `;
  formDiv = document.getElementById("formdiv");
  ballForm.addEventListener("submit", handleFormSubmit);
  formDiv.append(ballForm);
  const ballNumberInput = document.getElementById("ballInput");
  ballNumberInput.addEventListener("change", handleBallChange);
});

const handleFormSubmit = event => {
  event.preventDefault();
  console.log(event);
  event.target.reset();
};

const handleBallChange = event => {
  const userInput = parseInt(event.target.value);
  setInitialQueue(userInput);
  queueDiv.innerText = `Initial balls: ${initialQueue}`;
  // debugger;
  // console.log(event);
  // setTrack(ballPositions, numberOfBalls);
};

const setInitialQueue = number => {
  initialQueue.length = 0;
  if (number < 27 || number > 127) {
    initialQueue.length = 0;
  } else {
    for (let counter = 1; counter <= number; counter++) {
      initialQueue.push(counter);
    }
  }
};
