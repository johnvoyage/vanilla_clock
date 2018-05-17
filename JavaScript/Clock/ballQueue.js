// const ballCoords = [20, 440];

document.addEventListener("DOMContentLoaded", () => {
  const clockCanvas = document.getElementById("clockCanvas");
  const ball = clockCanvas.getContext("2d");

  let i = 1;
  while (i <= 127) {
    console.log(ballCoords);
    ball.beginPath();
    // ball.fillStyle = "grey";
    // ball.strokeStyle = "black";
    // ball.font = "15px Georgia";
    // ball.lineWidth = 10;
    ball.arc(ballCoords[0], ballCoords[1], 20, 0, 2 * Math.PI);

    // ball.fillStyle = "red";
    // ball.fill();
    // ball.beginPath();
    // ball.fill();
    // ball.fillStyle = "black";
    // ball.fillText(
    // i,
    // ballCoords[0] - 4 * i.toString().length,
    // ballCoords[1] + 5
    // );
    // ball.fill();
    ball.stroke();
    ballCoords[0] < 780 ? (ballCoords[0] += 40) : (ballCoords[0] = 20);
    ballCoords[1] = Math.floor(i / 20) * 40 + 440;
    i++;
  }

  // const ballNumberChanged = event => {
  //   console.log(event.target.value);
  // };
});

const changeBallQueue = queueBalls => {
  const ball = clockCanvas.getContext("2d");

  let i = 1;
  while (i <= queueBalls.length) {
    console.log(ballCoords);
    ball.beginPath();
    ball.fillStyle = "grey";
    ball.strokeStyle = "black";
    ball.font = "15px Georgia";
    ball.lineWidth = 10;
    ball.arc(ballCoords[0], ballCoords[1], 20, 0, 2 * Math.PI);

    // ball.fillStyle = "red";
    ball.fill();
    ball.beginPath();
    // ball.fill();
    ball.fillStyle = "black";
    ball.fillText(
      i,
      ballCoords[0] - 4 * i.toString().length,
      ballCoords[1] + 5
    );
    ball.fill();
    // ball.stroke();
    ballCoords[0] < 780 ? (ballCoords[0] += 40) : (ballCoords[0] = 20);
    ballCoords[1] = Math.floor(i / 20) * 40 + 440;
    i++;
  }
};
