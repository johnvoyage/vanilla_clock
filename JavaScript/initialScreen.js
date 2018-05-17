let canvas;
let canvasContext;
let clockInfoDiv;

document.addEventListener("DOMContentLoaded", () => {
  canvas = document.getElementById("clockCanvas");
  canvasContext = clockCanvas.getContext("2d");
  drawInitialClock();
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
  const numberOfBalls = parseInt(event.target.children[1].value);

  event.target.reset();
};

const drawTracks = () => {
  for (let track in trackCoords) {
    canvasContext.beginPath();
    canvasContext.moveTo([track].startingX, [track].startingY);
    canvasContext.lineTo([track].endingX, [track].endingY);
    canvasContext.stroke();
  }
};
const drawInitialClock = () => {
  drawTracks();
  // drawMinuteTrack()
  // drawMinuteTrack()
  // drawMinuteTrack()
};

// const drawMinuteTrack = () => {
//   canvasContext.beginPath();
//   canvasContext.moveTo(
//     minuteTrackCoords.startingX,
//     minuteTrackCoords.startingY
//   );
//   canvasContext.lineTo(minuteTrackCoords.endingX, minuteTrackCoords.endingY);
//   canvasContext.stroke();
// };
