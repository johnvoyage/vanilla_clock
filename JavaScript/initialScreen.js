let canvas;
let canvasContext;
let clockInfoDiv;
let numberOfBalls;

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.getElementById("clockCanvas");
  canvasContext = clockCanvas.getContext("2d");
  drawTracks();
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
  event.target.reset();
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
