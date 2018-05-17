//   let i = 1;
//   while (i <= 127) {
//     console.log(ballCoords);
//     canvasContext.beginPath();
//     // canvasContext.fillStyle = "grey";
//     // canvasContext.strokeStyle = "black";
//     // canvasContext.font = "15px Georgia";
//     // canvasContext.lineWidth = 10;
//     canvasContext.arc(ballCoords[0], ballCoords[1], 20, 0, 2 * Math.PI);
//
//     // canvasContext.fillStyle = "red";
//     // canvasContext.fill();
//     // canvasContext.beginPath();
//     // canvasContext.fill();
//     // canvasContext.fillStyle = "black";
//     // canvasContext.fillText(
//     // i,
//     // ballCoords[0] - 4 * i.toString().length,
//     // ballCoords[1] + 5
//     // );
//     // canvasContext.fill();
//     canvasContext.stroke();
//     ballCoords[0] < 780 ? (ballCoords[0] += 40) : (ballCoords[0] = 20);
//     ballCoords[1] = Math.floor(i / 20) * 40 + 440;
//     i++;
//   }

const createBalls = numberOfBalls => {
  let counter = 2;
  while (counter <= numberOfBalls) {
    ballArray.push({
      ballNumber: counter,
      xCoordinate: 0,
      yCoordinate: 0
    });
    counter++;
  }
  drawBalls(ballArray);
};

const drawBalls = ballArray => {
  console.log(ballArray);
  canvasContext.beginPath();
  canvasContext.fillStyle = "grey";
  canvasContext.arc(
    ballArray[0].xCoordinate,
    ballArray[0].yCoordinate,
    20,
    0,
    2 * Math.PI
  );
  canvasContext.fill();
};
