const ballCoords = [20, 440];

document.addEventListener("DOMContentLoaded", () => {
  console.log("ballQueue.js loaded");

  const clockCanvas = document.getElementById("clockCanvas");

  const ball = clockCanvas.getContext("2d");
  let i = 1;
  while (i <= 127) {
    console.log(ballCoords);
    ball.beginPath();
    ball.arc(ballCoords[0], ballCoords[1], 20, 0, 2 * Math.PI);
    ballCoords[0] < 780 ? (ballCoords[0] += 40) : (ballCoords[0] = 20);
    ballCoords[1] = Math.floor(i / 20) * 40 + 440;
    ball.stroke();
    i++;
  }
});
