let boardDiv;
let minDiv;
let fiveMinDiv;
let hourDiv;
let queueDiv;
let initialQueueDiv;
let timeHeader;
let daysHeader;
let minPassedHeader;
let minRemainingHeader;
let framesPerSecond;
let isPaused;
let ballPositions;
let originalPositions;
let morning;
let daysPassed;
let minutesPassed;
let test;

let interval = 0;
const initialQueue = [];

document.addEventListener("DOMContentLoaded", () => {
  boardDiv = document.getElementById("board");
  minDiv = document.getElementById("mintrack");
  fiveMinDiv = document.getElementById("fivemintrack");
  hourDiv = document.getElementById("hourtrack");
  queueDiv = document.getElementById("queuetrack");
  initialQueueDiv = document.getElementById("initialqueue");
  timeHeader = document.getElementById("time");
  daysHeader = document.getElementById("days");
  minPassedHeader = document.getElementById("minpassed");
  minRemainingHeader = document.getElementById("minremain");

  const ballForm = document.createElement("form");
  ballForm.innerHTML = `
    <label>Number of balls (27 - 127)</label>
    <input id='ballinput' required value='30' type='number' min='27' max='127'>
    <br>
    <label>Number of minutes (optional)</label>
    <input id='minuteinput' value='325' min='1', step='1' type='number'>
    <br>
    <label>Speed in FPS (1-1,000)</label>
    <select id="speedinput">
      <option>1000</option>
      <option>100</option>
      <option>10</option>
      <option>1</option>
    </select>
    <br>
    <input id='runbutton' type='submit' value='run'>
    <input id='resetbutton' type='button' value='reset' disabled>
    <input id='pauseplaybutton' type='button' value='pause' disabled>

  `;
  formDiv = document.getElementById("formdiv");
  ballForm.addEventListener("submit", handleFormSubmit);
  formDiv.append(ballForm);
  const ballNumberInput = document.getElementById("ballinput");
  ballNumberInput.addEventListener("change", handleBallChange);
  const resetButton = document.getElementById("resetbutton");
  resetButton.addEventListener("click", handleReset);
  const pausePlayButton = document.getElementById("pauseplaybutton");
  pausePlayButton.addEventListener("click", handlePausePlay);
});

const handleReset = event => {
  clearInterval(interval);
  resetForm();
  resetVariables();
  resetScreen();
};

const handlePausePlay = event => {
  const newValue = !isPaused ? "play" : "pause";
  document.getElementById("pauseplaybutton").setAttribute("value", newValue);
  isPaused = !isPaused;
};

const handleFormSubmit = event => {
  resetVariables();
  event.preventDefault();
  const numberOfBallsInput = parseInt(event.target.children[1].value);
  const minutesRemainingInput =
    event.target.children[4].value === ""
      ? null
      : event.target.children[4].value;
  framesPerSecond = parseInt(event.target.children[7].value);
  clockStarted(numberOfBallsInput, minutesRemainingInput);
  disableForm();
  event.target.reset();
};

const clockCycleDone = () => {
  clearInterval(interval);
  document.getElementById("pauseplaybutton").setAttribute("disabled", true);
};

const resetVariables = () => {
  days = 0;
  minutesRemaining = 0;
  morning = true;
  daysPassed = 0;
  minutesPassed = 0;
  originalPositions = {
    queueTrack: [],
    minuteTrack: [],
    fiveMinuteTrack: [],
    hourTrack: []
  };
  ballPositions = {
    queueTrack: [],
    minuteTrack: [],
    fiveMinuteTrack: [],
    hourTrack: []
  };
  isPaused = false;
};

const resetScreen = () => {
  timeHeader.innerText = `Current time: ${hourAndMinutes()} ${amOrPm()}`;
  daysHeader.innerText = `Total days passed: ${formatWithCommas(dayFormat())}`;
  minPassedHeader.innerText = `Total minutes passed: ${formatWithCommas(
    minutesPassed
  )}`;
  minRemainingHeader.innerText = `Total minutes remaining: ${formatMinutesRemaining()}`;
  minDiv.innerText = `Balls: ${ballPositions.minuteTrack}`;
  fiveMinDiv.innerText = `Balls: ${ballPositions.fiveMinuteTrack}`;
  hourDiv.innerText = `Balls: ${ballPositions.hourTrack}`;
  queueDiv.innerText = `Balls: ${ballPositions.queueTrack}`;
  setInitialQueue(30);
  initialQueueDiv.innerText = `Initial queue: ${initialQueue}`;
};

const disableForm = () => {
  document.getElementById("ballinput").setAttribute("disabled", true);
  document.getElementById("ballinput").setAttribute("value", "");
  document.getElementById("minuteinput").setAttribute("disabled", true);
  document.getElementById("minuteinput").setAttribute("value", "");
  document.getElementById("speedinput").setAttribute("disabled", true);
  document.getElementById("runbutton").setAttribute("disabled", true);
  document.getElementById("resetbutton").removeAttribute("disabled");
  document.getElementById("pauseplaybutton").removeAttribute("disabled");
};

const resetForm = () => {
  document.getElementById("ballinput").removeAttribute("disabled");
  document.getElementById("ballinput").setAttribute("value", "30");
  document.getElementById("minuteinput").removeAttribute("disabled");
  document.getElementById("minuteinput").setAttribute("value", "325");
  document.getElementById("speedinput").removeAttribute("disabled");
  document.getElementById("speedinput").setAttribute("value", "1000");
  document.getElementById("runbutton").removeAttribute("disabled");
  document.getElementById("resetbutton").setAttribute("disabled", true);
  document.getElementById("pauseplaybutton").setAttribute("disabled", true);
};

const handleBallChange = event => {
  const userInput = parseInt(event.target.value);
  setInitialQueue(userInput);
  initialQueueDiv.innerText = `Initial queue: ${initialQueue}`;
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
