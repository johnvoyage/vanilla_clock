let canvas;
let canvasContext;
let clockInfoDiv;
let numberOfBalls;
let examplePosition = -1;

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.getElementById("clockCanvas");
  canvasContext = clockCanvas.getContext("2d");
  drawBackground();
  drawTracks();
  // startExampleBall();
  const ballForm = document.createElement("form");
  ballForm.innerHTML = `
    <label>Number of balls (27 - 127)</label>
    <input id='ballInput' required type='number' min='27' max='127'>
    <label>Number of minutes (optional)</label>
    <input id='minuteInput' min='1', step='1' type='number'>
    <input type='submit'>
  `;
  clockInfoDiv = document.getElementById("clockInfo");
  ballForm.addEventListener("submit", handleSubmit);
  clockInfoDiv.append(ballForm);
});

const handleSubmit = event => {
  event.preventDefault();
  numberOfBalls = parseInt(event.target.children[1].value);
  createBalls(numberOfBalls);
  event.target.remove();
  showClock();
};

const drawBackground = () => {
  canvasContext.fillStyle = "grey";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
};

const drawTracks = () => {
  const trackCoords = { ...staticTracks, ...fluidTracks };
  for (let track in trackCoords) {
    canvasContext.beginPath();
    canvasContext.moveTo(
      trackCoords[track].startingX,
      trackCoords[track].startingY
    );
    canvasContext.lineTo(
      trackCoords[track].endingX,
      trackCoords[track].endingY
    );
    canvasContext.stroke();
  }
};

const startExampleBall = () => {
  setInterval(() => {
    moveExampleBall();
    drawExampleBall();
  }, 100);
};

const moveExampleBall = () => {
  // console.log(exampleBall);
  examplePosition > ballPositions.length - 2
    ? (examplePosition = 0)
    : (examplePosition += 1);
};

// const ballPositions = [
//   { x: 20, y: 680 },
//   { x: 20, y: 640 },
//   { x: 20, y: 600 },
//   { x: 20, y: 560 },
//   { x: 20, y: 520 },
//   { x: 20, y: 480 },
//   { x: 20, y: 440 },
//   { x: 20, y: 400 }

const drawExampleBall = () => {
  drawBackground();
  drawTracks();

  canvasContext.beginPath();
  canvasContext.fillStyle = "black";
  canvasContext.arc(
    ballPositions[examplePosition].x,
    ballPositions[examplePosition].y,
    20,
    0,
    2 * Math.PI
  );
  canvasContext.fill();
};
